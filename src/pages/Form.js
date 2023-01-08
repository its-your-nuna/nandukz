import * as React from "react";
import { useRef } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import emailjs from '@emailjs/browser';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography  from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Alert from './Alert'
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
export default function SignIn( {handleShow,setMessage}) {
  const {
    about_section,
  
} = useStyles();
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  var name = document.getElementById('name').value?true:false
  var birthday = document.getElementById('birthday').value?true:false
  var address = document.getElementById('address').value?true:false
  var city = document.getElementById('city').value?true:false
  var education = document.getElementById('education').value?true:false
  var job = document.getElementById('job').value?true:false
  var phone = document.getElementById('phone').value?true:false
  var current = document.getElementById('current').value?true:false
  var experience = document.getElementById('experience').value?true:false
  var choose = document.getElementById('choose').value?true:false
  var buis = document.getElementById('buis').value?true:false
  var partner = document.getElementById('partner').value?true:false
  console.log((name))
  if(name&birthday&address&city&education&job&phone&current&experience&choose&buis&partner){
  emailjs.sendForm('service_un71iy5', 'template_gerbghg', form.current, 'rkVj5zaNn98UBEEJJ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current.reset();
    setMessage('Ваше сообщение успешно доставлено!')
  }
  else{
    setMessage('Пожалуйста, заполните все поля')
  }
};

  return (
    <>
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
              onClick={handleShow}
            >
              Отправить
            </Button>
            </Box>
            </Box>
      </Container>
      </>
  );
}




