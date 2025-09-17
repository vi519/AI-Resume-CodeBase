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
    <Card sx={{ maxWidth: 345, background:"#262626", border: "1px solid #ebebeb" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ebebeb" }}>
          {title}
        </Typography>
        <Typography variant="body2"  sx={{color:"#ebebeb" }}>
          {description}
        </Typography>
      </CardContent>
      {/* {buttonLabel && (
        <CardActions>
          <Button size="small">{buttonLabel}</Button>
        </CardActions>
      )} */}
    </Card>
  );
};

export default CardWrapper;
