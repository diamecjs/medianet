import styled from "styled-components"


export const FooterContainer = styled.footer`
background-color: black; 

` 

export const FooterWrap = styled.div`
padding:48px 24px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
max-width:1100px;
margin:0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content:flex-start;

@media screen and (max-width:820px) {
padding-top:32px;
 justify-content: flex-start;
    
}

`


export const FooterLinksWrapper = styled.div`
display:flex;
float: left;
@media screen and (max-width:820px) {
  flex-direction:column;
}
justify-content: flex-start;
`

export const FooterLinkItems = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:160px;
box-sizing:border-box;
color:#fff;

@media screen and (max-width:420px) {
  margin:0;
  padding:10px;
  width:100%;
}
`

export const FooterLinkTitle = styled.h1`
font-size:14px;
margin-bottom:16px;
`

export const FooterLink = styled.p`
color:#fff;
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px; 

&:hover{
  color:#01bf71;
  transition:0.3s ease-out;
}
`