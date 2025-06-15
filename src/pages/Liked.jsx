import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { rout_paths } from "../components/Routes";
import { Box, styled, Typography } from "@mui/material";
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
  padding-top: 20px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Start = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 4px 8px;
  z-index: 2;
  font-size: 12px;
  font-weight: bold;
  color: #fff700;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
`;

const BoxStyled = styled(Box)`
  position: relative;
  margin-bottom: 60px;
  border-radius: 10px;
  display: block;
`;

const BoxmovieName = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  border-radius: 0 0 20px 20px;
  text-align: center;
`;

const Heading = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 30px 0 10px 0;
  background: linear-gradient(to right, #30cfd0, #330867);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

  return (
    <>
      <Header />
      <Heading>❤️ Liked Movies</Heading>
      {loading ? (
        <Typography align="center" mt={4}>Loading...</Typography>
      ) : likedMovies.length === 0 ? (
        <Typography align="center" mt={4}>You haven't liked any movies yet.</Typography>
      ) : (
        <MovieCategoryStyled>
          {likedMovies.map((movie) => (
            <BoxStyled key={movie.id}>
              <Link to={`${rout_paths.MovieDetails}?id=${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <BannerStyled
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <Start>⭐ {movie.vote_average}/10</Start>
                <BoxmovieName>{movie.title}</BoxmovieName>
              </Link>
              <LikeButton movie={movie} />
            </BoxStyled>
          ))}
        </MovieCategoryStyled>
      )}
    </>
  );
};

export default Liked;
