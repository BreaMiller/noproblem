// Google Apps Script for handling form submissions
// Deploy as a web app with "Execute as: [Your Email]" and "Who has access: Anyone"

const SHEET_ID = "YOUR_SHEET_ID"; // Replace with your actual Google Sheet ID
const CONTACT_SHEET = "Contact Submissions"; // Sheet name for contact form
const NEWSLETTER_SHEET = "Newsletter Emails"; // Sheet name for newsletter signups

function doPost(e) {
  try {
    const params = e.parameter;
    const formType = params.formType;
    
    if (formType === "newsletter") {
      // Handle newsletter subscription
      return handleNewsletterSubmission(params);
    } else if (formType === "contact") {
      // Handle contact form submission
      return handleContactSubmission(params);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Invalid form type"
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    Logger.log("Error: " + error);
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleNewsletterSubmission(params) {
  try {
    const email = params.email;
    
    if (!email) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Email is required"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = getOrCreateSheet(spreadsheet, NEWSLETTER_SHEET);
    
    // Add headers if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Email", "Status"]);
    }
    
    // Check if email already exists
    const range = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1);
    const values = range.getValues();
    for (let i = 0; i < values.length; i++) {
      if (values[i][0] === email) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "info",
          message: "Email already subscribed"
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Add new subscription
    sheet.appendRow([new Date(), email, "Subscribed"]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Thank you for subscribing!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Newsletter error: " + error);
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleContactSubmission(params) {
  try {
    const name = params.name || "";
    const email = params.email || "";
    const phone = params.phone || "";
    const serviceType = params.serviceType || "";
    const message = params.message || "";
    
    if (!email || !message) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Email and message are required"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = getOrCreateSheet(spreadsheet, CONTACT_SHEET);
    
    // Add headers if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Service Type", "Message", "Status"]);
    }
    
    // Add new submission
    sheet.appendRow([new Date(), name, email, phone, serviceType, message, "New"]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Thank you for your inquiry! We will contact you soon."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Contact form error: " + error);
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(spreadsheet, sheetName) {
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}
