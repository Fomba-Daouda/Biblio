import React,{useEffect,useState} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import {Menu,MenuItem,Link} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import { useNavigate } from 'react-router-dom';
import MonPhoto from '../Images/Daouda.png'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link:{
         marginLeft:10,
         fontFamily: "Georgia, serif ",
         fontSize:16,
         fontWeight:"bold",
  },
  logo :{
    fontFamily: "Georgia, serif ",
    fontSize:13,
    fontWeight:"bold",
    marginRight:30,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: '40%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 20,
    width: 50,
    textAlign: 'center'
  },
  title: {
    fontFamily: "Georgia, serif ",
    fontSize:16,
    fontWeight:"bold",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: 20,
    color : 'white',
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: 20,
  },
  
}));

export default function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const [profil, setProfil] = useState(null)
  const [categories,setCategories] = useState([])

  const handleCategorieClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategorieClose = () => {
    setAnchorEl(null);
  };
  
  const handleProfilClick = (event) => {
    setProfil(event.currentTarget);
  };

  const handleProfilClose = () => {
    setProfil(null);
  };
  
  useEffect(() => {
                let isMounted = true 
                 axios.get("http://localhost:8080/api/categories")
                .then(value=>(isMounted && setCategories(value.data)))
                return ()=>{isMounted=false}
  },[categories])
  const goto=(value)=>{
    navigate(value)
  }
  
  const deconnexion =()=>{
    localStorage.removeItem("lecteur")
    goto("/home")
  }
  const connexionPannel = localStorage.getItem("lecteur") != null ?
  (
    <div>
        
                 <Avatar className={classes.large} onClick={(e)=>handleProfilClick(e)} src={MonPhoto}/>
        
                <Menu
                              id="menu"
                              anchorEl={profil}
                              keepMounted
                              open={Boolean(profil)}
                              onClose={handleProfilClose}
                    >
                      
                              <MenuItem key="profil" onClick={()=>goto("/profil")} variant="body2" color="inherit"
                              style={{fontFamily: "Georgia, serif ",fontSize:13,fontWeight:"bold",}}>
                                 Profil 
                              </MenuItem>
                              <MenuItem  key="abonnements" onClick={()=>goto("/abonnements")}  variant="body2" color="inherit"
                              style={{fontFamily: "Georgia, serif ",fontSize:13,fontWeight:"bold",}}>
                                 Abonnements
                              </MenuItem>
                              <MenuItem  key="emprunts" onClick={()=>goto("/emprunts")} variant="body2" color="inherit"
                              style={{fontFamily: "Georgia, serif ",fontSize:13,fontWeight:"bold",}}>
                                 Emprunts
                              </MenuItem>
                              <MenuItem   key="deconnexion" onClick={deconnexion} variant="body2" color="inherit"
                              style={{fontFamily: "Georgia, serif ",fontSize:13,fontWeight:"bold",}}
                              
                              >
                                 Déconnexion
                              </MenuItem>
               </Menu>
        </div>
  )
  :
  (
    <Link onClick={()=>goto("/signin")} component="button" underline='none'  color="inherit" variant="body2" className={classes.link}> 
             Connexion
    </Link>
  )
    
  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>    
          <Link className={classes.logo} underline='none' component="button" variant="h6" noWrap onClick={()=>goto("/home")} >
               Biblio 
          </Link>
          <Link className={classes.title}  underline='none' component="button" variant="h6" noWrap  onClick={()=>goto("/home")}>
               Home 
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
           
          </div>
          <div>
          <Link className={classes.title} underline="none" component="button" variant="h6" noWrap onClick={handleCategorieClick}>
               Catégories
          </Link>
                <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleCategorieClose}
                >
                  {
                    categories.map((category)=>
                           <MenuItem key={category.idCategorie} onClick={handleCategorieClose} variant="body2" color="inherit"
                           style={{
                                fontFamily: "Georgia, serif ",
                                fontSize:13,
                                fontWeight:"bold",
                           }}
                           >
                               {category.libelle}
                            
                            </MenuItem>
                      )
                  }
                        
               </Menu>
          </div>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
          

           <Link onClick={()=>goto("/abonnement")} component="button" underline='none' color="inherit" variant="body2" className={classes.link}> 
                   Abonnement
           </Link> 

            {
              connexionPannel
            }
           
          </div>
          
          
        </Toolbar>
      </AppBar>
      
      
    </div>
  );
}
