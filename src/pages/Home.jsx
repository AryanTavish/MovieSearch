import Header from "../components/common/Header";
import { useEffect, useState } from "react";
import { MovieCategory } from "../services/api";
import {
  NEWLAUNCH_API_URL,
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
} from "../components/logo";
import { Box, styled } from "@mui/material";
import Banner from "../components/Banner";
import UpNext from "../components/UpNext";
import Slide from "../components/Slide";


const Component = styled(Box)`
    display: flex;
    flex-direction; column;
    aligh-items: center;
    padding-top: 20px;`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const api_call = async () => {
      let response = await MovieCategory(NEWLAUNCH_API_URL);
      setMovies(response.results);
    };

    api_call();
  }, []);
  ///////////////////////////////////////////////////////////////////////

  const [movies_populor, setMovies_populor] = useState([]);

  useEffect(() => {
    const api_call = async () => {
      let response = await MovieCategory(POPULAR_API_URL);
      setMovies_populor(response.results);
    };
    api_call();
  }, []);

  ///////////////////////////////////////////////////////////////////////

  const [movies_topRated, setMovies_topRated] = useState([]);

  useEffect(() => {
    const api_call = async () => {
      let response = await MovieCategory(TOPRATED_API_URL);
      setMovies_topRated(response.results);
    };

    api_call();
  }, []);

  ///////////////////////////////////////////////////////////////////////

  const [movies_upcoming, setMovies_upcoming] = useState([]);

  useEffect(() => {
    const api_call = async () => {
      let response = await MovieCategory(UPCOMING_API_URL);
      setMovies_upcoming(response.results);
    };

    api_call();
  }, []);
  return (
    <div>
      <Header movies ={movies} />

      <Component>
        <Banner movies={movies} />
        <UpNext movies={movies} />
      </Component>
      <Box infinitescroll={true}>
        <Slide movies={movies} let Text={"New Launch"} />
        <Slide movies={movies_populor} let Text="Populor Movies" />
        <Slide movies={movies_topRated} let Text="Top Rated Movies" />
        <Slide movies={movies_upcoming} let Text="Up-Coming Movies" />
      </Box>
    </div>
  );
};

export default Home;
