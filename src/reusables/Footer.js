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
const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Страницы</Heading>
			<FooterLink href="#">Главная</FooterLink>
			<FooterLink href="#">Меню</FooterLink>
			<FooterLink href="#">Рестораны</FooterLink>
            <FooterLink href="#">О нас</FooterLink>
			<FooterLink href="#">Сотрудничество</FooterLink>
		</Column>
		<Column>
			<Heading>Наши рестораны</Heading>
			<FooterLink href="#">Улица Алматы</FooterLink>
			<FooterLink href="#">Улица Алматы</FooterLink>
            <FooterLink href="#">Улица Алматы</FooterLink>
            <FooterLink href="#">Улица Алматы</FooterLink>
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
