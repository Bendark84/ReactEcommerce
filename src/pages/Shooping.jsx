import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteThunk } from '../store/slices/favorites.slice';

const Shooping = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoriteThunk());
  }, []);
  console.log(favorites);
  return (
    <div>
      <h1>Shooping</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.cart.products.map((product) => (
              <div key={product.id}>
                {product.title} <br />
                <strong>Brand: {product.brand} </strong>
                <br />
                <strong className="strong-price">
                  {' '}
                  Price: ${product.price} <br />{' '}
                </strong>
                <img src={product.productImgs} alt="" />
                {product.description}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shooping;
