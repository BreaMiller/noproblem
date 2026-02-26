# Google Apps Script Setup Guide

This document explains how to set up the Google Apps Script to handle form submissions to a Google Sheet.

## Overview

The website has two forms:
1. **Contact Form** - Full consultation request with name, email, phone, service type, and message
2. **Newsletter Form** - Simple email subscription that only requires an email address

Both forms submit data to separate sheets in a Google Sheet:
- **Contact Submissions** - Stores contact form entries
- **Newsletter Emails** - Stores newsletter subscriptions (email only)

## Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "NP Services LLC Forms"
4. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

### Step 2: Create the Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Delete the default code
4. Copy and paste the entire contents of `google-apps-script.gs` file
5. Replace `"YOUR_SHEET_ID"` with your actual Sheet ID (Line 4)

### Step 3: Deploy the Script

1. Click "Deploy" button (top right)
2. Select "New deployment"
3. Choose type: "Web app"
4. Execute as: Your email address (the account that owns the Sheet)
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the deployment URL (it will look like: `https://script.google.com/macros/d/{DEPLOYMENT_ID}/userweb`)

### Step 4: Update the Website Code

1. Open `app/page.tsx`
2. Find these lines and replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your deployment URL:
   - Line ~471 (Newsletter form)
   - Line ~384 (Contact form)

For example:
```typescript
const scriptUrl = "https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/userweb";
```

### Step 5: Test the Forms

1. Rebuild the project: `npm run build`
2. Start the server: `npm run start`
3. Test the newsletter form with an email address
4. Test the contact form with all fields
5. Check your Google Sheet to verify submissions appear

## What Gets Stored

### Newsletter Sheet Columns
- **Timestamp** - When the email was submitted
- **Email** - The subscriber's email address
- **Status** - "Subscribed"

### Contact Submissions Sheet Columns
- **Timestamp** - When the form was submitted
- **Name** - Submitter's name
- **Email** - Submitter's email
- **Phone** - Submitter's phone number
- **Service Type** - Selected service type
- **Message** - Project description
- **Status** - "New"

## Features

### Newsletter Form
- Only requires an email address
- Automatically checks for duplicate emails
- Prevents duplicate subscriptions
- Stores just the email in a separate sheet

### Contact Form
- Requires all fields (name, email, phone, service type, message)
- Stores complete submission details
- Can be followed up manually from the sheet

## Troubleshooting

### Forms Not Submitting
- Verify the Google Apps Script URL is correct in the code
- Check browser console (F12) for error messages
- Ensure the script is deployed as "Anyone" has access

### Duplicate Emails Not Prevented
- Make sure the script is looking at the correct sheet
- Check that formType is set to "newsletter"

### Data Not Appearing in Sheet
- Verify you have Edit permissions on the Google Sheet
- Check that the deployment is using the correct Google account
- Try redeploying the script with updated code

## Security Notes

- The script is deployed as "Anyone" can access, but only your Sheet receives the data
- Email addresses are stored in your Google Sheet
- Consider setting up email notifications when new entries are added
- Regularly review submissions for spam

## Next Steps

1. Set up email notifications in Google Sheets to be alerted of new submissions
2. Create a process for following up on contact form submissions
3. Monitor newsletter growth and engagement
4. Consider using Google Forms as an alternative if you need more advanced features
