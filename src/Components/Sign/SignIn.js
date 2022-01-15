import React ,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom'
import Biblio from '../Images/biblio.jpg'
import axios from 'axios'
import NavBar from '../Navigation/NavBar'
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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Biblio})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign:'center',
    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  msg:{
     color : 'blue'
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [user,setUser] = useState("")
  const [msg,setMsg] = useState(false) 
  useEffect(() => {
              axios.post("http://localhost:8080/api/login",
              {
                "login": email,
                "mdp": password
              })   
              .then(value=>setUser(value.data))
              .catch(e=>{
                console.log(e);
              }) 
         },[email,password])
  
  const handleSignIn = (e)=>{
        e.preventDefault()
        
        console.log(user)
              if(user!== null && user !==undefined && user.role ==="lecteur"){
                      localStorage.setItem("lecteur",user.idLecteur)
                      navigate("/home")
              }
              else{
                      setMsg(true)
              } 

  }

  const handleSignUp=()=>{
       navigate("/signup")
  }
  
  
  const message =()=>{
     if(msg===true){
           return(
            <Typography component="h1" variant="h5">
                Veuillez saisir les identifiants corrects !!!
            </Typography>
           )
     }
     
  }
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
       <NavBar/>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          {
            message()
          } 
           
          <form className={classes.form}  >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Addresse Email ou Nom d'utilisateur"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de Passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se Rappeller de Moi"
            />
            <Button
              
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e)=>handleSignIn(e)}
            >
              SE CONNECTER
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>handleSignUp()}>
                  {"Créer un nouveau compte ?"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}