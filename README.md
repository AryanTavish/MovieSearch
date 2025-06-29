# MovieForSearch 🎬

A modern, responsive movie search application built with React that allows users to discover and explore movies with detailed information and an intuitive user interface.

## 🚀 Features

- **Movie Search**: Search for movies by title with real-time search functionality
- **Movie Categories**: Browse movies by different categories and genres
- **Movie Details**: View comprehensive information including plot, cast, ratings, and release dates
- **Like/Favorites**: Like movies and save them to your favorites list
- **Up Next**: Get recommendations for what to watch next
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with banner displays
- **Navigation**: Seamless routing between different pages and sections

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling and responsive design
- **React Router** - For navigation and routing
- **Movie Database API** - For fetching movie data (likely TMDB or OMDB)
- **Create React App** - Project bootstrapping and build tools

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AryanTavish/MovieForSearch.git
   cd MovieForSearch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your movie database API key:
     ```
     REACT_APP_API_KEY=your_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will automatically reload when you make changes

## 🎯 Usage

1. **Home Page**: Browse featured movies and trending content
2. **Search Movies**: Use the search bar to find specific movies
3. **Browse Categories**: Explore movies by different categories and genres
4. **View Movie Details**: Click on any movie to see detailed information
5. **Like Movies**: Click the like button to add movies to your favorites
6. **Favorites Page**: View all your liked movies in one place
7. **Up Next**: Get personalized recommendations for your next watch

## 📁 Project Structure

```
MovieForSearch/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── Banner.jsx
│   │   ├── LikeButton.jsx
│   │   ├── Routes.js
│   │   ├── SearchBar.jsx
│   │   ├── Slide.jsx
│   │   ├── UpNext.jsx
│   │   └── logo.js
│   ├── pages/
│   │   ├── CategoryMovies.jsx
│   │   ├── Home.jsx
│   │   ├── Liked.jsx
│   │   └── MovieDetails.jsx
│   ├── services/
│   │   └── (API service files)
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Removes the single build dependency (one-way operation)

## 🏗️ Component Overview

### Pages
- **Home.jsx** - Main landing page with featured content
- **MovieDetails.jsx** - Detailed view of individual movies
- **CategoryMovies.jsx** - Browse movies by categories
- **Liked.jsx** - User's favorite movies collection

### Components
- **SearchBar.jsx** - Movie search functionality
- **Banner.jsx** - Hero banner for featured content
- **LikeButton.jsx** - Interactive like/favorite button
- **Slide.jsx** - Carousel/slider component for movie lists
- **UpNext.jsx** - Recommendations component
- **Routes.js** - Application routing configuration
- **logo.js** - App logo component

### Services
- API integration for movie data fetching
- Data management and state handling

## 🔧 API Configuration

This project uses a movie database API to fetch movie information. You'll need to:

1. Sign up for an API key from your chosen movie database service
2. Add the API key to your `.env` file
3. Configure the API endpoints in your components

## 🌟 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- None currently reported

## 📝 Future Enhancements

- [ ] Add user authentication and profiles
- [ ] Implement movie ratings and reviews
- [ ] Add movie trailers integration
- [ ] Include social sharing features
- [ ] Add advanced filtering and sorting options
- [ ] Implement offline viewing capabilities
- [ ] Add movie recommendations based on viewing history

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aryan Tavish**
- GitHub: [@AryanTavish](https://github.com/AryanTavish)

## 🙏 Acknowledgments

- Thanks to the movie database API providers for the data
- Create React App team for the excellent boilerplate
- The React community for inspiration and resources

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact the maintainer.

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
