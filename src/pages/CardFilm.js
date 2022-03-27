import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
export default function CardFilm(props) {
  const { item } = props;
  return (
    <Link to={`detail/${item.maPhim}`} itemPhim={item} >
      <Card
        hoverable
        style={{ width: 250, margin: 50, height: 400, overflow: "hidden",background:'#E8E8E8' }}
        cover={
          <img
            style={{
              width: 200,
              height: "200px",
              overflow: "hidden",
              margin: "0 auto",
            }}
            alt="example"
            src={item.hinhAnh}
          />
        }
      >
        <Meta 
          title={item.tenPhim}
          description={
            item.moTa.length > 100 ? item.moTa.slice(0, 100) + "..." : item.moTa
          }
        />
      </Card>
    </Link>
  );
}
