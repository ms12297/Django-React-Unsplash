# Django-React-Unsplash

This project is a web application that allows users to search for and view images using the Unsplash API. The user interface is built with React and has the following features:

- A search bar that allows users to search for images based on keywords.
- A gallery view that displays the search results as a grid of images.
- The ability to click on an image in the gallery to view it in full size.
- An interface that allows users to view their saved images.

On the backend, the application uses Django Rest Framework to provide an API endpoint for users to save their favorite images to a database. Users can then view their saved images on the frontend.

## Installation

To run this project, you will need to have Node.js and Python installed on your machine.

### Frontend

To install the frontend dependencies, navigate to the `frontend` directory and run the following commands:

```
npm install
npm start
```

### Backend

To install the backend dependencies, navigate back into the root directory and run the following commands:

```
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Usage

To use the application, navigate to `http://localhost:3000/` in your browser. You will see the search bar and gallery view. Enter a keyword in the search bar and press enter to search for images. Click on an image in the gallery to view it in full size. Click the heart icon to save an image to your favorites.

To view your saved images, click the Heart Icon in the navigation bar. You will see a list of your saved images. Click the Delete button to remove an image from your favorites.
