import React from 'react';
import { connect } from 'dva';
import List from './List';

const Products = ({ dispatch, products }) => {
  const list = {
    products: products.list,
    onDelete(id) {
      dispatch({
        type: 'products/delete',
        payload: id,
      });
    }
  };
  return (
    <div>
      <h2>豆瓣电影列表</h2>
      <List {...list} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);