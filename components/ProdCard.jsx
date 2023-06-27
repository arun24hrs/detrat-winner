import React from 'react'
import {yellow} from '@mui/material/colors'
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import StarIcon from '@mui/icons-material/Star';
// import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Chip } from '@mui/material';
import { ExpandMore, Favorite } from '@mui/icons-material';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProdCard = ({data}) => {
    let {id, image, title, price, description, category, rating} = data;
  return (
    <Card margin="20px">
        <CardMedia 
        component="img"
        height="200"
        image={image}
        alt={title}/>

        <CardContent>
          <Typography variant='h6'>{title}</Typography>
          <Chip label={category} color='primary' size='small'/>
          <Typography variant='body1' fontWeight={"bold"}>{`$ ${price}`}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
         </Typography>
        </CardContent>
        <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite/>
          </IconButton>
          <IconButton aria-label="share with friends">
          <ShareIcon/>
          </IconButton>

          <Button aria-label="ratings" startIcon={<StarIcon/>}>
          {rating.rate}
          </Button>
        </CardActions>
    </Card>
  )
}

export default ProdCard;




