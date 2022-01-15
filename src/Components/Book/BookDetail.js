import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavBar from '../Navigation/NavBar'
import {useParams,useNavigate} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles({
   
    image: {
      marginTop:10,
      height: 500,
      width : 500,
      '@media(width: 100px)': {
        width: 100
      },
      minWidth:100,
      
    },
    description :{
      fontFamily: "Georgia, serif ",
      fontSize:15,
      fontWeight:"bold",
      height: 200,
      widht : 130,
      marginBottom :10,
      marginTop:10,
      paddingTop: 2,
      textAlign :'center',
    },
    titre:{
      fontFamily: "Georgia, serif ",
      fontSize:18,
      fontWeight:"bold",
      height: 40,
      widht : 130,
      marginBottom :10,
      marginTop:10,
      paddingTop: 2,
      textAlign :'center',
    },
    auteur:{
      fontFamily: "Georgia, serif ",
      fontSize:15,
      fontWeight:"bold",
      height: 40,
      widht : 130,
      marginBottom :10,
      marginTop:10,
      paddingTop: 2,
      textAlign :'center',
    },
    emprunt:{
       marginTop:10,
       alignItems:'center',
       height: 40,
       widht : 130,
    },
  });
  
function componentName() {
    const classes = useStyles();
    let {id} = useParams()
    const [livre,setLivre] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
      let isMounted = true;
      axios.get("http://localhost:8080/api/livre/"+id).then(values=>(
          isMounted && setLivre(values.data)))
      return ()=>{isMounted = false }
     },[livre])
     
     const handleClickBorrow = () => {
      navigate("/pay")
   };
   
   /* A suivre
   if(livre.idEtatLivre){
     console.log(livre.idEtatLivre.etat)
   }*/
   
   
    return (
         

         <div>
              <NavBar/>
              <Grid container item spacing={2}>
                    <Grid container item xs={6} >
                       <Paper>
                            <Box
                                component="img"
                                alt="The house from the offer."
                                src="https://source.unsplash.com/random"
                                className={classes.image}
                              />
                       </Paper>
                      
                    </Grid>
                    <Grid item xs={6} >
                        <Grid item >
                              <Paper className={classes.titre}>
                                 Titre : {livre.titre} 
                              </Paper>
                         </Grid>
                         <Grid item >
                              <Paper className={classes.titre}>
                                 Auteur : {livre.auteur} 
                              </Paper>
                         </Grid>
                         <Grid item >
                              <Paper className={classes.description}>
                                <p style={{fontSize:18}}>Description :</p> {livre.description} 
                              </Paper>
                         </Grid>
                         <Grid item >
                              <Paper className={classes.titre}>
                                 Etat du livre : 
                                 <Rating name="read-only" value={2} readOnly />
                              </Paper>
                         </Grid>
                         <Grid item >
                                <Button size="small" color="primary" onClick={handleClickBorrow} className={classes.emprunt}>
                                  Emprunter
                                </Button>
                         </Grid>
                         
                    </Grid>
                    
                  </Grid>

         </div>
              
    )
    }
export default componentName
