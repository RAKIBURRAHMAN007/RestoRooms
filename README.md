
# Project Name: RestoRooms - A Modern Hotel Booking Platform

## Purpose: 
RestoRooms is a modern Hotel Booking Platform that provides users with a seamless and engaging experience for discovering and booking hotel rooms. It combines interactive design, robust functionality, and secure user authentication to ensure an enjoyable and trustworthy platform for users.

## Live URL: 
[https://restorooms.netlify.app/](https://restorooms.netlify.app/)



## Website Features:
- **Homepage Design:** Includes a banner, a map, and featured rooms with a 'Book Now' button.
- **User Authentication:** Email and password-based authentication, including social login options.
- **Rooms Page:** Displays all rooms with images, descriptions, and booking options.
- **Room Details Page:** Displays detailed information about rooms, with booking and review options.
- **My Bookings Page:** Shows the rooms booked by the logged-in user, with options to cancel and update booking dates.
- **Review System:** Allows users to post reviews for rooms they've booked.
- **Access Control:** Only authenticated users can book rooms and post reviews.
- **404 Page:** Custom 404 page for invalid routes.
- **Secure Data Management:** Secure credentials using environment variables for Firebase and MongoDB.

## NPM Packages Used:
1. React
2. React Router DOM
3. Firebase
4. Tailwind CSS
5. React Toastify
6. SweetAlert2
7. MongoDB
8. React Simple Typewriter
9. React Tooltip
10. dotenv
11. Cors
12. Express
13. React Countup
14. momentjs
15. JWT


### How to Run RestoRooms Locally

1. **Clone the Repository:**
   First, clone the project repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   Change into the project folder:

   ```bash
   cd RestoRooms
   ```

3. **Install Dependencies:**
   Install all the necessary dependencies with npm:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the root of the project.
   - Add your Firebase and MongoDB credentials in the `.env` file, for example:

     ```bash
     REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
     REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
     REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
     REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
     REACT_APP_MONGODB_URI=<your-mongodb-uri>
     ```

5. **Start the Development Server:**
   Run the following command to start the development server:

   ```bash
   npm start
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000).

### Additional Information:
- **Database Setup:** Make sure MongoDB is set up correctly and connected with the application. If you're using a local instance of MongoDB, ensure it's running.
- **Authentication:** Ensure that the Firebase authentication setup is complete for email/password and social logins.
  
