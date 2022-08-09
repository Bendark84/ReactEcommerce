import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteThunk } from '../store/slices/favorites.slice';

const Shooping = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoriteThunk());
  }, []);

  return (
    <div>
      <h1>Shooping</h1>
      <ul>
        {favorites.map((favorite) => (
          <li>{favorite.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Shooping;
