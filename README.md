# Real Estate API


### Detailed Overview of the Real Estate API Project

The **Real Estate API** is a comprehensive backend service designed to power a real estate platform, enabling users to explore, manage, and interact with various property listings. This API caters to the needs of both administrators and end-users by providing a wide range of features that facilitate property management, user engagement, and secure transactions. It is built with Node.js and Express.js, with MongoDB as the database, and it integrates various middleware and security features to ensure a smooth and safe user experience.
## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
  - [Auth](#auth)
  - [Properties](#properties)
  - [Land Listings](#land-listings)
  - [Orders](#orders)
  - [Reviews](#reviews)
  - [Blogs](#blogs)
  - [Comments](#comments)
  - [Activity Logging](#activity-logging)
- [Middleware](#middleware)
  - [Email Verification](#email-verification)
  - [Forgot Password & Reset Password](#forgot-password--reset-password)
  - [CORS](#cors)
  - [Cookie-Parser](#cookie-parser)
- [Usage](#usage)
  - [User Registration and Email Verification](#user-registration-and-email-verification)
  - [Property Management](#property-management)
  - [Blog and Comments](#blog-and-comments)
  - [Ordering Properties](#ordering-properties)
  - [Forgot Password and Reset Password](#forgot-password-and-reset-password)
  - [Activity Logs](#activity-logs)


#### Core Features

1. **User Authentication and Authorization**
   - **User Registration**: Users can register through the API, providing essential details such as email, password, and personal information.
   - **Email Verification**: Upon registration, users receive an email verification link. This step is crucial to confirm the authenticity of the user's email address before they can access certain features on the platform.
   - **JWT Authentication**: JSON Web Tokens (JWT) are used to manage user sessions. After logging in, a JWT is issued and stored in a secure HttpOnly cookie for subsequent requests.

2. **Property Management**
   - **Property Listings**: The API supports the creation, updating, deletion, and retrieval of property listings. These listings include various details such as property type, location, price, description, and images.
   - **Land Listings**: In addition to standard property listings, the API also supports land listings, allowing users to browse and interact with land-specific properties.
   - **Property Ordering**: Users can place orders for properties they are interested in. Each order is processed and stored in the database, and users are notified via email when their order is placed.

3. **User Engagement**
   - **Review System**: Users can post reviews on properties they have interacted with. These reviews can include ratings and comments, and they are visible to other users.
   - **Blog and Comment System**: The API includes a blog section where administrators can post articles on various real estate topics. Users can engage with these articles by posting comments, fostering a community around the platform.

4. **Notification System**
   - **Email Notifications**: Users receive email notifications for various activities, including:
     - **Order Confirmation**: When a user places an order for a property, they receive an email confirming the details of their order.
     - **Password Reset**: If a user requests a password reset, they receive an email with a link to reset their password.

5. **Security Features**
   - **CORS (Cross-Origin Resource Sharing)**: The API is configured to allow secure communication between the frontend and backend, specifying which domains are allowed to access the resources.
   - **Cookie-Parser**: Cookies are managed securely using the `cookie-parser` middleware, which allows easy access and manipulation of cookies within the application.
   - **JWT Protection**: JWT tokens are securely stored in HttpOnly cookies, protecting them from XSS (Cross-Site Scripting) attacks.

6. **User Account Management**
   - **Forgot Password**: Users who forget their passwords can request a password reset, receiving a secure link via email to reset their password.
   - **Reset Password**: The password reset functionality allows users to securely update their passwords using a token sent to their email.

7. **Admin Features**
   - **Property and Land Management**: Admins have full control over property and land listings, including creating, updating, and deleting them.
   - **Blog Management**: Admins can create and manage blog posts, including approving or deleting user comments.
   - **Activity Logs**: The API automatically logs user activities, such as placing orders or posting reviews, which admins can monitor for insights and security purposes

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/real-estate-api.git
    cd real-estate-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and include the following:

## Environment Variables

```env
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
EMAIL_HOST=smtp.your_email_provider.com
EMAIL_PORT=587
EMAIL_FROM=no-reply@yourdomain.com
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret
CORS_ORIGIN=your_frontend_domain
```

4. **Run the application**:
    ```bash
    npm start
    ```

## Endpoints

You can view all the available API endpoints by visiting the following link:

[`REAL ESTATE API`](https://home-features-backend.vercel.app/api-docs)

Once you're there, you'll find a comprehensive list of all the endpoints and how to interact with them.


Make sure to set `process.env.backendUrl` to the correct URL for your backend server.


This interactive documentation provides a user-friendly interface to test the API endpoints directly, with support for making requests like `GET`, `POST`, `PATCH`, and `DELETE`.

### Available API Sections in Swagger

- **Auth**: Manage user authentication and authorization.
- **Properties**: View, create, update, and delete property listings.
- **Land Listings**: Manage land-specific property listings.
- **Orders**: Place and manage property orders.
- **Reviews**: Post and retrieve reviews for properties.
- **Blogs**: Manage blog posts.
- **Comments**: Add and manage comments on blog posts.
- **Activity Logging**: Track and monitor user activities (e.g., property orders, reviews, comments).

Simply navigate to each section in Swagger UI to see the detailed documentation for each endpoint, along with request examples, response structures, and status codes.


### CORS

- **Purpose**: Cross-Origin Resource Sharing (CORS) allows the backend to specify which domains are permitted to access resources. This prevents unauthorized domains from making requests to the API.
- **Configuration**: The CORS settings are configured to allow requests only from the specified frontend domain.

### Cookie-Parser

- **Purpose**: Simplifies access to cookies sent along with HTTP requests. Particularly useful for managing JWT tokens stored in cookies.
- **Implementation**: Installed and configured in the backend to parse cookies and make them available as JavaScript objects in `req.cookies`.

## Usage

### User Registration and Email Verification

- Users can register using the `/api/v1/auth/signup` endpoint. After registration, they will receive an email with a verification link.
- Users must verify their email before they can access certain features, such as ordering properties or posting reviews.

### Property Management

- Admins can create, update, or delete property listings using the respective endpoints.
- Users can browse all available properties via the `/api/v1/properties` endpoint.

### Blog and Comments

- Admins can publish blog posts on real estate-related topics, which users can comment on.
- The `/api/v1/comments` endpoint allows users to add comments to blog posts, and admins can manage these comments.

### Ordering Properties

- Users can place orders for properties they are interested in through the `/api/v1/orders` endpoint.
- Order details are automatically logged, allowing both users and admins to track the status of orders.

### Forgot Password and Reset Password

- Users who forget their passwords can trigger a reset by sending a request to `/api/v1/auth/forgot-password`.
- After receiving the reset link via email, users can reset their passwords using the `/api/v1/auth/reset-password/:token` endpoint.

### Activity Logs

- Every action a user takes, such as posting a review, placing an order, or commenting on a blog post, is logged.
- Admins can access these logs to monitor user engagement and activity on the platform.
