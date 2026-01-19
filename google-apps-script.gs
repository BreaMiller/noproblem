/**
 * Google Apps Script to handle NP Services LLC form submissions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Spreadsheet (e.g., "NP Services Form Submissions")
 * 2. Go to Extensions > Apps Script
 * 3. Copy and paste this code into the script editor
 * 4. Save the script (Ctrl+S or Cmd+S)
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Settings:
 *    - Description: "NP Services Form Handler"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the Web app URL
 * 10. Replace SCRIPT_URL in script.js with your Web app URL
 * 11. Authorize the script when prompted
 * 
 * The script will automatically create a sheet named "Form Submissions" with headers
 */

function doPost(e) {
  try {
    // Parse the form data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Get or create the "Form Submissions" sheet
    let sheet = ss.getSheetByName('Form Submissions');
    if (!sheet) {
      sheet = ss.insertSheet('Form Submissions');
      // Add headers if this is a new sheet
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Service Type',
        'Project Details',
        'IP Address',
        'User Agent'
      ]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#7CB342');
      headerRange.setFontColor('#FFFFFF');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Timestamp
      sheet.setColumnWidth(2, 150); // Name
      sheet.setColumnWidth(3, 200); // Email
      sheet.setColumnWidth(4, 120); // Phone
      sheet.setColumnWidth(5, 150); // Service Type
      sheet.setColumnWidth(6, 300); // Project Details
      sheet.setColumnWidth(7, 150); // IP Address
      sheet.setColumnWidth(8, 250); // User Agent
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Get request metadata
    const ipAddress = e.parameter.userip || 'N/A';
    const userAgent = e.parameter.useragent || 'N/A';
    
    // Append the new row with form data
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.serviceType || '',
      data.projectDetails || '',
      ipAddress,
      userAgent
    ]);
    
    // Optional: Send email notification to the business owner
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Send email notification when a new form is submitted
 * OPTIONAL: Configure the email address below
 */
function sendEmailNotification(data) {
  try {
    // CONFIGURE THIS: Replace with your business email
    const recipientEmail = 'your-email@example.com'; // *** CHANGE THIS ***
    
    // Skip email if not configured
    if (recipientEmail === 'your-email@example.com') {
      return;
    }
    
    const subject = '🏠 New Project Inquiry - NP Services LLC';
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #7CB342; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Project Inquiry</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f5f5f5;">
          <h2 style="color: #333;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px;">${data.name || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${data.email}">${data.email || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;"><a href="tel:${data.phone}">${data.phone || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Service Type:</td>
              <td style="padding: 10px;">${data.serviceType || 'N/A'}</td>
            </tr>
          </table>
          
          <h2 style="color: #333; margin-top: 20px;">Project Details</h2>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #7CB342;">
            ${data.projectDetails || 'No details provided'}
          </div>
          
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
        
        <div style="background-color: #333; padding: 15px; text-align: center; color: white; font-size: 12px;">
          <p>NP Services LLC - Professional Remodeling Services</p>
        </div>
      </div>
    `;
    
    const plainBody = `
New Project Inquiry - NP Services LLC

Contact Information:
Name: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
Phone: ${data.phone || 'N/A'}
Service Type: ${data.serviceType || 'N/A'}

Project Details:
${data.projectDetails || 'No details provided'}

Submitted on: ${new Date().toLocaleString()}
    `;
    
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody
    });
    
  } catch (error) {
    Logger.log('Email notification error: ' + error.toString());
  }
}

/**
 * Test function to verify the script is working
 * Run this from the Apps Script editor to test
 */
function testSubmission() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '555-0123',
        serviceType: 'Kitchen Remodeling',
        projectDetails: 'This is a test submission to verify the form handler is working correctly.'
      })
    },
    parameter: {
      userip: '127.0.0.1',
      useragent: 'Test Browser'
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
