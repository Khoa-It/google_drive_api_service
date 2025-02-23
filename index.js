const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const { uploadFile, generatePublicURL, getFile } = require('./google_drive');
const fs = require('fs');
require('dotenv').config()


const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Lưu file vào thư mục uploads/
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
    let responseApi;
    const {mimetype, filename, path} = req.file;
    responseApi = await uploadFile(path, filename, mimetype);
    const {id} = responseApi;
    await generatePublicURL(id);
    responseApi = await getFile(id);
    const {webContentLink, webViewLink} = responseApi;
    
    fs.unlink(path, (err) => {
        if (err) console.error("Lỗi khi xóa file tạm:", err);
        else console.log(`Đã xóa file tạm: ${path}`);
    });
    res.json({
        success: true,
        message: "File đã nhận thành công!",
        filename: req.file.filename,
        path: req.file.path,
        mimetype: req.file.mimetype,
        webContentLink,
        webViewLink,
        url: `https://lh3.googleusercontent.com/d/${id}=s220`,
    });
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});