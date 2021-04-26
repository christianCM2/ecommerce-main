import styled from "styled-components";

export const Container = styled.main`

  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 95%;
  margin:auto;
  margin: 1rem auto;
  flex: 1;
  display: flex;
  align-items: stretch;
  @media (max-width: 518px) {
   flex-direction:column-reverse
  }
`;
 

 
export const ContainerPrincipal = styled.div`
width: ${props => props.theme.fg};

`;
export const widthFull = 
  {
    fg:"100%",
    
  }
  export const widthaside = 
  {
    fg:"80%",
    
  }
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TitlePrincipal = styled.h2`
width:50%;
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: #100880;
`;
