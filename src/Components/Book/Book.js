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
    maxWidth: 100,
  },
  card:{
     height:400,
  },
  cardMedia: {
    paddingTop: '56.25%', 
    height: 250,
  },
  
  titre:{
    fontFamily: "Georgia, serif ",
    fontSize:16,
    fontWeight:"bold",
  },
  auteur:{
    fontFamily: "Georgia, serif ",
    fontSize:15,
    fontWeight:"bold",
  },
  
});

export default function Book({id,image,titre,auteur}) {
  const classes = useStyles();
  const navigate = useNavigate()
  
  const handleClickBorrow = () => {
     navigate("/pay")
  };
  
  const handleDetail =()=>{
      navigate(`/book-detail/${id}`)
  }
  return (
        
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.titre}>
                      Titre : {titre}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" className={classes.auteur}>
                      Auteur : {auteur}
                    </Typography>
        
                    
                  </CardContent>
                  <CardActions className={classes.actions}>
                        <Button size="small" color="primary" onClick={handleDetail}>
                          Plus
                        </Button>
                        <Button size="small" color="primary" onClick={handleClickBorrow}>
                          Emprunter
                        </Button>
                  
                  </CardActions>
                </Card>
  );
}
