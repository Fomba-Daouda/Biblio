import React,{useEffect,useState} from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Pagination from '@material-ui/lab/Pagination'
import NavBar from './Navigation/NavBar'
import Book from './Book/Book'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  pagination : {
      marginTop :'20px'
  },
  text:{
    fontFamily: "Georgia, serif ",
    fontSize:18,
    fontWeight:"bold",
    color:"gray",
 },
}));


export default function  Home() {
  const classes = useStyles();

  const image = "https://source.unsplash.com/random"
  const [livres,setLivres] = useState([])
   useEffect(()=>{
         let isMounted = true;
         axios.get("http://localhost:8080/api/livres-disponibles").then(values=>(
             isMounted && setLivres(values.data)))
         return ()=>{isMounted = false }
        },[livres])
   
  
  return (
    <React.Fragment> 
      <CssBaseline />
         <NavBar/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
                              <Typography className={classes.text}>
                                  Biblio est une plateforme dédiée à l'emprunt des livres de vos auteurs préferés
                            </Typography>
                        
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {livres.map((livre)=>(
               <Grid item key={livre.isbn} xs={12} sm={6} md={4}>
                     <Book 
                     id={livre.isbn}
                     image={image} 
                     titre={livre.titre} 
                     description={livre.description}
                     dateEdition={livre.dateEdition}
                     auteur={livre.auteur}
                     />
                 </Grid>
             ))}
          </Grid>
          <div className={classes.pagination}> 
                    <Pagination
                        count={10}
                        showFirstButton 
                        showLastButton 
                    />
          </div>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
