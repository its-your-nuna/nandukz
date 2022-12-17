import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Homemenuitem from '../components/home/Newsmenuitem';
import menudata from '../utils/rest';

const useStyles = makeStyles((theme) => ({
  homemenu: {
    //padding: '50px 0px',
    // paddingBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 500px)': {
      // padding: '50px 0px',
    },
  },
  home_menu_item: {
    width:'300px',
    margin:'30px',
    padding: '50px 10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    // paddingBottom: '50px',
    borderRadius: '10px',
    border: '1px solid #202794',
   
  },
  leaderBoard_left_h1: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginTop: '50px',
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },
  },
  hmi_food_title: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '15px',
    color:'#202794',
    // width:'300px',
   
    '@media (max-width: 900px)': {
      fontSize: '1.7rem',
    },
    
    },
  hmi_food_subtitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '2px',
  },
  homemenu_menu: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  homemenu_explore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homemenu_data: {
    marginTop:'100px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
   
    '@media (max-width: 500px)': {
      paddingTop: '0px',
    },
  },
  button: {
    borderRadius: '20px',
    fontWeight: 'bold',
    width: '170px',
    marginTop: '25px',
    fontSize: '1.2rem',
    textTransform: 'lowercase',
    background: 'white',
    border: '1px solid grey',
    '&:hover': {
      background: 'white',
      color:'#202794'
    },
  },
}));

export default function Restaurant() {
  const {
    leaderBoard_left_h1,
    homemenu_menu,
    homemenu_explore,
    homemenu,
    button,
    homemenu_data,
  } = useStyles();
  return (
    <div className={homemenu}>
     

      <div className={homemenu_data}>
        {menudata.map((data, index) => (
          <RestaurantItem key={index} {...data} />
        ))}
      </div>



      
    </div>
  );
}
function RestaurantItem({
  id,
  title,
  description,
  time,
  address,
  phone
}){
  const {
    leaderBoard_left_h1,
    home_menu_item,
    button,
    hmi_img,
    hmi_img_div,
    hmi_food_title,
    hmi_food_subtitle,
    hmi_food_colories,
    cart_button,
    lower_div,
    hmi_food_price,
  } = useStyles();
  return (
    <div className={home_menu_item}>
      <Typography sx={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginTop: '15px',
        color:'#202794',
        // width:'300px',
       
        '@media (max-width: 900px)': {
          fontSize: '1rem',
        },
      }}  >{title}</Typography>
  
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '10px',
      }} variant="h2" component="h1">
        {description}
      </Typography>
      <div style={{display:'flex'}}>
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '0px',
         marginRight:'10px'
      }} variant="h2" >
        {time[0]}
      </Typography>
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '5px',
      }} variant="h2" >
        {time[1]}
      </Typography>
      </div>
      <div style={{display:'flex'}}>
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '0px',
         marginRight:'10px'
      }} variant="h2" >
        {address[0]}
      </Typography>
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '5px',
      }} variant="h2" >
        {address[1]}
      </Typography>
      </div>
      <div style={{display:'flex'}}>
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '0px',
         marginRight:'10px'
      }} variant="h2" >
        {phone[0]}
      </Typography>
      <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '5px',
      }} variant="h2" >
        {phone[1]}
      </Typography>
      </div>
      <Button
        disableElevation
        sx={{
            borderRadius: '10px',
            width: '150px',
            marginTop: '25px',
            fontSize: '0.8rem',
            textTransform: 'lowercase',
            background: 'white',
            border: '1px solid #202794',
            color:'#202794'
          }
        }
        component={Link}
        to={`/restorants/${id}`}
      >
         Подробнее
      </Button>
      </div>
    
  );
}