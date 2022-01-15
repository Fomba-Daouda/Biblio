import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import NavBar from '../Navigation/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 200,
      
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
    card:{
       height:300,
       width:200,
       borderRadius:2,

    },
    
    
    prix:{
      fontFamily: "Georgia, serif ",
      fontSize:14,
      fontWeight:"bold",
    },
    description:{
      fontFamily: "Georgia, serif ",
      fontSize:14,
      fontWeight:"bold",
    },
    cardAction :{
      fontFamily: "Georgia, serif ",
      fontSize:14,
      fontWeight:"bold",
      
    },
  }))

function componentName() {
    const [abonnements,setAbonnements] = useState([])
    const classes = useStyles();
    useEffect(() => {
        axios.get("http://localhost:8080/api/abonnements")
              .then(value => setAbonnements(value.data))
    },[abonnements])
    
    
           return(
               <div>
                        < div>
                            <NavBar/>
                        </div>
                        <Container >
                        <Grid container spacing={4} className={classes.cardGrid} maxWidth="md">
                            {
                                   abonnements.map((abonnement)=>{
                                    return(  
                                        <Grid item key={abonnement.id} xs={12} sm={6} md={4}>
                                       <Card className={classes.root}>
                                                            <CardContent className={classes.CardContent}>
                                                                
                                                                <Typography color="textSecondary" variant="h5" component="h2" className={classes.description}>
                                                                   Libéllé : {abonnement.libelle}
                                                                </Typography>
                                                                <Typography  className={classes.prix}>
                                                                    Prix : {abonnement.prix}
                                                                </Typography>
                                                                <Typography color="textSecondary"  variant="body2" component="p" className={classes.description}>
                                                                  Période : {abonnement.periode}
                                
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions >
                                                                <Button className={classes.cardAction} size="small" color="primary" >Acheter</Button>
                                                            </CardActions>
                                                        </Card>
                                            </Grid>
                                    )})}
                                        
                             
                        </Grid>
                        </Container>
                </div>
                            
                       
            
      )
                              
}

export default componentName
