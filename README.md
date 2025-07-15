# WanderLust - Image Upload with Cloudinary

This project uses Cloudinary for image storage and Multer for file upload handling.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory with the following variables:

```
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 3. Get Cloudinary Credentials
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Go to your Dashboard
3. Copy your Cloud Name, API Key, and API Secret
4. Replace the values in your `.env` file

### 4. Start the Server
```bash
npm start
```

## Features

- ✅ Cloudinary image upload
- ✅ Multer file handling
- ✅ Image preview functionality
- ✅ Automatic old image deletion when updating
- ✅ Proper image storage structure with URL and filename

## Image Upload Flow

1. User selects an image file
2. Multer processes the file using CloudinaryStorage
3. Image is uploaded to Cloudinary
4. Image URL and filename are stored in the database
5. Old images are automatically deleted when updating

## Database Schema

The Listing model stores images as:
```javascript
image: {
  url: String,      // Cloudinary URL
  filename: String  // Cloudinary public_id for deletion
}
``` 