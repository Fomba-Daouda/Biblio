import React ,{useEffect,useState}from 'react'
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../Navigation/NavBar'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar'
import Daouda from '../Images/Daouda.png'
import Button from '@material-ui/core/Button';
import axios from 'axios'
 const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    titre:{
      fontFamily: "Georgia, serif ",
      fontSize:18,
      fontWeight:"bold",
      height: 40,
      widht : 130,
      marginBottom :10,
      marginTop:10,
      marginLeft : 30,
      paddingTop: 2,
      textAlign :'center',
    },
    control: {
      height: 250,
      width: 500,
      marginTop: 40,
      border : 5 ,
      borderRadius : 5, 
      marginRight:0,
      alignItems :"center",
   },
   large: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginLeft : 70
  },
  button :
  {
       marginTop:10,
       alignItems:'center',
       height: 40,
       widht : 130,
  }
   }));


function componentName() {
    const classes = useStyles()
    const [lecteur,setLecteur] = useState([])
    const idLecteur = localStorage.getItem("lecteur")
    console.log(idLecteur)
   useEffect(()=>{
         let isMounted = true;
         axios.get("http://localhost:8080/api/lecteur/"+idLecteur).then(value=>(
             isMounted && setLecteur(value.data)))
         return ()=>{isMounted = false }
        },[lecteur])
        
    return (
        <div>
             <NavBar/>
           
          <Grid container spacing={2}>
                 <Grid item  xs={3} >
                              <Avatar className={classes.large} src={Daouda} />
                            
                  </Grid>
                  <Grid item xs={9}>
                        <Grid item className={classes.control} >
                                  <Grid item >
                                        <Paper className={classes.titre}>
                                          Nom : {lecteur.nom}
                                        </Paper>
                                  </Grid>
                                  <Grid item >
                                        <Paper className={classes.titre}>
                                          Prenom : {lecteur.prenom}
                                        </Paper>
                                  </Grid>
                                  <Grid item >
                                        <Paper className={classes.titre}>
                                          Nom d'utilisateur : {lecteur.login}
                                        </Paper>
                                  </Grid>
                                  <Grid item >
                                        <Paper className={classes.titre}>
                                          Email : {lecteur.email}
                                        </Paper>
                                  </Grid>
                                  <Grid item >
                                        <Paper className={classes.titre}>
                                          Rôle : {lecteur.role}
                                        </Paper>
                                  </Grid>
                         
                        </Grid>
                        <Grid item >
                              <Button size="small" color="primary"  className={classes.button}>
                                        Modifier
                                </Button>
                        </Grid> 
                  </Grid>
           </Grid>
        </div>
    )
}

export default componentName
