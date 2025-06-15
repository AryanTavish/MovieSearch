
import { Box, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {Link} from 'react-router-dom';
import { rout_paths } from "./Routes";
import LikeButton from "./LikeButton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const SlideStyled = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(1.5rem, 100%);
  font-weight: 600;
  color: white;
  background: transparent;
  margin-top: 0.5rem;
`;

const TopAir = styled(Box)`
  padding-top: 20px;
`;

const TopAiringStyled = styled(Typography)`
font-size: 30px;
font-weight: 600;
background: linear-gradient(to right, #30cfd0, #330867);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

color: transparent;     /* Fallback */
margin-bottom: 10px;
`;

const Start = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  padding: 2px 6px;
  color: #fff700;
  font-weight: bold;
  font-size: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
`;

const BoxStyle = styled(Box)`
  position: relative;
  margin: 0 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
    z-index: 1;
    border: 1px solid #ffffff;
    border-radius: 4px;
  }
`;

const Boxcard = styled(Box)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  border-radius:8px
`;


const Slide =({movies, Text, MovieID}) =>{


    return(
        <TopAir >
            <TopAiringStyled >🛸{Text}</TopAiringStyled>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                pauseOnHover={true}
              >
                {movies.map((movie) => (
                  
                    <BoxStyle><Link to ={`${rout_paths.MovieDetails}?id=${movie.id}`} style={{ textDecoration: 'None', color:'inherit'}}>
                  <Boxcard>
                  <SlideStyled 
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.title} 
                  />
                  <Title>{movie.title}
                    
                    </Title>
                  </Boxcard>
                  <Start>
                    <p style={{ color: "#FFFFFF", padding: "0px" }}>⭐ {movie.vote_average?.toFixed(1)}/10</p>
                  </Start>
                  
                  </Link>
                  <LikeButton movie={movie}/>
                  </BoxStyle>
                ))}
              </Carousel>
            </TopAir>
    )
}


export default Slide;