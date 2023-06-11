# API-project-fixed

Introduction :

  In this project I cloned basic layout and functionality of Airbnb.com's website. Its current functionality includes the following two features
      Creating, Reading, Updating and Deleting a single spot from the database along with its associated data
      Reading all spots and displaying them on the home page
      Creating, Reading and Deleting a single review from the database - adding and deleting image reviews will be implemented later on
      Logging in and signing up a user given valid data.
      
   Each of these components will render depending on the state of the redux store which is updated from valid fetches to the backend express app.
   
    A logged-in user has the following capabilities:
      View all spots and their associated data
      Creating a new spot
      Updating and deleting all spots they own/created
      Post a single review to a spot they don't own
      Delete reviews they own
   
   A logged-in user cannot:
      See login or signup options
      Delete reviews or spots of other users
      
   A non-logged-in user has the following capabilites:
      View all spots and their associated data
      Create a new user
      Sign in as a demo/guest
      Access create a spot page but not create one
      
   A non-logged-in user cannot:
      Create a spot though they have access to the page
      Post reviews to a spot
     
-------------------------------------------------------------------------------------------------------------------

Technologies used :

This project uses the following technologies to achieve the following functionalities in the following:
  
   Backend: 
      SQLite3 - for building and storing data in teh database
      Express - for handling routes and requests from the frontend to the database and managing responses from the database to the frontend
      
   Frontend:
      React - for rendering components onto the client page based on the url path and Express responses
      Redux - for storing the state of the app in the front end
      CSS   - for applying styles and layout to the functional components
      Javascript - for building dynamic functional components
      HTML  - for importing meta-data      
      
------------------------------------------------------------------------------------------------------------------

Launching the full application locally:
  From the root directory in the terminal:
    cd into the /backend folder
    run "npm start" to boot the backend server
    
  From the root directory in another terminal
    cd into the /frontend folder
    run "npm start" to boot the frontend server and launch the website
    
-------------------------------------------------------------------------------------------------------------------

Images: 

    
