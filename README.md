# Gmail Label Exporter 📩

This Google Apps Script exports all emails under a specific Gmail label (including sub-labels) into a Google Sheet. Each row contains the email's From, To, Date, Subject, Body, and Label.

## 🔧 Features
- Works with nested labels (e.g., "categorize/Client1")
- Outputs to a Google Sheet
- Supports thousands of emails with pagination handling

## 🚀 How to Use

1. Open [Google Apps Script](https://script.google.com) and create a new project.
2. Paste the contents of `Code.gs` into the script editor.
3. In the code, set the `labelName` and `spreadsheetId` variables.
4. Run the `exportGmailToSheet()` function (you'll be prompted to authorize).
5. Emails will populate the target Google Sheet.

## 🛠️ Tech Used
- Google Apps Script
- Gmail API
- Google Sheets API

## 📷 Screenshot
*(Add a screenshot if you want to show an example Sheet output)*

---

## 📩 Example Use Case

Used to export categorized Gmail conversations to a Sheet for archiving or reporting.

---

## 🙌 Author

**Amin Firnash**  
[LinkedIn URL](https://www.linkedin.com/in/amin-firnash-5b690111a/) | [[GitHub Profile](https://github.com/aminfirnash)]
