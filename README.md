# GameVerse

GameVerse is a comprehensive game review website built with modern web technologies. Users can explore game reviews, share their thoughts, and manage personalized features like watchlists. The platform includes secure authentication, private routes, and dynamic functionalities for a seamless user experience.

## Live site link: https://game-review-c03f4.web.app/
## Server site link: https://gameverse-server-side.vercel.app/

## Features

### Client-Side

- **Home Page**: Displays the top 6 highest-rated games.
- **All Reviews Page**:
  - Users can view all game reviews.
  - Sorting options by rating and publishing date.
  - Filtering functionality by game genre.
- **Review Details Page**: Users can view detailed information about a specific review.
- **My Reviews Page**:
  - Displays the logged-in user’s reviews in a table.
  - Users can edit or delete their reviews.
- **Add Review Page**: Allows logged-in users to submit a new review.
- **Watchlist**: Users can add games to their watchlist for easy access later.

### Authentication

- Firebase authentication is implemented for user login and signup.
- Private routes protect features like adding reviews, viewing the watchlist, and managing personal reviews.

### Backend

- Built with Node.js and Express.js.
- MongoDB is used as the database for storing user information, reviews, and game details.
- APIs:
  - **Users API**: Manages user-related data.
  - **Game Review API**: Handles CRUD operations for game reviews.

### Additional Functionalities

- **Sorting and Filtering**:
  - Sort reviews by rating or publishing date.
  - Filter reviews by genre.
- **Watchlist Management**: Add games to a personal watchlist (private route).

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **React Router**: For managing routing.
- **Daisy UI**: For pre-styled components.
- **Tailwind CSS**: For custom styling.

### Backend

- **Node.js**: For server-side development.
- **Express.js**: For building APIs.
- **MongoDB**: As the database for storing app data.

### Authentication

- **Firebase Authentication**: For secure user login and signup.

