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
 * The script will automatically create headers on first submission
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add header row if empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Service Type', 'Project Details']);
  }
  
  // Add form data
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.serviceType,
    data.projectDetails
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success' })
  ).setMimeType(ContentService.MimeType.JSON);
}
