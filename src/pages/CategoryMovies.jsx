import Header from "../components/common/Header";
import { Box, styled } from "@mui/material";

import { useState, useEffect } from "react";
import { MovieCategory } from "../services/api";
import { useLocation } from "react-router-dom";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  NEWLAUNCH_API_URL,
  UPCOMING_API_URL,
} from "../components/logo";

import {Link} from 'react-router-dom';
import { rout_paths } from "../components/Routes";
import LikeButton from "../components/LikeButton";


const BannerStyled = styled("img")({
  width: "100%",
  height: "200px", // fixed height
  objectFit: "cover", // ensures it doesn't stretch
  borderRadius: "20px",
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
  border-radius: 10px;
  width: 15%;
  padding: 4px,8px;
  z-index: 2;
`;

const BoxStyled = styled(Box)`
  position: relative;
  margin-bottom: 80px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }
`;


const BoxmovieName = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
`;




const MoviesCategory = () => {
  const [movies, setMovies] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fetchMovies = async (API_URL) => {
      const response = await MovieCategory(API_URL);
      setMovies(response.results);
    };

    let API_URL;

    if (search.includes("populor")) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
    } else if (search.includes("newlaunch")) {
      API_URL = NEWLAUNCH_API_URL;
    } else if (search.includes("upcomming")) {
      API_URL = UPCOMING_API_URL;
    }

    fetchMovies(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <MovieCategoryStyled>
        {movies.map((movie) => (
          <BoxStyled key={movie.id}>
            <Link to ={`${rout_paths.MovieDetails}?id=${movie.id}`} style={{ textDecoration: 'None', color:'inherit'}}>
            <BannerStyled
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <Start>
              <p style={{ color: "#FFFFFF", padding: "3px", margin: 0 }}>⭐ {movie.vote_average?.toFixed(1)}</p>
            </Start>
            <BoxmovieName>
              <p >{movie.title}</p>
            </BoxmovieName>
            </Link>
            <LikeButton movie={movie} />
          </BoxStyled>
        ))}
      </MovieCategoryStyled>
    </>
  );
};

export default MoviesCategory;
