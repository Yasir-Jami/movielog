# movielog

**Web application for keeping track of movies you're watching. Makes it easy to build and manage your own backlog.**

**Visit website at: https://www.movielog.ca**

### Main Page

![alt text](https://github.com/Yasir-Jami/movielog/blob/c57c78e3b88d330179a805a4c7d6888644d8c3d3/images/movielog_main_page.png)

### Login Page (Desktop) 
![alt text](https://github.com/Yasir-Jami/movielog/blob/049e5edba18de6ac3a48c65311aa240e8bef00b6/images/movielog_login_page.png)

## Register Page (Mobile)
![alt text](https://github.com/Yasir-Jami/movielog/blob/049e5edba18de6ac3a48c65311aa240e8bef00b6/images/movielog_register_page_mobile.png)

## Features
* **Movie Lists** - Save your movies to pre-made lists:
  * Watching
  * Watched
  * Watch Later
* **User Accounts** - Register and log in to access your lists across devices
* **Movie Cards** - Displays info about movies you have saved:
  * Title
  * Release Year
  * and Genre
* **List Search** - Find movies in your list by inputting a keyword
* *(To be Added)* **Custom Movie Lists** - Create your own lists to suit your preferences
* *(To be Added)* **Favorites Filter** - View only your favorites
* *(To be Added)* **Advanced Filters** - Sort and filter the movies you see (alphabetically, by genre, etc.)
* *(To be Added)* **Bulk Select** - Select multiple movies to move, delete, or favorite at once

## Built using
* **React** for interactive and responsive UI
* **External API [OMDb](https://www.omdbapi.com/)** to retrieve the necessary metadata for movies
* **Custom Web Server** hosted on an AWS instance to retrieve, store, and update user and movie-related data

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/movielog.git
   cd movielog
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set environment variables**
   Create a `.env` file in the root and define:

   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

**OR simply visit the live site for full functionality: https://movielog.ca**

---

Licensed under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).
