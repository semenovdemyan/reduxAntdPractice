// src/components/Table.tsx
import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Post } from '../../types'; // Сюда можно вынести типы, если они общие для всего проекта

interface TableProps {
  columns: ColumnsType<Post>;
  dataSource: Post[];
  loading: boolean;
  currentPage: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

export const PostsTable: React.FC<TableProps> = ({
  columns,
  dataSource,
  loading,
  currentPage,
  pageSize,
  total,
  onPageChange,
}) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      // rowKey="id"
      loading={loading}
      pagination={{
        current: currentPage,
        pageSize: pageSize,
        total: total,
        onChange: onPageChange,
        showSizeChanger: false,
      }}
    />
  );
};
