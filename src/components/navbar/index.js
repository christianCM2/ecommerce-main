import {
  Nav,
  theme,
  invertTheme,
  ButtonMenu,
  ButtonGroup,
  Icon,
} from "./styles";
import styled from 'styled-components'
import {Exit} from '@styled-icons/ionicons-outline/Exit'
import {fetchLogout} from '../redux/actions/LoginActions'
import { ChangeButtonMenu } from "../redux/actions/UsersActions";
import { useSelector, useDispatch } from "react-redux";
const RedExit = styled(Exit)`
  color: red;
  width:40px;
`
const Navbar = () => {
  const dispatch = useDispatch();
  const buttoncolor = useSelector((state) => {
    return state.users;
  });

  return (
    <Nav>
      <h1>Done</h1>
      <div>
        <ButtonMenu
          theme={buttoncolor.buttonselected}
          onClick={() => dispatch(ChangeButtonMenu(theme, invertTheme,false))}
        >
          Home{" "}
        </ButtonMenu>
        <ButtonMenu
          theme={buttoncolor.buttonse}
          onClick={() => dispatch(ChangeButtonMenu(invertTheme, theme,true))}
        >
          Album{" "}
        </ButtonMenu>
       <span onClick={() => dispatch(fetchLogout())}> < RedExit /></span>
      </div>
    </Nav>
  );
};
export default Navbar;
