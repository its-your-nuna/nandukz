import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Alert from './Alert'
import Form from './Form';
import { useState } from 'react';
const useStyles = makeStyles(() => ({
    
    about_section: {
        display: 'flex',
        flexDirection:'row',
        maxWidth:'1000px',
        justifyContent:'center',
        
        margin:'0 auto',
        '@media (max-width: 500px)': {
          margin:'20px',
        },
      },
      about_image:{
        
        height: '350px',
        width: '450px',
        objectFit:'contain',
        '@media (max-width: 900px)': {
         width:'350px',
         height:'250px'
        },
        '@media (max-width: 500px)': {
          width:'200px',
          height:'250px'
         },
      },
    
      about_descriptions: {
        margin:'0 auto',
        fontFamily: 'Inter, sans-serif',
      
        fontSize: '2rem',
        marginTop: '25px',
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
          fontSize: '1.5rem',
        },
        '@media (max-width: 500px)': {
          fontSize: '1.2rem',
        },
        
      },
     all:{
       display:'flex',
        flexDirection:'column',
        marginTop:'50px'
     },
  
  images:{
    // objectFit:'contain',
    width:'60vw',
    height:'500px',
    marginTop:'50px',
    margin:'0 auto',
    '@media (max-width: 1500px)': {
      width:'80vw',
      height:'300px'
    },
    '@media (max-width: 900px)': {
      width:'80vw',
      height:'300px'
    },
    '@media (max-width: 500px)': {
      width:'80vw',
      height:'250px'
    }
  },
  
 

}));


export default function AboutSection() {
    const {
        about_section,
       
        images,
        about_image,
        about_descriptions,
        all
    } = useStyles();
    const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
    return (
      <>
        <Alert show={show} setShow={setShow}/>
        <div className={all}>
       
          {/* <div className={about_section}>
        <img className={about_image}  src='image9.png'/>
        <div>  
        <Typography 
         sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginTop: '50px',
            textAlign:'center',
            color:'#202794',
            '@media (max-width: 500px)': {
              marginTop: '25px',
              fontSize: '0.9rem',
            },
          }}
        >СОТРУДНИЧЕСТВО </Typography>        
        <Typography 
        
        sx = {{margin:'0 auto',
        fontFamily: 'Inter, sans-serif',
      
        fontSize: '1rem',
        marginTop: '25px',
        fontWeight: 'bold',
        marginLeft:'50px',
       
        '@media (max-width: 500px)': {
          marginLeft:'0px',
          fontSize: '0.75rem',
        },}}
        component="p">
        Вам интересно сотрудничество с нами?
        <br/>
        Отправьте ваши предложения и мы обязательно рассмотрим ваши предложения!
          </Typography>  
        </div>
        </div> */}
        <div className={about_section}>
        <div >         
        <Typography 
         sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginTop: '50px',
            textAlign:'center',
            color:'#202794',
            '@media (max-width: 500px)': {
              marginTop: '25px',
              fontSize: '0.9rem',
            },
          }}
        > ФРАНШИЗА </Typography>  
         <Typography 
          sx = {{margin:'0 auto',
          fontFamily: 'Inter, sans-serif',
          marginRight:'50px',
          fontSize: '1rem',
          marginTop: '25px',
          fontWeight: 'bold',
         
          '@media (max-width: 500px)': {
            marginRight:'0px',
            fontSize: '0.75rem',
          },}}
         component="p">
         Мы ищем сильных партнёров с кем мы можем вместе рости, зарабатывать и поднимать экономику нашей родины Казахстан. 
          </Typography>  
        </div>
        <img className={about_image}  src='image10.png'/>
         </div>
         <Typography
         sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginTop: '50px',
          textAlign:'center',
          color:'#202794',
          '@media (max-width: 500px)': {
            marginTop: '25px',
            fontSize: '1.2rem',
          },
        }}
         component="h1">
         Оставьте заявку
          </Typography>
          <Form handleShow={handleShow}/>
      </div>
      </>
    );
  }