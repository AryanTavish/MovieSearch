
import { Box, styled } from "@mui/material";
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
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BannerStyled = styled("img")({
  width: "100%",
  borderRadius: "20px",
  height: "100%",
  
});

const BoxTitle = styled(Box)`
    font-size: 40px;
    font-weight: 800;
    color:rgb(187, 187, 182);
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
`
const Start =styled(Box)`
    position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  padding: 2px 6px;
  color: #fff700;
  font-weight: bold;
  font-size: 19px;
  z-index: 2;
  display: flex;
  align-items: center;

`

const Banner = ({ movies }) => {
  return (
    <Box style={{ width: "65%", padding: "0px" }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
      >
        {movies.map((movie) => (
          <Box><Link to ={`${rout_paths.MovieDetails}?id=${movie.id}`} style={{ textDecoration: 'None', color:'inherit'}}>
          <BannerStyled
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <BoxTitle>
          <p style={{justifyContent:"center", alignItems: "center"}}> {movie.title}</p>
          </BoxTitle>
          <Start>
                    <p style={{ color: "#FFFFFF", padding: "0px" }}>⭐ {movie.vote_average?.toFixed(1)}/10</p>
                  </Start>
          </Link>
          <LikeButton movie={movie}/>
          </Box>
        ))}
        
      </Carousel>
    </Box>
  );
  //${movie.backdrop_path}
  //7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg
};

export default Banner;
