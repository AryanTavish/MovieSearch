import Header from "../components/common/Header";
import { Box, Button, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieCategory } from "../services/api";

const BannerStyled = styled("img")({
  width: "70%",
  borderRadius: "20px",
  height: "100%",
  display: "flex",
});
const BannerMovie = styled(Box)`
    display: flex;
    flex-direction; column;
    aligh-items: center;
    padding-top: 20px;
`;
const MovieDiscription = styled(Box)`
  font-size: 20px;
  font-weight: 600;
  color: rgb(228, 228, 221);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 68.9%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
`;
const Vote = styled(Box)`
  font-size: 20px;
  font-weight: 600;
  display: block;
`;
const Overview = styled(Box)`
  font-size: 16px;
  font-weight: 400;
`;

const Downloadbuttton = styled(Box)`
  padding: 40px;
  
  display: flex;
  flex-direction: column;
  gap: 16px; /* space between buttons */
  align-items: flex-start; /* or center */
`;

const WatchNow = styled(Button)`
  padding: 20px 30%;
  background-color: #FFFF00;
  font-size: 16px;
  font-weight: 600;
  
`
const Download = styled(Button)`
  padding: 20px 30%;
  background-color: #FFFF00;
  font-size: 16px;
  font-weight: 600;
`;


const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    const fetchMovie = async (API_URL) => {
      const response = await MovieCategory(API_URL);
      setMovie(response); // Expecting a single movie object
    };
    const movieID = search.split("=")[1];
    const API_URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=d9bec6b21f57ad57b4311466e05ebd4d&language=en-US`;

    fetchMovie(API_URL);
  }, [search]);

  return (
    <Box>
      <Header />
      <Box>
        <Box>
          {movie ? (
            <BannerMovie>
              <BannerStyled
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <MovieDiscription>
                <h1 style={{ color: "#FFFFFF", padding: "20px" }}>
                  {movie.title}
                </h1>
              </MovieDiscription>
              <Vote>
                <p style={{ color: "#FFFFFF", padding: "20px" }}>
                  ⭐ {movie.vote_average?.toFixed(1)}/10
                </p>

                <Overview>
                  <p style={{ color: "#FFFFFF", padding: "20px" }}>
                    {movie.overview}
                  </p>
                </Overview>
                <Downloadbuttton>
                  <WatchNow
                    onClick={() =>
                      window.open("https://www.youtube.com/watch?v=QUd3CbVyqfk&t=55", "_blank")
                    }
                  >
                    Watch Now
                  </WatchNow>
                  <Download
                    onClick={() =>
                      window.open("https://www.youtube.com/watch?v=QUd3CbVyqfk&t=55", "_blank")
                    }
                  >
                    Download
                  </Download>
                </Downloadbuttton>
              </Vote>
            </BannerMovie>
          ) : (
            <div>Loading...</div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
