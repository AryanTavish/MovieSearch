import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { rout_paths } from "../components/Routes";
import { Box, styled } from "@mui/material";
import LikeButton from "../components/LikeButton";
import Header from "../components/common/Header";

const BannerStyled = styled("img")({
  width: "100%",
  borderRadius: "20px",
  height: "100%",
});

const MovieCategoryStyled = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding-top: 10px;
  align-items: center;
`;

const Start = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 100px;
  padding: 0px;
  z-index: 2;
`;

const BoxStyled = styled(Box)`
  position: relative;
  margin-bottom: 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: block !important;
`;

const BoxmovieName = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
`;

const Liked = () => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedMovies = async () => {
      const ids = JSON.parse(localStorage.getItem("likedMovies") || "[]");
      if (!ids.length) {
        setLikedMovies([]);
        setLoading(false);
        return;
      }
      // Fetch all movie details in parallel
      const requests = ids.map(id =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d9bec6b21f57ad57b4311466e05ebd4d&language=en-US`)
          .then(res => res.json())
      );
      const movies = await Promise.all(requests);
      setLikedMovies(movies);
      setLoading(false);
    };
    fetchLikedMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header/>
      <Box style={{fontSize:'24px', justifycontent:'center', marginTop:'20px', padding:'10px'}}>Liked Movies</Box>
      {likedMovies.length === 0 ? (
        <p>No liked movies yet.</p>
      ) : (
        <MovieCategoryStyled>
          {likedMovies.map((movie) => (
            <BoxStyled key={movie.id}>
              <Link to={`${rout_paths.MovieDetails}?id=${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <BannerStyled
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <Start>
                  <p style={{ color: "#FFFFFF", padding: "3px", margin: 0 }}>⭐ {movie.vote_average}/10</p>
                </Start>
                <BoxmovieName>
                  <p>{movie.title}</p>
                </BoxmovieName>
              </Link>
              <LikeButton movie={movie} />
            </BoxStyled>
          ))}
        </MovieCategoryStyled>
      )}
    </div>
  );
};

export default Liked;