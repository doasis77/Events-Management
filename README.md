# Campus Event Management Hub  

## *Project Name*  
Campus Event Management Hub  

---

## *Project Overview*  
The *Campus Event Management Hub* is a comprehensive event management system designed for campus communities. It enables students and staff to view and register for events such as workshops, seminars, and club activities. Key features include user registration, event preferences, RSVP functionality, event creation (admin-only), and an interactive calendar view to streamline event organization and participation.  

The platform simplifies event management by providing a centralized location for event creation, updates, and participation tracking, ensuring a seamless experience for both organizers and attendees.  

---

## *Deployment Link*  
[Campus Event Management Hub - Live](https://events-management-sand.vercel.app/)  


---

## *Login Details*  
- *Test User Account:*  
  - *Email:* testuser@example.com  
  - *Password:* password123  

- *Admin Account:*  
  - *Email:* adminuser@example.com  
  - *Password:* admin  



---

## *Feature Checklist*  

### *1. User Registration & Event Preferences (15 Marks)*  
- [x] User registration and login implemented with secure password encryption.  
- [x] Users can update their profiles to set preferences for event types (e.g., workshops, cultural events, tech talks).  
- [x] Preferences are stored and used to filter events for personalized recommendations.  

### *2. Event Listings & RSVP (15 Marks)*  
- [x] Upcoming events are displayed with detailed information:  
  - Event Name  
  - Description  
  - Date and Time  
  - Location  
  - Available Seats  
- [x] Users can RSVP to events:  
  - RSVP functionality updates the available seats in real-time.  
  - The RSVP'd event is stored in the user's profile for easy access.  

### *3. Event Creation (Admin Only) (15 Marks)*  
- [x] Admins can log in and create events.  
- [x] Each event has a unique ID and includes:  
  - Event Name  
  - Description  
  - Date and Time  
  - Location  
  - Capacity (Maximum attendees)  
- [x] Admins can update or delete events as necessary.  

### *4. Event Calendar View (15 Marks)*  
- [x] Integrated calendar view displays events by date for easy navigation.  
- [x] Users can filter events based on their preferences or categories.  
- [x] Clicking on an event within the calendar opens detailed information and RSVP options.  

---

## *Installation Instructions*  

### *1. Clone the Repository*  
bash  
git clone https://github.com/username/campus-event-management.git  
cd campus-event-management  
  

### *2. Install Dependencies*  
Install backend and frontend dependencies using npm or yarn:  
bash  
# Backend  
cd backend  
npm install  

# Frontend  
cd ../frontend  
npm install  
  

### *3. Set Up Environment Variables*  
Create a .env file in the backend directory and add the following:  
plaintext  
DATABASE_URL=<YourDatabaseConnectionString>  
PORT=5000  
JWT_SECRET=<YourJWTSecret>  
  

### *4. Initialize the Database*  
Run database migrations and seed the database with initial data (if required):  
bash  
npm run migrate  
npm run seed  
  

### *5. Start the Application*  
Start the backend and frontend servers:  
bash  
# Backend  
cd backend  
npm start  

# Frontend  
cd ../frontend  
npm start  
  

The application will be accessible at:  
- Backend: http://localhost:5000  
- Frontend: http://localhost:3000  

---

## *API Documentation*  

### *Endpoints Overview*  

#### *Authentication*  
- *Register User*  
  - *Endpoint:* POST /api/auth/register  
  - *Request Body:*  
    json  
    {  
      "name": "John Doe",  
      "email": "johndoe@example.com",  
      "password": "securepassword"  
    }  
      

- *Login User*  
  - *Endpoint:* POST /api/auth/login  
  - *Request Body:*  
    json  
    {  
      "email": "johndoe@example.com",  
      "password": "securepassword"  
    }  
      

#### *Event Management*  
- 
      

- *RSVP for Event*  
  - *Endpoint:* PATCH /api/events/:id/rsvp  
  - *Response:*  
    json  
    {  
      "message": "RSVP successful",  
      "event": {  
        "id": 1,  
        "availableSeats": 49  
      }  
    }  
      

- *Create Event (Admin Only)*  
  - ![1](https://github.com/user-attachments/assets/c8b15a07-a8a4-4a92-8dd0-c09c3269ab44)


#### *Calendar*  
- *Fetch Events by Date*  
  - *Endpoint:* GET /api/calendar?date=YYYY-MM-DD  

---

### *Postman API Test Screenshots*  
(Include screenshots of your API tests conducted on Postman, showing successful requests and responses for all endpoints.)  

---

## *Future Improvements*  
1. *Notifications:* Implement email/SMS reminders for registered events.  
2. *Event Analytics:* Provide admins with dashboards for attendance statistics.  
3. *Mobile App Integration:* Extend the platform to Android and iOS for enhanced accessibility.  

---

Feel free to let me know if you need further adjustments or elaborations!
