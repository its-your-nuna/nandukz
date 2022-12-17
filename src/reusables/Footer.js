import React from "react";
import {
Container,
Row,
Column,
Column2,
FooterLink,
Heading,
} from "./FooterStyles";
import { IconBrandGmail, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons';
import { Box} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import menudata from '../utils/rest';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = ( ) => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Страницы</Heading>
			<Link style={{
                fontFamily: 'Inter, sans-serif',
                color:'black',
                
                marginTop: '10px',
                textDecoration:'none'
            }} component={NavLink} to="/">Главная</Link>
			<Link style={{
                fontFamily: 'Inter, sans-serif',
                color:'black',
                
                marginTop: '10px',
                textDecoration:'none'
            }} component={NavLink} to="/allmeals">Меню</Link>
			<Link style={{
                fontFamily: 'Inter, sans-serif',
                color:'black',
                
                marginTop: '10px',
                textDecoration:'none'
            }} component={NavLink} to href="/restorants">Рестораны</Link>
            <Link style={{
                fontFamily: 'Inter, sans-serif',
                color:'black',
                
                marginTop: '10px',
                textDecoration:'none'
            }} component={NavLink} to="/about">О нас</Link>
			<Link style={{
                fontFamily: 'Inter, sans-serif',
                color:'black',
                
                marginTop: '10px',
                textDecoration:'none'
            }} component={NavLink} to="/form">Сотрудничество</Link>
		</Column>
        <Column>
			<Heading>Наши рестораны</Heading>
        {menudata.map((data, index) => (

			<Link style={{
                fontFamily: 'Inter, sans-serif',
                color:'black',
                marginTop: '10px',
                textDecoration:'none'
            }} component={NavLink} to={`/restorants/${data.id}`}>{data.title}</Link>
			
            ))}
            </Column>
		
		<Column>
			<Heading>Наши соцсети</Heading>
            <Column2>
			<FooterLink style={{marginRight:'20px'}} href="#">
			<a href="
https://instagram.com/nandu_kz?igshid=NDk5N2NlZjQ="><InstagramIcon sx={{ marginRight:'20px',color:'#E1306C'}}/></a>
       
			</FooterLink>
			<FooterLink style={{marginRight:'20px'}} href="#">
			<a href="
https://vm.tiktok.com/ZMFpLDjpP/"><TikTokIcon sx={{ marginRight:'20px',color:'#black'}}/></a> 
			</FooterLink>
			{/* <FooterLink href="#">
			<IconBrandGmail/>
			</FooterLink> */}
            </Column2>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
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
export default Footer;
