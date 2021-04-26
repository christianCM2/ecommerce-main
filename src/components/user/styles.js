import styled from "styled-components";

export const TitleProduct = styled.h3`
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
`;
export const PriceProduct = styled.h3`
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
`;

export const ImgProduct = styled.img`
  max-height: 8rem;
  border-radius:50%;
`;

export const ButtonProduct = styled.div`
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  padding: 0.3rem;

  border-radius: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.4rem;
  background-color: #e307dc;
  color: white;
  width: 100%;
  cursor: pointer;
`;

export const Containercards = styled.div`
  height: 100%;
  transition: 0.5s ease;
  border-radius: 0;
  display: flex;
  width: 13rem;
  margin:0 20px 20px 20px;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: perspective(3em) rotateX(0deg) rotateY(-1.175deg) rotateZ(-1deg);
  padding: 20px;
  &:hover {
    cursor:pointer;
    box-shadow: 3px 3px rgba(143, 143, 143, 0.75), -1em 0 0.4em #100880;
    border-color: darken(#ffc107, 0%);
    transform: perspective(0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  @media (max-width: 715px) {
    width: 10rem;
    margin:auto;
  }
`;

export const Containercard = styled.p`
  width: 25%;
`;
export const Headercard = styled.div`
  border-radius: 0;
  transition: fill 0.5s ease;
`;
