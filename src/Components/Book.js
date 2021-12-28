import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useNavigate  } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardMedia: {
    paddingTop: '56.25%', 
    height: 300,
  },
  modal :{
       height:100,
  },
});

export default function Book({image,titre,description}) {
  const classes = useStyles();
  const navigate = useNavigate()
  const handleClickBorrow = () => {
     navigate("/pay")
  };

  
  return (
        
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Titre : {titre}
                    </Typography>
                    <Typography>
                       Descrption : {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      Plus
                    </Button>
                    <Button size="small" color="primary" onClick={handleClickBorrow}>
                      Emprunter
                    </Button>
                    
                    <div>
      
      
              </div>
                  </CardActions>
                </Card>
  );
}
