# Google Apps Script Setup Guide

## Overview
This guide will help you set up Google Apps Script to handle form submissions from your NP Services LLC website. Form submissions will be automatically saved to a Google Spreadsheet.

## Step-by-Step Setup

### 1. Create a Google Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "NP Services Form Submissions" (or any name you prefer)
4. Keep this spreadsheet open in a tab

### 2. Open Apps Script Editor
1. In your Google Spreadsheet, click **Extensions** > **Apps Script**
2. This will open the Apps Script editor in a new tab
3. Delete any default code in the editor

### 3. Add the Script Code
1. Open the file `google-apps-script.gs` from this repository
2. Copy all the code
3. Paste it into the Apps Script editor
4. **Optional:** Update line 120 with your business email to receive notifications:
   ```javascript
   const recipientEmail = 'your-email@example.com'; // Replace with your actual email
   ```
5. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
6. Name your project (e.g., "NP Services Form Handler")

### 4. Deploy the Web App
1. Click **Deploy** button (top right) > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Configure the deployment:
   - **Description:** "NP Services Form Handler" (or any description)
   - **Execute as:** Me (your-email@gmail.com)
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Important:** You'll be asked to authorize the script
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** that appears (it will look like: `https://script.google.com/macros/s/...`)

### 5. Update Your Website
1. Open `script.js` in your website code
2. Find the line that says:
   ```javascript
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web app URL you copied
4. Save the file

### 6. Test the Form
1. Visit your website
2. Fill out the contact form with test data
3. Submit the form
4. Check your Google Spreadsheet - you should see a new row with the submission
5. If you configured email notifications, check your inbox

## What Gets Saved

Each form submission creates a new row in the spreadsheet with:
- **Timestamp** - When the form was submitted
- **Name** - Contact's name
- **Email** - Contact's email address
- **Phone** - Contact's phone number
- **Service Type** - Selected service (Kitchen, Bathroom, etc.)
- **Project Details** - Description of the project
- **IP Address** - Submitter's IP (if available)
- **User Agent** - Browser information

## Email Notifications (Optional)

If you configured an email address in the script, you'll receive:
- Professional HTML email with all submission details
- Clickable phone and email links
- Formatted project details
- Timestamp

## Troubleshooting

### Form not submitting?
1. Check browser console for errors (F12)
2. Verify the Web app URL is correctly set in `script.js`
3. Make sure the deployment is set to "Anyone" can access

### Not receiving emails?
1. Check your spam folder
2. Verify the email address in the script is correct
3. Check the Apps Script execution logs:
   - Go to Apps Script editor
   - Click **Executions** in the left sidebar

### Submissions not appearing in spreadsheet?
1. Check the Apps Script execution logs for errors
2. Verify you authorized the script properly
3. Try running the `testSubmission()` function in the Apps Script editor

## Viewing Execution Logs
1. Go to your Apps Script editor
2. Click **Executions** in the left sidebar
3. You'll see all form submissions and any errors

## Security Notes
- The Web app URL is public but only accepts POST requests
- No sensitive data is exposed through the script
- All submissions are logged with timestamp and metadata
- Consider adding rate limiting if you experience spam

## Updating the Script
If you need to modify the script:
1. Edit the code in the Apps Script editor
2. Click **Save**
3. Click **Deploy** > **Manage deployments**
4. Click the edit icon (✏️) next to your deployment
5. Change "Version" to "New version"
6. Add a description of changes
7. Click **Deploy**
8. The Web app URL remains the same

## Support
For questions about Google Apps Script, visit:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Spreadsheet Service Reference](https://developers.google.com/apps-script/reference/spreadsheet)
