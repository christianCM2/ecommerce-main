import React from "react";
import { getUsersList,CloseSidebar } from "../redux/actions/UsersActions";
import { useEffect } from "react";
import { Container, Row, TitlePrincipal ,widthFull,widthaside,ContainerPrincipal} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Price from '../aside/index'
import User from "../user/index";
export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsersCards = () => dispatch(getUsersList());
    getUsersCards();
  }, [dispatch]);
  const users = useSelector((state) => {
    return state.users.users;
  });
  const sidebar = useSelector((state) => {
    return state.users.sidebar;
  });

  return (
   
    <Container  >
      <ContainerPrincipal onClick={() =>   dispatch(CloseSidebar( ))} theme={ widthFull }>

      <TitlePrincipal>Usuarios</TitlePrincipal>
      <Row>
      {users && 
      users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </Row>
      </ContainerPrincipal>
     {sidebar&& <Price></Price>}
    </Container>
  );
}
