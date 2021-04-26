import {
  TitleProduct,
  ButtonProducts,
  ImgProduct,
  PriceProduct,
  Containercards,
} from "./styles";
import {  getUser,getPostsById,getAlbumsById } from '../redux/actions/UsersActions';
import { useDispatch } from "react-redux";
const User = (props) => {
  const dispatch = useDispatch();
 const {user} = props

  return (
    <Containercards onClick={() => { dispatch(getAlbumsById(user.id)); dispatch(getUser(user.id));dispatch(getPostsById(user.id));}}>
      <ImgProduct src={user.avatar} alt={user.first_name} />
      <TitleProduct>{user.first_name} {user.last_name}</TitleProduct>
      <PriceProduct>{user.email}</PriceProduct>
    </Containercards>
  );
};
export default User;
