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
  display: block; !important
`;

const BoxmovieName = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
`



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
              <p style={{ color: "#FFFFFF", padding: "3px", margin: 0 }}>⭐ {movie.vote_average}/10</p>
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
