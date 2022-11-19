# Charms App
>Charms is a project created with React, Javascript, and CSS for wizards and muggles to learn spells and their effects. 🧙🏻‍♀️🧙🏽🧙🏿‍♂️💫

## Charms App Status
This project was originally designed for Hogwarts students to use as an alternative and supplemental resource to the coursebook by providing an online reference guide to spells, but is now open to all who are seeking to aquire more knowledge about charms. Though the spells existing in the wizarding world rarely change, a field to submit and add a spell has been provided.

## Charms App Philosophy
As Mr. Harry Potter once said, "Working hard is important. But there is something that matters even more: BELIEVING IN YOURSELF." 

Though this app will help one learn about the spell, incantation and effect, it is up to oneself to believe in their abilities to perform it. All that come to the Charms app are students, so students wands at the ready. 🪄 Let's begin! 


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
* Authentication with password and username that checks if the credentails are an instructor in order to submit and add a spell 

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

One of the challenges I ran into was in posting form data. When a new spell would be submitted the data that would persist for the key unforgivable had a value of a string but needed to be a boolean. This caused the spell to render incorrectly in the pages. After trying different logic and looking online for answers, I was able to implement the ternary operator to return a boolean value. The new spell data reflected correctly in the database and thus rendered in the appropriate pages. 

## Credits and Resources
[Harry Potter spells collection](https://github.com/Dane-Dawson/json-server-collection/tree/main/harry-potter-spells)

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

[React documentation](https://reactjs.org/).

