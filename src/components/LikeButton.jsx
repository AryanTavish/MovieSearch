import { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

const BoxLike = styled(Box)`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(61, 59, 59, 0.7);
  border-radius: 16px;
  padding: 2px 6px;
  color: #fff700;
  font-weight: bold;
  font-size: 19px;
  z-index: 3;
  display: flex;
  align-items: center;
`;

const LikeButton = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!movie || !movie.id) return;
    const prev = JSON.parse(localStorage.getItem("likedMovies") || "[]");
    setLiked(prev.includes(movie.id));
  }, [movie]);

  const handleLike = () => {
    if (!movie || !movie.id) return;
    const prev = JSON.parse(localStorage.getItem("likedMovies") || "[]");
    let updated;
    if (liked) {
      // Remove from liked
      updated = prev.filter(id => id !== movie.id);
    } else {
      // Add to liked
      updated = [...prev, movie.id];
    }
    localStorage.setItem("likedMovies", JSON.stringify(updated));
    setLiked(!liked);
  };

  if (!movie) return null;

  return (
    <BoxLike>
      <IconButton
        aria-label="bookmark"
        size="small"
        onClick={handleLike}
      >
        <BookmarkAddIcon fontSize="inherit" sx={{ color: liked ? "red" : "#fff700" }} />
      </IconButton>
    </BoxLike>
  );
};

export default LikeButton;