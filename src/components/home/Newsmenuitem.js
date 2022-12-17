import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  home_menu_item: {
    border: '2px solid #F2F2F2',
    width: '800px',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',
    // padding: '7px',
    display:'flex',
    marginTop: '50px',
    '@media (max-width: 800px)': {
     flexDirection:'column',
     width: '300px',
     
    },
    '@media (max-width: 500px)': {
      marginTop: '25px',
      marginLeft:'0px',
    },
  },
  img:{
       borderRadius: '10px',
         position:'relative',
         width: '300px',
         '@media (max-width: 800px)': {
          overflow:'hidden',
          width: '300px',
          height:'350px'
         }
  }

});

export default function Homemenuitem({
  image_path,
  title,
  sub_title,
  colories,
  id,
}) {
  const classes = useStyles();
  return (
    <div className={classes.home_menu_item}>
        
        <img className={classes.img} src={image_path} />
        <div style={{padding:'30px'}}>
      <Typography sx={{
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '0.7rem',
    },
    }} variant="h2" >
        {colories}
      </Typography>
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '1.5rem',
         fontWeight: 'bold',
         marginTop: '10px',
         color:'black',
         '@media (max-width: 900px)': {
          fontSize: '1rem',
        },
      }} 
      component={Link} to={`news/${id}`}
      >{title}</Typography>
  
      <Typography sx={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1rem',
        marginTop: '10px',
        fontWeight: 'bold',
        textAlign:'left',
        '@media (max-width: 900px)': {
          fontSize: '0.8rem',
        },
      }}variant="h2" component="h1">
        {sub_title}
      </Typography>
      </div>
    </div>
  );
}