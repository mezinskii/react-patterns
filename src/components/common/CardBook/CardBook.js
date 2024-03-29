import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function CardBook({ image, title, author, price, category, buttonText }) {
  return (
    <Card>
      <CardMedia component="img" height="300" width="215" image={`./images/${image}`} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цена: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Категория: ${category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}

export default CardBook;
