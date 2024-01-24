# Project Title

## Overview

What is your app? Brief description in a couple of sentences.

I am building a website that is broken down into two parts. The first part is a form that allows users to input information about a recipe. It will store created recipes in a database. The second part is a browser that allows users to search through recipes in the database and view them.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

There are a lot of recipes in my family that are stored in various books and pieces of paper. I want to be able to easily store recipes online.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

This app can be used by a wide variety of people, it's not necessarily aimed at a demographic that has consistent technical knowledge so I must make sure that the UI is intuitive.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Features

- A form
- A way to add more form inputs to a recipe input dynamically to accommodate for longer recipes
- A recipe preview when the user in putting in the information
- Take information from form and store it in database
- A search function that will allow the user to search for recipes in the database
- A way for the user to view current recipe they input and for other users to view recipes in the database
- Potentially a way for the user to export the recipe as a downloadable image

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- HTML
- CSS
- SCSS

- Express
- Knex
- MySQL
- Potentially PostgreSQL (It has several features that makes implementing an effective search feature in a database easier)

### APIs

List any external sources of data that will be used in your app.

I currently don't intend to use any external data sources

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Landing: - Main page with a brief description of the site and a way to navigate to create recipes or search recipes

Create Recipes: - A page that has a form that will allow the user to input recipe information and a preview on the side of the recipe.

Search Recipes: - A page with a search bar and a display of recipes based on the search input

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

#### Recipe Browser

![Search Page](./mdAssets//Screenshot%202024-01-21%20195338.png)

#### Recipe Editor Concept 1

![Search Page](./mdAssets/Screenshot%202024-01-21%20195158.png)

#### Recipe Editor Concept 1

![Search Page](./mdAssets/Screenshot%202024-01-21%20195238.png)

#### Recipe Editor Concept 2

![Search Page](./mdAssets/Screenshot%202024-01-21%20195158.png)

#### Landing Page

![Landing Page](./mdAssets/Screenshot%202024-01-21%20195309.png)

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

Landing: No data from other pages

Create Recipes: has a form that will send data to the server to be added in a database

Search Recipes: will get data from the database based on search terms

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

route -> /recipes - Post: posts a new recipe - Get: gets the titles of all recipes

route -> /recipes/?searchParams - Get: gets the titles of all recipes based on search parameters

route -> /recipes/:id - Get: Gets detailed information about the recipe with the selected id

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

I don't plan on having user login on this website.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Order:

- Create and test recipe search to get an idea of what kind of data I need in the database and if I want to use MySQL or PostgreSQL
- Set up database and endpoints
- Design recipe input page and link it with the server
- Base form and test inputs
- UI
- Design recipe search page and link it with the server
- Base framework (search bar, a list to test the output)
- UI
- Create Landing

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

A way for the user to export a recipe: - An option to only export vs posting it to the database

Tags for recipes in order to improve the searching feature

A login system accompanied by a way to edit and delete previously made recipes
