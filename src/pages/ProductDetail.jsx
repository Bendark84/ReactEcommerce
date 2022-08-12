import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductThunk } from '../store/slices/product.slice';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { addCartThunk } from '../store/slices/cart.slice';

const ProductDetail = () => {
  const allProducts = useSelector((state) => state.product);
  const [productDetail, setProductDetail] = useState({});
  const [suggestedProduct, setSuggestedProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shoopCart, setShoopCart] = useState('');

  useEffect(() => {
    const product = allProducts.find(
      (productItem) => productItem.id === Number(id)
    );
    setProductDetail(product);

    const filteredProduct = allProducts.filter(
      (productItem) => productItem.category.id === product.category.id
    );
    setSuggestedProduct(filteredProduct);
  }, [allProducts, id]);

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const addShoop = () => {
    alert('Agregar al carrito ');
    const shoop = {
      id: productDetail.id,
      quantity: shoopCart.quantity,
    };
    dispatch(addCartThunk(shoop));
    console.log(shoop);
  };

  return (
    <div className="container-detail">
      <h1>Product Details</h1>

      <div>
        <h5>Shooping cart </h5>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="cantidad"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={shoopCart}
            onChange={(e) => setShoopCart(e.target.value)}
          />
          <Button
            onClick={addShoop}
            variant="outline-secondary"
            id="button-addon2"
          >
            Shoop
          </Button>
        </InputGroup>
      </div>
      <div className="product-Detail">
        <h2>{productDetail?.title}</h2>
        <h2>
          {' '}
          <strong>${productDetail?.price} </strong>
        </h2>
        <img src={productDetail?.productImgs} alt="" />
        <h2 className="description">{productDetail?.description}</h2>

        <ul>
          {suggestedProduct.map((product) => (
            <li
              onClick={() => navigate(`/product/${product.id}`)}
              key={product.id}
            >
              {product.title}

              {/* <img
                className="img-product-detail"
                src={product.productImgs}
                alt=""
              /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
