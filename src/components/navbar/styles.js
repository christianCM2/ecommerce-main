import styled from "styled-components";

export const Nav = styled.header`
  color: white;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #004bb1;
  padding: 0 50px 0 30px;
  justify-content: space-between;
 
  @media (max-width: 518px) {
    padding: 0 10px 0 10px;
   }
`;

export const Count = styled.span`
  width: 17px;
  height: 17px;
  right: -10px;
  top: -8px;
  font-size: 10px;
  line-height: 10px;
  position: absolute;
  background-color: red;
  color: white;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const ContainerNotification = styled.div`
  position: relative;
`;

export const Icon = styled.span`
  color: white;
`;

export const ButtonGroup = styled.div`
  &:after{
    content: "";
    clear: both;
    display: table;
    background-color:red;
  }
`;
export const ButtonMenu = styled.button`
color: ${props => props.theme.fg};
border: 2px solid ${props => props.theme.fg};
background: ${props => props.theme.bg};
cursor:pointer;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
`;
export const theme = {
  fg: "#004bb1",
  bg: "#FFFF00"
};

 
export const invertTheme = 
  {
    fg:"#FFFF00",
    bg: "#004bb1"
  }
 
 

 
 