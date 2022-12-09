import styled from 'styled-components';

export const Box = styled.div`

background: black;
position: relative;
left:0;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
width:200px;
margin-bottom:50px

`;
export const Column2 = styled.div`
display: flex;

`;
export const Row = styled.div`
display: flex;
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
`;
