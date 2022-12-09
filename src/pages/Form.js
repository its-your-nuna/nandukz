import * as React from "react";
import { useRef } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import emailjs from '@emailjs/browser';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography  from '@mui/material/Typography';
import Input from '@mui/material/Input';
import { makeStyles } from '@mui/styles';
const theme = createTheme();
const useStyles = makeStyles(() => ({
  about_section: {
    borderRadius: '10px',
    background:'rgba(211,211,211, 0.8)',
    marginTop: '50px',
    paddingBottom:'25px'
  },
  about_descriptions: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },
  },

}));
export default function SignIn() {
  const {
    about_section,
    leaderBoard_left_h1,
    
    images,
    about_image,
    about_descriptions,
    all
} = useStyles();
const form = useRef();
const form2 = document.getElementById('form');
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_wovvjsn', 'template_gerbghg', form.current, 'rkVj5zaNn98UBEEJJ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
    form2.reset();
};
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("name"),
      password: data.get("birthday")
    });
  };

  return (
    <>
{/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

      <Container className={about_section}  width="450px">
       
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
           <Typography 
           sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginTop: '25px',
            textAlign:'center',
            color:'#202794',
            '@media (max-width: 500px)': {
              marginTop: '0px',
              fontSize: '1.2rem',
            },
          }}
           component="p">
            Личные данные
          </Typography>
          <Box
            ref={form}
            component="form"
            onSubmit={sendEmail}
            noValidate
            sx={{ mt: 1 }}
            id="form"
          >
            {/* <input type="text" name="name" /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ФИО"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="birthday"
              label="Дата рождения"
              name="birthday"
              autoComplete="email"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Контактные данные"
              name="phone"
              autoComplete="phone"
              autoFocus
              sx={{
                background:'white',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Город проживания"
              name="address"
              autoComplete="address"
              autoFocus
              sx={{
                background:'white',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="Город, в котором планируете открыть Nandu"
              name="city"
              autoComplete="city"
              autoFocus
              sx={{
                background:'white',
              }}
            />
           
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
           component="p">
           Образование и профессиональный опыт
          </Typography>
         
            <TextField
              margin="normal"
              required
              fullWidth
              id="education"
              label="Образование и профессиональный опыт"
              name="education"
              autoComplete="education"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="job"
              label="В каких сферах работали и/или каким бизнесом управляли?"
              name="job"
              autoComplete="job"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="current"
              label="Чем занимаетесь на данный момент?"
              name="current"
              autoComplete="current"
              autoFocus
              sx={{
                background:'white',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="experience"
              label="Расскажите про ваш опыт в бизнесе или карьере"
              name="experience"
              autoComplete="experience"
              autoFocus
              sx={{
                background:'white',
              }}
            />
           
            
          
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
           component="p">
            О франшизе
          </Typography>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="choose"
              label="У вас есть опыт работы в сфере общепита?"
              name="choose"
              autoComplete="choose"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="buis"
              label="Почему вас заинтересовала именно наша франшиза?"
              name="buis"
              autoComplete="buis"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="partner"
              label="Планируете ли привлекать партнера для открытия филиала?"
              name="partner"
              autoComplete="partner"
              autoFocus
              sx={{
                background:'white',
                
              }}
            />  
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{  width:'200px',marginTop:'50px'}}
            >
              Отправить
            </Button>
            </Box>
            </Box>
      </Container>
      </>
  );
}