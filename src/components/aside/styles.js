import styled from "styled-components";

export const Aside = styled.aside`
  flex: 1;
  margin-left: 1.5rem;

  background-color: #e0e0e0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 518px) {
    margin-left: 0.5rem;
   }
`;

export const TitlePrincipal = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: #100880;
`;
export const ContainerEditUser = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 715px) {
    width: 15rem;
  }
`;
export const InputLogin = styled.input`

display: block;
outline: 0;
width: 250px;
color:white
height:17px;
padding: 10px 15px;
margin: 20px auto 30px auto;
text-align: center;
font-size: 18px;
transition-duration: 0.25s;
font-weight: 300;
border:2px solid #1045F4;
border-radius:20px;
background-color: fade(#f53135, 40%);
background: fade(#f53135, 40%);
color:  #1045F4;
@media (max-width: 715px) {
  width: 15rem;
  width: 200px;
}
 

`;
export const ContainerPosts = styled.ol`
counter-reset: gradient-counter;
list-style: none;
width:15rem;
margin: 1.75rem 0;
padding: 1rem 2rem;
> li {
  background: white;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
  counter-increment: gradient-counter;
  margin-top: 1rem;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  &::before,
  &::after {
    background: linear-gradient(135deg, #83e4e2 0%,#a2ed56 100%);
    border-radius: 1rem 1rem 0 1rem;
    content: '';
    height: 3rem;
    left: -1rem;
    overflow: hidden;
    position: absolute;
    top: -1rem;
    width: 3rem;
  }
  &::before {
    align-items: flex-end;
    box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
    content: counter(gradient-counter);
    color: #1d1f20;
    display: flex;
    font: 900 1.5em/1 'Montserrat';
    justify-content: flex-end;
    padding: 0.125em 0.25em;
    z-index: 1;
  }
  @for $i from 1 through 5 {
    &:nth-child(10n+#{$i}):before {
      background: linear-gradient(135deg, rgba(#a2ed56, $i * 0.2) 0%,rgba(#fddc32, $i * 0.2) 100%);
    }
  }
  @for $i from 6 through 10 {
    &:nth-child(10n+#{$i}):before {
      background: linear-gradient(135deg, rgba(#a2ed56, 1 - (($i - 5) * 0.2)) 0%,rgba(#fddc32, 1 - (($i - 5) * 0.2)) 100%);
    }
  }
  + li {
    margin-top: 2rem;
  }
}
`

export const ButtonLogin = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 285px;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  color: rgb(106, 163, 137);
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
  padding: 1em 2em;
  border: 2px solid rgb(106, 163, 137);
  border-radius: 1em;
  background: rgb(205, 255, 232);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  &::before {
    position: absolute;
    content: "";
    width: 280px;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(150, 232, 195);
    border-radius: inherit;
    box-shadow: 0 0 0 2px rgb(121, 186, 156), 0 0.75em 0 0 rgb(106, 163, 137);
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
  }
  &:hover {
    background: rgb(187, 232, 211);
    transform: translate(0, 0.375em);
  }
  &:hover::before {
    transform: translate3d(0, 0.75em, -1em);
  }
  &:active {
    transform: translate(0em, 0.75em);
  }
  &:active::before {
    transform: translate3d(0, 0, -1em);

    box-shadow: 0 0 0 2px rgb(121, 186, 156), 0 0.25em 0 0 rgb(121, 186, 156);
  }

  @media (max-width: 715px) {
    width: 240px;
    &::before {
       
      width: 235px;
    }
  }
`;
