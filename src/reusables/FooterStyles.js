import styled from 'styled-components';

export const Box = styled.div`

background: black;
position: relative;
left:0;
bottom: 0;
width: 100%;

`;

export const Container = styled.div`
	
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
max-width:200px;
margin:50px 5px 10px 5px;
@media only screen and (max-width: 600px) {
	max-width:110px;
	font-size: .75rem;
  }
`;
export const Column2 = styled.div`
display: flex;

`;
export const Row = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;

`;

export const FooterLink = styled.a`
font-family: Inter, sans-serif;
color:black;

margin-top: 10px;
text-decoration:none;

`;

export const Heading = styled.p`
font-family: Inter, sans-serif;
font-size: 1rem;
color: black;
margin-bottom: 40px;
font-weight: bold;
@media only screen and (max-width: 600px) {
	font-size: .85rem;
	margin-bottom: 20px;
  }
`;
