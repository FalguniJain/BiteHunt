#Bite-Hunt - Food Delivery Platform
https://img.shields.io/badge/Bite--Hunt-Food%2520Delivery-orange
https://img.shields.io/badge/React-18.0+-61DAFB?logo=react
https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe

#overview
A full-stack food delivery platform featuring user authentication, menu browsing, cart management, and secure payment processing.

#Features

-User Authentication: Secure JWT-based user registration and login
-Menu Management: Browse restaurants and food items with search and filtering
-Shopping Cart: Add items to cart with quantity management
-Order Tracking: Real-time order status updates
-Secure Payments: Stripe integration for payment processing
-Image Uploads: Efficient image management using Multer
-Responsive Design: Mobile-first approach with Tailwind CSS
-RESTful APIs: Scalable backend architecture

#Tech Stack
##Frontend
-ReactJS - Component-based UI library
-Tailwind CSS - Utility-first CSS framework
-JavaScript - Frontend logic and interactivity

##Backend
-Node.js - Server runtime environment
-Express.js - Web application framework
-MongoDB - Document database
-JWT - Authentication tokens
-Stripe - Payment processing
-Multer - File upload middleware

##Deployment
-Vercel - Frontend and backend hosting
-GitHub - Version control

##Installation

#Prerequisites
-Node.js (v16 or higher)
-MongoDB database
-Stripe account for payments

#Local Development
-Clone the repository

```bash
git clone https://github.com/FalguniJain/BiteHunt
cd bite-hunt
Install dependencies
```
bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Environment Configuration
Create a .env file in the backend directory:

env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
PORT=5000
Run the application

bash
# Start backend server
cd backend
npm run dev

# Start frontend development server
cd ../frontend
npm run dev
Access the application
Open http://localhost:3000 in your browser

##Usage
-Browse Restaurants: View available restaurants and their menus
-Add to Cart: Select food items and manage quantities
-Checkout Process: Secure payment flow with Stripe integration
-Order Tracking: Monitor order status in real-time
-User Profile: Manage account information and order history

##API Endpoints
#Authentication
-POST /api/auth/register - User registration
-POST /api/auth/login - User login
-GET /api/auth/me - Get current user

#Restaurants
-GET /api/restaurants - Get all restaurants
-GET /api/restaurants/:id - Get restaurant details
-GET /api/restaurants/:id/menu - Get restaurant menu

#Orders
-POST /api/orders - Create new order
-GET /api/orders - Get user orders
-GET /api/orders/:id - Get order details
-PUT /api/orders/:id/status - Update order status

#Payments
-POST /api/payments/create-intent - Create payment intent
-POST /api/payments/webhook - Stripe webhook handler

#Uploads
-POST /api/upload - Image upload endpoint

#Payment Integration
-The application uses Stripe for secure payment processing:
-Payment Intents: Handle payment authorization and capture
-Webhooks: Process payment confirmation events
-Security: PCI-compliant payment handling

#Deployment
The application is deployed on Vercel:
-Live Demo: https://bite-hunt.vercel.app

Deployment Steps:
-Connect GitHub repository to Vercel
-Configure environment variables
-Set up Stripe webhooks

##License
This project is licensed under the MIT License.



