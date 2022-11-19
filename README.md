# Charms App
>Charms is a project created with React, Javascript, and CSS for wizards and muggles to learn spells and their effects. 🧙🏻‍♀️🧙🏽🧙🏿‍♂️💫

## Charms App Status
This project was originally designed for students of Hogwarts, School of Witchcraft and Wizardry, to use as an alternative and supplemental resource for the materials utilized in Professor Flitwick's Charms Course. This app is now open to all who seek to acquire knowledge about charms and will provide students with an online reference guide to the spells outlined in the course material. Though spells that exist in the wizarding world rarely change, a field to submit and add a spell has been provided.

## Charms App Philosophy
As the legendary Harry Potter once said, "Working hard is important. But there is something that matters even more: BELIEVING IN YOURSELF." 

Though this app will help one learn about spells, incantations and their effects, it is up to oneself to believe in their abilities to perform them. To all those who come to the Charms app to improve their spellcasting abilities, prepare yourselves and have your wands at the ready. 🪄 Let's begin! 


## Features
#### Homepage
* Welcomes students
#### All Spells Page
* Displays all the spells and descriptions for students to view
#### Sinister Spells Page
* Displays all the unforgivable curses and descriptions for students to view
#### Add a Spell Page
* Form to fill out and submit a new spell
* New spell will persist to the All Spells Page and the Sinister Spells Page, if applicable 
#### Future Features
Possible features to implement in the future
* A matching game that helps one learn spells by matching the name of the spell to the description 
* Authentication with password and username that checks if the credentials are an instructor in order to submit and add a spell 

## Charms App Photo
<img src="/public/homepageimage.png" alt="home page image"/>


## Installation and Running Instructions
Clone down this repository. You will need ```node``` and ```npm``` installed globally on your machine.

Installation:

``npm install``

To Start Server and Run App:

``npm start``

In another terminal

``npm run server``

To Visit App:

``localhost:3000/``


## Reflection
This was a project built during the second phase, React, for school. The goal of the project was to showcase technologies learned up until this point by building a single-page application using React. 

One of the challenges I ran into was in posting form data. When a new spell would be submitted the data that would persist for the key unforgivable had a string value but needed to be a boolean value. This caused the spell to render incorrectly in the pages. After trying different logic and looking online for answers, I was able to implement the ternary operator to return a boolean value. The new spell data reflected correctly in the database and thus rendered in the appropriate pages. 

## Credit and Resources
[Harry Potter spells collection](https://github.com/Dane-Dawson/json-server-collection/tree/main/harry-potter-spells)

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

[React documentation](https://reactjs.org/)

