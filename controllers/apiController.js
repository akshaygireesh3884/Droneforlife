require('dotenv').config();
const express = require('express');
const logger = require("../utils/winston");
const { google } = require('googleapis');

const spreadsheetId = process.env.DATABASE_ID;

// --- helper functions ---
// get auth token
function getAuth() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });
  return auth;
}

// proccure googleSheet method
async function getGoogleSheet(auth) {
  const client = await auth.getClient();
  const googleSheet = google.sheets({ version: 'v4', auth: client });
  return googleSheet;
}




  const postRequest = async (req, res, next) => {
    try {
            const auth = getAuth();
            const googleSheet = await getGoogleSheet(auth);
          
            await googleSheet.spreadsheets.values.append({
              auth,
              spreadsheetId,
              range: 'Sheet1!A2:C',
              valueInputOption: 'USER_ENTERED',
              resource: {
                values: [[req.body.name, req.body.email,req.body.number]],
              },
            });
          
            res.send('Submitted Successfully');
    } catch (err) {
      err.type = 'api'
      logger.error(err);
      next(err);
  
    }
  };
  module.exports = {
    postRequest: postRequest,
  };