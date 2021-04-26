import styled from "styled-components";

export const ContainerLogin = styled.div`
  background: #1045F4;
  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;

`;
export const ContainerInputs = styled.div`
max-height: 70%;
min-height:50%;
background:white;
transition: 0.5s ease;
border-radius: 0;
display: flex;
align-items: center;

flex-direction: column;
transform: perspective(3em) ;
padding: 20px;
box-shadow: 3px 3px rgba(143, 143, 143, 0.75), -1em 0 0.4em #100880;
border-color: darken(#ffc107, 0%);
transform: perspective(0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);

`;
export const TitleLogin = styled.h1`
  font-size: 40px;
  transition-duration: 1s;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  color: #1045F4;
`;
export const InputLogin = styled.input`

display: block;
outline: 0;
width: 250px;
color:white
height:17px;
padding: 10px 15px;
margin: 0 auto 30px auto;
text-align: center;
font-size: 18px;
transition-duration: 0.25s;
font-weight: 300;
&:hover{
    background-color: fade(#f53135, 40%);
    background: fade(#f53135, 40%);
    color:  #1045F4;
    border:2px solid #1045F4;
    border-radius:20px;
}

&:focus{
    background-color: white;
    width: 270px;
    color:  #1045F4;
    border:2px solid #1045F4;
    border-radius:20px;
}

`;
export const ButtonLogin = styled.button`
min-width: 100%;
margin-top:50px;
min-height: 1.5rem;
font-family: "Open Sans", sans-serif;
font-size: 1.1rem;
text-transform: uppercase;
letter-spacing: 1.3px;
font-weight: 700;
color: #313133;
background: #4fd1c5;
background: linear-gradient(
  90deg,
  rgba(129, 230, 217, 1) 0%,
  rgba(79, 209, 197, 1) 100%
);
border: none;
border-radius: 1000px;
box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
transition: all 0.3s ease-in-out 0s;
cursor: pointer;
outline: none;
position: relative;
padding: 10px;
&::before {
  content: "";
  border-radius: 1000px;
  min-width: calc(95% + 12px);
  min-height: calc(2rem + 12px);
  border: 6px solid #00ffcb;
  box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}
&:hover {
  color: #313133;
  transform: translateY(-6px);
}
&:hover::before {
  opacity: 1;
}
&::after {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 6px solid #00ffcb;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 5s infinite;
}
&:hover::after {
  animation: none;
  display: none;
}
@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 300px;
    opacity: 0;
  }
}
`;
