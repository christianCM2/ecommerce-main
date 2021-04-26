import React from "react";
import { useEffect } from "react";
import {
  Aside,
  ButtonLogin,
  InputLogin,
  ContainerPosts,
  TitlePrincipal,
  ContainerEditUser,
} from "./styles";
import { useForm } from "react-hook-form";
import {
  TitleProduct,
  ButtonProducts,
  ImgProduct,
  PriceProduct,
  Containercards,
} from "../user/styles";
import { PutUsers } from "../redux/actions/UsersActions";
import { useSelector, useDispatch } from "react-redux";
export default function Basket() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const postsuser = useSelector((state) => {
    return state.users.posts;
  });
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => {
    return state.users.user;
  });
  const home = useSelector((state) => {
    return state.users.home;
  });

  const albums = useSelector((state) => {
    return state.users.albums;
  });
  useEffect(() => {
    if (userinfo) {
      reset({
        name: `${userinfo.first_name} ${userinfo.last_name}`,
        email: userinfo.email,
      });
    } else {
      return;
    }
  }, [userinfo]);

  const onSubmit = async (data) => {
    let palabras = data.name.split(" ");
    let json = {
      first_name: palabras[0],
      last_name: palabras[1],
      email: data.email,
    };

    await dispatch(PutUsers(userinfo.id, json));
  };
  return (
    <Aside>
      <ContainerEditUser>
        {home === true ? (
          <>
            <TitlePrincipal>Usuario</TitlePrincipal>

            <ImgProduct src={userinfo.avatar} alt={userinfo.first_name} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputLogin
                type="text"
                name="name"
                id="name"
                placeholder="Nombre y Apellido paterno"
                style={{ border: errors.name ? "1px solid red" : "" }}
                {...register("name", { required: true })}
              />
              <InputLogin
                type="email"
                placeholder="email"
                name="email"
                style={{ border: errors.email ? "1px solid red" : "" }}
                {...register("email", { required: true })}
              />

              <ButtonLogin type="submit">GUARDAR</ButtonLogin>
            </form>
            <div>
              <ContainerPosts>
                {postsuser && postsuser.map((post) => <li>{post.title}</li>)}
              </ContainerPosts>
            </div>
          </>
        ) : (
          <ContainerPosts>
            {albums && albums.map((album) => <li>{album.title}</li>)}
          </ContainerPosts>
        )}
      </ContainerEditUser>
    </Aside>
  );
}
