// components/CardWrapper.js
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const CardWrapper = ({ data }) => {
  const { title, description, imageUrl, buttonLabel } = data;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {buttonLabel && (
        <CardActions>
          <Button size="small">{buttonLabel}</Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CardWrapper;
