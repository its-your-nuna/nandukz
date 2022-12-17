import React from "react"
import {useParams} from "react-router-dom"
import data from '../utils/rest';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconBrandTiktok } from "@tabler/icons";

const useStyles = makeStyles((theme) => ({

    hmi_img_div: {
        width:'600px',
        border: '1px solid #F2F2F2',
        borderRadius: '10px',
        marginTop:'100px',
        // position: 'relative',
        // cursor: 'pointer',
        margin:'0 auto',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // padding: '7px',
        // marginRight: '20px',
        // marginTop: '20px',
        '@media (max-width: 900px)': {
          width:'400px',
          
        },
        '@media (max-width: 500px)': {
          width:'350px',
          
        },
      },
      about_image:{
        
        height: '350px',
        width: '350px',
        marginRight:'30px',
        '@media (max-width: 500px)': {
         width:'180px',
         height:'250px'
        },
      },
      about_image2:{
        overflow:'hidden',
        margin:'0 auto',
        height: '550px',
        width: '1000px',
        marginTop:'25px',
        '@media (max-width: 900px)': {
          width:'500px',
          height:'350px'
         },
        '@media (max-width: 500px)': {
         width:'250px',
         height:'200px'
        },
      },
      video:{
        margin:'0 auto',
        height: '550px',
        width: '1000px',
        marginTop:'25px',
        '@media (max-width: 900px)': {
          width:'500px',
          height:'350px'
         },
        '@media (max-width: 500px)': {
         width:'250px',
         height:'200px'
        },
      },
      hmi_img: {
       
        borderRadius: '10px',
        height: '300px',
        width: '600px',
        overflow:'hidden',
        paddingTop:'20px',
        paddingBottom:'20px',
        // '@media (max-width: 900px)': {
        //   width:'400px',
        //   height:'250px'
        // },
        // '@media (max-width: 500px)': {
        //   width:'350px',
          
        // },
      },
      all:{
        display:'flex',
        flexDirection:'column',
        marginTop:'100px'
      },
      about_section: {
        display: 'flex',
        flexDirection:'row',
        maxWidth:'1000px',
        justifyContent:'center',
        marginTop:'50px',
        margin:'0 auto',
        '@media (max-width: 500px)': {
          margin:'20px',
        },
      },
}))
function RestaurantDetails() {
    const {    
        about_section,
        all,
        about_image,
        about_image2,
        video
        
      } = useStyles();
    const {id} = useParams()
    const thisNews = data.find(res => res.id === id)
    return (
        <div className={all}>

<div className={about_section}>
<img  className={about_image}  src={thisNews.image_path}/>
            <Typography sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'grey',
              marginTop: '4px',
            }} variant="h2" >
        {thisNews.data}
      </Typography>
      <div>
      <Typography  sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginTop: '50px',
            textAlign:'center',
            color:'#202794',
            '@media (max-width: 900px)': {
              marginTop: '5px',
              fontSize: '1.2rem',
            },
      }} >{thisNews.title}</Typography>
      
        <Typography sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '5px',
      }} variant="h2" >
        {thisNews.time[0]}{thisNews.time[1]}
      </Typography>
      <Typography  sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '5px',
      }} variant="h2" >
        {thisNews.address[0]}{thisNews.address[1]}
      </Typography>
      <Typography  sx={{
         fontFamily: 'Inter, sans-serif',
         fontSize: '0.8rem',
         fontWeight: 'bold',
         marginTop: '5px',
      }} variant="h2" >
        {thisNews.phone[0]}{thisNews.phone[1]}
      </Typography>
      <div>
        <a href="
https://instagram.com/nandu_kz?igshid=NDk5N2NlZjQ="><InstagramIcon sx={{ marginRight:'20px',color:'#E1306C'}}/></a>
       <a href="
https://vm.tiktok.com/ZMFpLDjpP/"><TikTokIcon sx={{ marginRight:'20px',color:'#black'}}/></a> 
        {/* <FacebookIcon sx={{color:'#4267B2'}}/> */}
      </div>
      </div>
      
            {/* <Typography sx={{
               fontFamily: 'Inter, sans-serif',
               color:'grey',
               fontSize: '1rem',
               fontWeight: 'bold',
               marginTop: '2px',
            }} variant="h2" component="h1">
        {thisNews.sub_title}
      </Typography> */}
            {/* <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p> */}
        </div>
        <Typography  sx={{
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
      }} >Картинки</Typography>
      <img  className={about_image2}  src={thisNews.image_path2}/>
      <Typography  sx={{
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
      }} >Видео-обзор</Typography>
       <iframe className={video} src={thisNews.tube}>
        </iframe> 
     
        </div>
    )
        }
        const TikTokIcon = ({ color = "#000000" }) => {
          return (
            <svg
              fill={color}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25px"
              height="25px"
            >
              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
            </svg>
          );
        };

export default RestaurantDetails