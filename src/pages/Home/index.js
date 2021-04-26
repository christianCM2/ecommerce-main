import Navbar from "../../components/navbar/index.js";
import Main from "../../components/main/index.js";
import Basket from "../../components/price/index.js";
import data from "../../data";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsList,
  getProductsCart,
} from "../../components/redux/actions/HomeActions";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = () => dispatch(getProductsList(data));
    getProducts();
  }, [dispatch]);

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = productscart.find((x) => x.id === product.id);
    if (exist) {
      dispatch(
        getProductsCart(
          productscart.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        )
      );
    } else {
      dispatch(getProductsCart([...productscart, { ...product, qty: 1 }]));
    }
  };
  const onRemove = (product) => {
    const exist = productscart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      dispatch(
        getProductsCart(productscart.filter((x) => x.id !== product.id))
      );
    } else {
      dispatch(
        getProductsCart(
          productscart.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        )
      );
    }
  };
  const onDeleteItem = (product) => {
    dispatch(getProductsCart(productscart.filter((x) => x.id !== product.id)));
  };
  const products = useSelector((state) => {
    return state.products;
  });
  const productscart = useSelector((state) => {
    return state.products.cartproducts;
  });

  return (
    <div>
      <Navbar countCartItems={productscart.length}></Navbar>
      <Container>
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={productscart}
          onAdd={onAdd}
          onDeleteItem={onDeleteItem}
          onRemove={onRemove}
        ></Basket>
      </Container>
    </div>
  );
};

export default Home;
