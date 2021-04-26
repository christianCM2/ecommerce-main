import {
  ContainerLogin,
  ButtonLogin,
  ContainerInputs,
  InputLogin,
  TitleLogin,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {getLogin} from '../redux/actions/LoginActions'
import { useForm } from "react-hook-form";
const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
 
  const onSubmit = async (data) => {
 

    await  dispatch(getLogin(data))
  };
  return (
    <ContainerLogin>
      <ContainerInputs>
        <TitleLogin>Bienvenido</TitleLogin>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLogin
            type="text"
            name="email"
            id="email"
            placeholder="Correo"
            style={{ border: errors.email ? "1px solid red" : "" }}
            {...register("email", { required: true })}
          />
          <InputLogin
            type="password"
            placeholder="Password"
            name="password"
            style={{ border: errors.password ? "1px solid red" : "" }}
            {...register("password", { required: true })}
          />

          <ButtonLogin type="submit" id="login-button">
            Login
          </ButtonLogin>
        </form>
      </ContainerInputs>
    </ContainerLogin>
  );
};
export default Login;
