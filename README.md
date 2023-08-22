# airbee'n'bee
https://appacademy-projects.onrender.com

* airbee'n'bee is a clone website of AirBnb with basic functionality of creating spots and leaving reviews

## Introduction

In this project I cloned basic layout and functionality of Airbnb.com's website. Its current functionality includes the following two features
      * Creating, Reading, Updating and Deleting a single spot from the database along with its associated data
      * Reading all spots and displaying them on the home page
      * Creating, Reading and Deleting a single review from the database - adding and deleting image reviews will be implemented later on
      * Logging in and signing up a user given valid data.

-------------------------------------------------------------------------------------------------------------------------

## Authorization/Access

Similar to AirBnb, it's extremely important to limit access of logged in and non-logged in users. This adds security to the web-app by ensuring only certain people can make certain interactions with our website. airbee'n'bee currently has the following user limitations:

## Logged in users

airbee-n'bee is available for anyone to browse, an account is not required. However, if any user wants to interact with the web-app, they must sign up and be signed in to do so.
   
A logged-in user CAN:
* View all spots and their associated data
* Create a new spot
* Update and delete all spots they own/created
* Post a single review to a spot they don't own
* Delete reviews they created
   
A logged-in user CANNOT:
* See login or signup options
* Delete reviews or spots of other users
      
### Non-logged-in users
A non-logged-in user CAN:
* View all spots and their associated data
* Create a new user
* Sign in as a demo/guest
      
A non-logged-in user CANNOT:
* Create a spot
* Post reviews to a spot
     
-------------------------------------------------------------------------------------------------------------------

## Technologies used:
This project uses a PERN stack
  
   ### Backend: 
   * Sequelize
   * Express
      
   ### Frontend:
   * React
   * Redux
   * CSS
   * FontAwesome
   * Google Fonts
      
------------------------------------------------------------------------------------------------------------------

## Launching the full application locally:
Running the backend server:
* From the root directory in the terminal
* cd into the /backend folder
* Run "npm start" to boot the backend server

Running the frontend server:
* From the root directory in a different terminal
* cd into the /frontend folder
* Run "npm start" to boot the frontend server and launch the website
    
-------------------------------------------------------------------------------------------------------------------

# Images: 

![airbnb-landing-no-user](https://github.com/jontabiendo/API-project-fixed/assets/120198327/75cb5592-9029-4087-b1f0-512c05e89959)
![login-modal-active](https://github.com/jontabiendo/API-project-fixed/assets/120198327/22eb6406-d140-4b85-9b1b-43fb07e5a4bd)
![signup-modal-active](https://github.com/jontabiendo/API-project-fixed/assets/120198327/40840c7a-214c-4b6e-b24c-b162ccc1a6fe)
