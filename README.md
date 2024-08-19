# Real Estate API

This API allows users to interact with various features related to real estate properties, including ordering properties, commenting on blog posts, and more. It is designed to be secure, scalable, and easy to use.

## Table of Contents

## features
## installation
## configuration

[Usage](#usage)
[API Endpoints](#api-endpoints)
  [User Authentication](#user-authentication)
  [Properties](#properties)
  [Orders](#orders)
  [Blog Posts](#blog-posts)
  [Comments](#comments)
[Middleware](#middleware)
[Contributing](#contributing)
[License](#license)

## Features

1. User Authentication: Sign up, log in, email verification, and password reset functionality.
2. Property Management: CRUD operations for properties.
3. Order Management: Create, approve, cancel, and reject orders.
4. Blog Management: CRUD operations for blog posts.
5. Comment System: Add and manage comments on blog posts.
5. Activity Logging: Track user activities on the platform.
6. Protected Routes: Ensure only authenticated users can access certain routes.
7. Email Notifications: Send verification and password reset emails using Nodemailer.

## Installation

1. Clone the repository:
  
   git clone https://github.com/yourusername/HOME-FEATURES-BACKEND.git
   cd HOME-FEATURES-BACKEND
 

2. Install dependencies:
  
   npm install


## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

   PORT=your_port_number
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email_address
   EMAIL_PASS=your_email_password

2. Set up Cloudinary if you're using it for image uploads:
   Sign up at [Cloudinary](https://cloudinary.com/) and get your credentials.
   Add your Cloudinary credentials to the `.env` file:
    
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
    

## Usage

1. Start the server:
   npm start


2. Access the API documentation (if using a tool like Swagger or Postman) to interact with the API endpoints.

## API Endpoints

### User Authentication

1. Sign Up: `POST /api/v1/users/signup`
2. Log In: `POST /api/v1/users/login`
3. Forgot Password: `POST /api/v1/users/forgot-password`
4. Reset Password: `PATCH /api/v1/users/reset-password`
5. Verify Email: `GET /api/v1/users/verify-email/:token`

### Properties

Create Property: `POST /api/v1/properties`
Get All Properties: `GET /api/v1/properties`
Get Property by ID: `GET /api/v1/properties/:id`
Update Property: `PATCH /api/v1/properties/:id`
Delete Property: `DELETE /api/v1/properties/:id`

### Orders

Create Order: `POST /api/v1/orders`
Get All Orders: `GET /api/v1/orders`
Get Order by ID: `GET /api/v1/orders/:id`
Approve Order: `PATCH /api/v1/orders/:id/approve`
Cancel Order: `PATCH /api/v1/orders/:id/cancel`
Reject Order: `PATCH /api/v1/orders/:id/reject`

### Blog Posts

1. Create Blog Post: `POST /api/v1/blogs`
2. Get All Blog Posts: `GET /api/v1/blogs`
3. Get Blog Post by ID: `GET /api/v1/blogs/:id`
4. Update Blog Post: `PATCH /api/v1/blogs/:id`
5. Delete Blog Post: `DELETE /api/v1/blogs/:id`

### Comments

1. Add Comment: `POST /api/v1/comments`
2. Get All Comments: `GET /api/v1/comments`
3. Get Comment by ID: `GET /api/v1/comments/:id`
4. Update Comment: `PATCH /api/v1/comments/:id`
5. Delete Comment: `DELETE /api/v1/comments/:id`

## Middleware

1. Protected Routes: Ensure only authenticated users can access certain routes.
2. Role-Based Access: Restrict access based on user roles.
3. Activity Logging: Log user activities like ordering properties or adding reviews.
