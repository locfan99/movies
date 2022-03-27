import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import { Input } from "antd";
import { Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { LAY_DANH_SACH_PHIM_API } from "../redux/types/QuanLyPhimTypes";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { history } from "../App";
const { Search } = Input;
export default function Films() {
  const { dsPhim } = useSelector((state) => state.QuanLyPhimReducer);
  console.log(dsPhim);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LAY_DANH_SACH_PHIM_API });
  }, []);
  const columns = [
    {
      width: 130,
      title: "Mã Phim",
      dataIndex: "maPhim",
      sortDirections: ['descend', 'ascend'],
      sorter: {
        compare: (a, b) => a.maPhim - b.maPhim,
        multiple: 1,
      },
    },
    {
      title: "Hình ảnh",
      width: 130,
      dataIndex: "hinhAnh",
      render: (text, films) => {
        return (
          <Fragment>
            <img style={{ width: 60 }} src={text} />
          </Fragment>
        );
      },
    },
    {
      title: "Tên phim",
      width: 230,
      dataIndex: "tenPhim",
      sortDirections: ['descend', 'ascend'],
      sorter: {
        compare: (a, b) => {
          let tpA = a.tenPhim.toLowerCase().trim();
          let tpB = b.tenPhim.toLowerCase().trim();
          if (tpA > tpB) {
            return 1;
          }
          return -1;
        },
      },
    },
    {
      title: "Mô tả",
      dataIndex: "maTa",
      render: (text, films) => {
        return (
          <Fragment>
            {films.moTa.length > 200
              ? films.moTa.substr(0, 200) + "..."
              : films.moTa}
          </Fragment>
        );
      },
    },
    {
      title: "Edit",
      width: 130,
      dataIndex: "hinhAnh",
      render: (text, films) => {
        return (
          <Fragment>
            <Link key={1} className="edit " to={`/admin/films/edit/${films.maPhim}`}>
              <EditOutlined />
            </Link>

            <span className="edit delete"
            onClick={()=>{
              if(window.confirm('ban co muon xoa phim' + films.tenPhim)){
                let maPhim = films.maPhim
                dispatch({type:'XOA_PHIM',maPhim})
              }
            }}>
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const onSearch = (value) => {
    dispatch({
      type:LAY_DANH_SACH_PHIM_API,tenPhim:value
    })
  };

  return (
    <div>
      <h3>Quản lý phim </h3>{" "}
      <Button onClick={()=>{
        history.push('/admin/films/addPhim')
      }} type="primary">Thêm phim</Button>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ marginBottom: 10,marginTop:10 }}
      />
      <Table rowKey={'maPhim'} columns={columns} dataSource={dsPhim} onChange={onChange} />;
    </div>
  );
}
