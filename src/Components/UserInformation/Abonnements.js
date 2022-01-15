import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavBar from '../Navigation/NavBar'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
     table : {
       width: "80%",
       marginLeft: 100 ,
          
     },
    titre :{
      fontFamily: "Georgia, serif ",
      fontSize:20,
      fontWeight:"bold",
      marginBottom :5,
      marginTop:10,
      paddingTop: 2,
      textAlign :'center',
    },
    cell:{
        fontFamily: "Georgia, serif ",
      fontSize:15,
      fontWeight:"bold",
    },
    button:{
           marginTop :20,
           marginLeft : "45%",
    },
  });
function componentName() {
    const classes = useStyles();
    const idLecteur = localStorage.getItem("lecteur")
    const [abonnements,setAbonnements] = useState([])
    useEffect(()=>{
         let isMounted = true;
         axios.get("http://localhost:8080/api/lecteur/"+idLecteur).then(value=>(
             isMounted && setAbonnements(value.data.effectuerabonnementList)))
         return ()=>{isMounted = false }
        },[abonnements])
        console.log(abonnements)

    return (
           <div>
               <NavBar/>
               <Typography variant="h6" align="center" gutterBottom className={classes.titre}>
                 Mes abonnements
               </Typography>
              <TableContainer component={Paper} className={classes.table}> 
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.cell}>Nom </TableCell>
                    <TableCell align="right" className={classes.cell}> Date début</TableCell>
                    <TableCell align="right"  className={classes.cell}> Date Fin </TableCell>
                    <TableCell align="right" className={classes.cell}> Prix</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {abonnements.map((abonnement) => (
                    <TableRow
                      key={abonnement.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" className={classes.cell}>
                        {abonnement.abonnement.libelle}
                      </TableCell >
                      <TableCell align="right" className={classes.cell}>{abonnement.effectuerabonnementPK.dateDebutAbonnement}</TableCell>
                      <TableCell align="right" className={classes.cell}>{abonnement.dateFinAbonnement}</TableCell>
                      <TableCell align="right" className={classes.cell}>{abonnement.abonnement.prix}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> 
            <Button size="small" color="primary"  className={classes.button}>
                                        Modifier
            </Button>
        </div>
            
    )
}

export default componentName
