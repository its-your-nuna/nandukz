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
            }} component={NavLink} to={`/restorants/${data.id}`}>Улица Алматы</Link>
			
            ))}
            </Column>
		
		<Column>
			<Heading>Наши соцсети</Heading>
            <Column2>
			<FooterLink style={{marginRight:'20px'}} href="#">
			<IconBrandInstagram/>
			</FooterLink>
			<FooterLink style={{marginRight:'20px'}} href="#">
			<IconBrandWhatsapp/>
			</FooterLink>
			<FooterLink href="#">
			<IconBrandGmail/>
			</FooterLink>
            </Column2>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
