import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const List = ({ onDelete, products }) => {
  const columns = [{
    title: '名称',
    dataIndex: 'title',
  },{
    title: '类型',
    dataIndex: 'genres',
  },{
    title: '票房',
    dataIndex: 'collect_count',
  },{
    title: '图片',
    render: (text, record) => {
      return (
        <img width="50" src={record.images.small} />
      );
    },
  }, {
    title: '操作',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>删除</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey={products => products.id}
    />
  );
};

List.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default List;