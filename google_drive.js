const {google} = require('googleapis')
const path = require('path');
const fs = require('fs');
require('dotenv').config()

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

async function uploadFile(filepath, fileName, fileType ) {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: fileName,
                mimeType: fileType,
                parents: [process.env.GOOGLE_FOLDER_ID]
            },
            media: {
                mimeType: fileType,
                body: fs.createReadStream(filepath),
            }
        })
        return response.data // Server lắng nghe cổng (chạy server)

    } catch (error) {
        console.log(error.message);
        return null;
    }

}

async function deleteFile(id) {
    try {
        const response = await drive.files.delete({
            fileId: id,
        })        
    } catch (error) {
        console.log(error.message);
    }
}

async function generatePublicURL(id) {
    try {
        const response = await drive.permissions.create({
            fileId: id,
            requestBody: {
                role: "reader",
                type: "anyone",
            }
        })
        console.log('generatePublicURL', response.data);
        
    } catch (error) {
        console.log(error.message);
    }
}

async function getFile(id) {
    try {
        const response = await drive.files.get({
            fileId: id,
            fields: 'webContentLink, webViewLink'
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    uploadFile,
    deleteFile,
    generatePublicURL,
    getFile,

}


