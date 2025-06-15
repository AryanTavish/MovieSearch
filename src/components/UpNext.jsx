import { Box, styled, Typography } from "@mui/material";
import {Link} from 'react-router-dom';
import { rout_paths } from "./Routes";
import LikeButton from "./LikeButton";

const UpNextStyled = styled(Typography)`
    font-size: 20px;
    font-weoight: 600;
    color: #FFFF00;
    margin-down: 10px
    
    
`;

const Poster = styled('img')`
    width: 78px;
    Border-radius: 10px;
    Border: 1px solid #FFFFFF;
    transition: transform 0.3s;
  &:hover {
    transform: scale(1.05); /* Zooms out by 5% */
    z-index: 10;
  }`


const Components= styled(Box)`
    display: flex;
    padding: 10px;
    

    
    `

const TypographyText = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    padding-top: 10px;
    padding-left: 10px;
    font-family: 'Roboto', sans-serif;
    &:hover{
    color: #FFFF00}

    `



const MovieName =styled(Typography)`
  padding-left: 10px`


const PosterContainer = styled(Box)`
 
  display: grid-inline;
`

const Boxlike = styled(Box)`
  position: absolute;
  top: 10px;
  left:10px;
  
  background-color: rgba(61, 59, 59, 0.7);
  border-radius: 12px;
  padding: 0px 3px;
  z-index: 3;
  display: flex;
`


const UpNext = ({ movies }) => {
  return (
    <Box style={{  paddingLeft: "20px", backround:'rgba(0,0,0,0.5)',  }}>
      <UpNextStyled style={{  marginBottom:"10px"}}>Up next</UpNextStyled>
      {movies.splice(0, 3).map((movie) => (
        
        <Components>
           
          <Link to ={`${rout_paths.MovieDetails}?id=${movie.id}`} style={{ textDecoration: 'None', color:'inherit'}}>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Poster"
          /></Link>
          
           <PosterContainer>

          <MovieName>{movie.title} 
          
          <p style={{ color: "var(--star-color)", padding: "10px"}}>⭐ {movie.vote_average?.toFixed(1)}/10</p>
         
           <Boxlike  >
          <LikeButton movie={movie} />
          </Boxlike>
          
          </MovieName>
         
           </PosterContainer>

           

          
        </Components>
        
        
      ))}
      <Link to ={`${rout_paths.moviesCategory}?TYPE=populor`} style={{ textDecoration: 'None', color:'inherit'}} >
      <TypographyText>Browse trailers ﹥ </TypographyText></Link>
    </Box>
  );
};

export default UpNext;
