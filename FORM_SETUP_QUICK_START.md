# Quick Setup Instructions

## ✅ What's Been Done
- ✅ Google Apps Script code created (`google-apps-script.gs`)
- ✅ Website form updated to submit to Google Apps Script
- ✅ Loading states and error handling added
- ✅ Detailed setup guide created (`GOOGLE_APPS_SCRIPT_SETUP.md`)
- ✅ All changes pushed to GitHub main branch

## 🚀 Next Steps (5 minutes)

### 1. Create Google Spreadsheet
- Go to https://sheets.google.com
- Create new spreadsheet named "NP Services Form Submissions"

### 2. Add Script
- In spreadsheet: **Extensions** > **Apps Script**
- Copy code from `google-apps-script.gs`
- Paste into editor
- **Optional:** Update email on line 120 for notifications
- Save project

### 3. Deploy
- Click **Deploy** > **New deployment**
- Select type: **Web app**
- Execute as: **Me**
- Who has access: **Anyone**
- Click **Deploy** and **Authorize**
- Copy the Web app URL

### 4. Update Website
- Open `script.js`
- Find line 5: `const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
- Replace with your Web app URL
- Save and push to GitHub

### 5. Test
- Visit your website
- Submit test form
- Check spreadsheet for new row

## 📝 Important Notes

**SCRIPT_URL Location:** Line 5 in `script.js`
```javascript
const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec';
```

**Email Notifications:** Line 120 in `google-apps-script.gs`
```javascript
const recipientEmail = 'your-email@example.com'; // Change this
```

## 📚 Full Documentation
See `GOOGLE_APPS_SCRIPT_SETUP.md` for complete step-by-step guide with screenshots descriptions and troubleshooting.

## 🆘 Need Help?
1. Check execution logs in Apps Script editor
2. Verify Web app is deployed to "Anyone"
3. Check browser console (F12) for errors
4. Review `GOOGLE_APPS_SCRIPT_SETUP.md` troubleshooting section
