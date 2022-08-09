import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductThunk } from '../store/slices/product.slice';

const ProductDetail = () => {
  const allProducts = useSelector((state) => state.product);
  const [productDetail, setProductDetail] = useState({});
  const [suggestedProduct, setSuggestedProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div className="container-detail">
      <h1>Product Details</h1>
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
