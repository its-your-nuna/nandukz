import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  // header: {
  //   backgroundColor: '#400CCC',
  //   paddingRight: '79px',
  //   paddingLeft: '118px',
  //   '@media (max-width: 900px)': {
  //     paddingLeft: 0,
  //   },
  // },
  leaderBoard: {
    textAlign:'center',
    display: 'flex',
    // paddingRight: '79px',
    // paddingLeft: '118px',
    marginTop:'80px',
    color:'white',
    background: "linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url('index5.jpeg')",
    backgroundRepeat: 'no-repeat',
  
    backgroundPosition: 'center',
    width:'100vw',
    height: '50vh',
    backgroundSize: 'cover',

    '@media (max-width: 900px)': {
      height: '30vh',
      // paddingLeft: '20px',
      // paddingRight: '0px',
      // backgroundPosition: 'center',
    },
    
  },
  leaderBoard_left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  leaderBoard_left_h1: {
    
    fontFamily: 'Inter, sans-serif',
    fontSize: '5rem',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '4rem',
    },
    '@media (max-width: 500px)': {
      fontSize: '3rem',
    },
  },
  leaderBoard_left_p: {
    fontFamily: 'Inter, sans-serif',
    marginTop: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '1.2rem',
    },
  },
  // button: {
  //   borderRadius: '20px',
  //   width: '150px',
  //   marginTop: '30px',
  //   textTransform: 'lowercase',
  // },
  // quicktip: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   width: 'max-content',
  //   '@media (max-width: 400px)': {
  //     marginTop: '20px',
  //   },
  // },
  // quicktip_text: {
  //   fontSize: '0.9rem',
  //   lineHeight: '17px',
  //   fontFamily: 'Inter, sans-serif',
  //   marginLeft: '7px',
  // },
  // quickTip_container: {
  //   display: 'flex',
  //   gap: '20px',
  //   marginTop: '100px',
  //   flexWrap: 'wrap',
  //   '@media (max-width: 400px)': {
  //     gap: '0px',
  //   },
  // },
}));

export default function LeaderBoard() {
  const classes= useStyles();
 

  return (
    <div>
      <div className={classes.leaderBoard}>
        <div className={classes.leaderBoard_left}>
          <Typography
            sx = {{
              fontFamily: 'Inter, sans-serif',
              fontSize: '3rem',
              fontWeight: 'bold',
              '@media (max-width: 900px)': {
                fontSize: '2.2rem',
              },
              '@media (max-width: 500px)': {
                fontSize: '1.5rem',
              },
            }}
            variant="h2"
            component="h1"
          >
            Дорогие гости, мы ждем вас! <br /> 
          </Typography>
          <Typography sx={{
             fontFamily: 'Inter, sans-serif',
             marginTop: '20px',
             fontSize: '1.5rem',
             fontWeight: 'bold',
             '@media (max-width: 900px)': {
               fontSize: '1rem',
             },
             '@media (max-width: 500px)': {
              fontSize: '1rem',
            },
          }} component="p">
            Казахстанский бренд. От  создателей Gippo и Basilic, сеть корейского стрит-фуда «Nandu». 
          </Typography>
        
        </div>
       
      </div>
    </div>
  );
}