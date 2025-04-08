function exportGmailToSheet() {
  const labelName = "categorize"; // <-- Change this to your main label
  const spreadsheetId = "PASTE_YOUR_SPREADSHEET_ID_HERE"; // <-- Replace with your Google Sheet ID
  const sheetName = "Gmail Export";

  const label = GmailApp.getUserLabelByName(labelName);
  if (!label) {
    Logger.log("Label not found: " + labelName);
    return;
  }

  const threads = label.getThreads();
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName) || 
                SpreadsheetApp.openById(spreadsheetId).insertSheet(sheetName);
  sheet.clear();
  sheet.appendRow(["From", "To", "Subject", "Date", "Body", "Label"]);

  for (let i = 0; i < threads.length; i++) {
    const messages = threads[i].getMessages();
    const threadLabels = threads[i].getLabels().map(l => l.getName()).join(", ");

    for (let j = 0; j < messages.length; j++) {
      const msg = messages[j];
      const from = msg.getFrom();
      const to = msg.getTo();
      const subject = msg.getSubject();
      const date = msg.getDate();
      const body = msg.getPlainBody().slice(0, 50000); // Limit to 50k chars to prevent overflow

      sheet.appendRow([from, to, subject, date, body, threadLabels]);
    }
  }

  Logger.log("Export complete! Total threads: " + threads.length);
}
