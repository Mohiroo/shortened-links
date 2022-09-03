import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import "./LinksTable.css";

interface DataType {
  key: React.Key;
  linkName: string;
  originalLink: number;
  squeezedLink: number;
  statistics: number;
}

const LinksTable = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Название ссылки",
      dataIndex: "linkName",
    },
    {
      title: "Исходная ссылка",
      dataIndex: "originalLink",
      sorter: {
        compare: (a, b) => a.originalLink - b.originalLink,
        multiple: 3,
      },
    },
    {
      title: "Короткая ссылка",
      dataIndex: "squeezedLink",
      sorter: {
        compare: (a, b) => a.squeezedLink - b.squeezedLink,
        multiple: 2,
      },
    },
    {
      title: "Переходы по короткой ссылке",
      dataIndex: "statistics",
      sorter: {
        compare: (a, b) => a.statistics - b.statistics,
        multiple: 1,
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      linkName: "John Brown",
      originalLink: 98,
      squeezedLink: 60,
      statistics: 70,
    },
    {
      key: "2",
      linkName: "Jim Green",
      originalLink: 98,
      squeezedLink: 66,
      statistics: 89,
    },
    {
      key: "3",
      linkName: "Joe Black",
      originalLink: 98,
      squeezedLink: 90,
      statistics: 70,
    },
    {
      key: "4",
      linkName: "Jim Red",
      originalLink: 88,
      squeezedLink: 99,
      statistics: 89,
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <h1>Ваши ссылки</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default LinksTable;
