import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import newYear from "./images/newyear.jpg";
import GeriSayim from "./components/GeriSayim"


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${newYear})`,
    backgroundPosition: 'center',
    backgroundSize : 'cover',
    backgroundRepeat : 'no-repeat',
  }
}))
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
       <Container maxWidth="sm">
         <GeriSayim></GeriSayim>
       </Container>
    </div>
  );
}

export default App;
