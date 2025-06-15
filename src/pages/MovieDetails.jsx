import Header from "../components/common/Header";
import { Box, Button, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieCategory } from "../services/api";
import { minWidth } from "@mui/system";

const BannerStyled = styled("img")({
  width: '80%',
  borderRadius: "10px",
  display: "flex",
  zindex: '-1',

});
const BannerMovie = styled(Box)`
    display: flex;
    flex-direction; column;
    aligh-items: right;
    padding-top: 0px;
    position: relevent;
`;
const MovieDiscription = styled(Box)`
  font-size: 20px;
  font-weight: 600;
  color: var(color);
  margin-bottom: 10px;
  justify-content: left;
  right: 0;
  text-align: left;
  margin-top: 20px;
  position: relevent;
`;
const Vote = styled(Box)`
font-size: 20px;
font-weight: 600;
display: block;
text-align: center;


`;
const Overview = styled(Box)`
  font-size: 14px;
  font-weight: 800;
  align-item:right;
  right:0;
  text-align:left;
  weight:500;
`;

const Downloadbuttton = styled(Box)`
  paddingTop:20px;
  margin-top:20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center; 
  width: 100%;
  align-items: center;
`;

const WatchNow = styled(Button)`
  padding: 12px 32px;
  background-color: #ffff00;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  &:hover {
    background-color: #f5f500;
  }
  
`;

const Download = styled(Button)`
  padding: 12px 32px;
  background-color: #ffff00;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  &:hover {
    background-color: #f5f500;
  }
`;


const Details =styled(Box)`
position: absolute;
zindex:2;
right:0;
width:30%;




`
const Star=styled(Box)`

`

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
                alt={movie.title} style={{WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 90%, transparent 100%)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",}}
              />
              <Details>
              
              <Vote><Star>
                <p style={{ color: "var(color)", padding:'20px'}}>
                  ⭐ {movie.vote_average?.toFixed(1)}/10
                </p></Star>
                <MovieDiscription>
                <h1 style={{ color: 'var(color)', paddingTop:'10px'}}>
                  {movie.title}
                </h1>
              </MovieDiscription>
                <Overview>
                  <p style={{ color: "var(color)",paddingTop:'10px'  }}>
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
              </Vote></Details>
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
