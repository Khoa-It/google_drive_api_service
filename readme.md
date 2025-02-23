# Web API Upload File to Google Drive

## Overview (Tổng quan)

This project provides a web API to upload and manage images and files directly to Google Drive, offering convenient, secure, and easily accessible data storage from multiple platforms and applications.

Dự án này cung cấp một API web để tải lên và quản lý hình ảnh, file trực tiếp lên Google Drive, giúp lưu trữ dữ liệu một cách tiện lợi, an toàn và dễ dàng truy cập từ nhiều nền tảng và ứng dụng khác nhau.

## Technologies Used (Công nghệ sử dụng)

- **Backend**: Node.js, Express.js
- **File Storage**: Google Drive API
- **Authentication**: OAuth2, Google Cloud Platform Credentials

## Features (Tính năng)

- Upload files (images and other file types) directly to Google Drive.

- Easily manage folder structures.

- Simple API endpoint for easy integration into multiple frontends and applications.

- Upload file (hình ảnh và các file khác) trực tiếp lên Google Drive.

- Quản lý thư mục lưu trữ file dễ dàng.

- API endpoint để upload file đơn giản, dễ tích hợp vào nhiều frontend và ứng dụng khác nhau.

## Google Drive Folder Structure (Cấu trúc thư mục trên Google Drive)

Uploaded files will be stored in the main folder named `Chat App` on Google Drive.

Các file được upload sẽ được lưu vào thư mục chính là `Chat App` trên Google Drive.

```
Google Drive
└── Chat App
    ├── images
    └── files
```

## Main API Endpoints (Các endpoint API chính)

### Upload file

- **URL**: `/upload`
- **Method (Phương thức)**: `POST`
- **Params**: `file` (multipart/form-data)
- **Response**:

```json
{
  "filename": "file-1739897499183.jpg",
  "message": "File đã nhận thành công!",
  "mimetype": "image/jpeg",
  "path": "uploads/file-1739897499183.jpg",
  "success": true,
  "url": "https://lh3.googleusercontent.com/d/1EBktmr9DOloefmGUq9d8p3gSf5TE-U7d=s220",
  "webContentLink": "https://drive.google.com/uc?id=1EBktmr9DOloefmGUq9d8p3gSf5TE-U7d&export=download",
  "webViewLink": "https://drive.google.com/file/d/1EBktmr9DOloefmGUq9d8p3gSf5TE-U7d/view?usp=drivesdk"
}
```

## Installation (Cài đặt)

1. Clone the project (Clone dự án)

```bash
git clone <url-repo>
cd project-folder
npm install
```

2. Configure environment variables (Cấu hình biến môi trường)

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=your-redirect-uri
GOOGLE_REFRESH_TOKEN=your-refresh-token
```

3. Start the server (Chạy server)

```bash
npm start
```

## Real-world Applications (Ứng dụng thực tế)

- File storage for chat applications

- Image storage and management for websites and mobile apps

- Data storage system for various frontend or backend applications

- Lưu trữ file cho các ứng dụng chat

- Lưu trữ và quản lý hình ảnh cho các website, ứng dụng di động

- Hệ thống lưu trữ dữ liệu từ nhiều ứng dụng frontend hoặc backend khác nhau

## Future Extensions (Mở rộng tương lai)

- Add features to delete and update files.

- Manage file and folder access permissions on Google Drive.

- Support multiple Google Drive accounts.

- Thêm tính năng xóa, cập nhật file.

- Quản lý quyền truy cập file và thư mục trên Google Drive.

- Mở rộng hỗ trợ nhiều tài khoản Google Drive.

