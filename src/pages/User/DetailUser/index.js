import { Card } from "antd";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import "../../../assets/css/infor.css";
import ChartComponent from "../../../components/ChartComponent";
import ListTable from "../../../components/ListOrder";

const DetailUser = () => {
  const data = [
    {
      key: 1,
      user_name: "le van binh",
      created: "2022-05-24",
      state: "đang đợi gói hàng",
      address: "Hà Nội",
      phone: "0987654321",
      payment_type: "online",
      id: "6285685bb65ca2b076d5fe",
      details: [
        {
          key: 11,
          id: "6285685bb65ca2b076d5fe",
          product_code: "Nike1778598ava",
          name: "nike authentic",
          price: "2000",
          color: "blue",
          category: "nike",
          quantity: 1,
          size: "XL",
          image: "jkashkasfasf",
        },
        {
          key: 12,
          id: "6285685bb65ca2b076d5fe",
          product_code: "Nike1778598avac",
          name: "nike authentic",
          price: "2000",
          color: "red",
          category: "nike",
          quantity: 2,
          size: "L",
          image: "jkashkasfasf",
        },
      ],
    },
    {
      key: 2,
      user_name: "le van binh",
      created: "2022-05-24",
      state: "đang đợi gói hàng",
      address: "Hà Nội",
      phone: "0",
      payment_type: "online",
      id: "628d15685bca2b076d5fe",
      details: [
        {
          key: 21,
          id: "628d15685bca2b076d5fe",
          product_code: "Nike1778598ava",
          name: "nike authentic",
          price: "2000",
          color: "blue",
          category: "nike",
          quantity: 1,
          size: "XL",
          image: "jkashkasfasf",
        },
        {
          id: "628d15685bca2b076d5fe",
          product_code: "Nike1778598avac",
          name: "nike authentic",
          price: "2000",
          color: "red",
          category: "nike",
          quantity: 2,
          size: "L",
          image: "jkashkasfasf",
        },
      ],
    },
    {
      key: 3,
      user_name: "le van binh",
      created: "2022-05-24",
      state: "đang đợi gói hàng",
      address: "Hà Nội",
      phone: "0",
      payment_type: "online",
      id: "628d15685bb65cb076d5fe",
      details: [
        {
          key: 31,
          id: "628d15685bb65cb076d5fe",
          product_code: "Nike1778598ava",
          name: "nike authentic",
          price: "2000",
          color: "blue",
          category: "nike",
          quantity: 1,
          size: "XL",
          image: "jkashkasfasf",
        },
        {
          key: 32,
          id: "628d15685bb65cb076d5fe",
          product_code: "Nike1778598avac",
          name: "nike authentic",
          price: "2000",
          color: "red",
          category: "nike",
          quantity: 2,
          size: "L",
          image: "jkashkasfasf",
        },
      ],
    },
    {
      key: 4,
      user_name: "le van binh",
      created: "2022-05-24",
      state: "đang đợi gói hàng",
      address: "Hà Nội",
      phone: "0",
      payment_type: "online",
      id: "628d15685bb65ca2b06d5fe",
      details: [
        {
          key: 41,
          id: "628d15685bb65ca2b06d5fe",
          product_code: "Nike1778598ava",
          name: "nike authentic",
          price: "2000",
          color: "blue",
          category: "nike",
          quantity: 1,
          size: "XL",
          image: "jkashkasfasf",
        },
        {
          key: 42,
          id: "628d15685bb65ca2b06d5fe",
          product_code: "Nike1778598avac",
          name: "nike authentic",
          price: "2000",
          color: "red",
          category: "nike",
          quantity: 2,
          size: "L",
          image: "jkashkasfasf",
        },
      ],
    },
    {
      key: 5,
      user_name: "le van binh",
      created: "2022-05-24",
      state: "đang đợi gói hàng",
      address: "Hà Nội",
      phone: "0",
      payment_type: "online",
      id: "628d15685bb65ca2b065fe",
      details: [
        {
          key: 51,
          id: "628d15685bb65ca2b06d5fe",
          product_code: "Nike1778598ava",
          name: "nike authentic",
          price: "2000",
          color: "blue",
          category: "nike",
          quantity: 1,
          size: "XL",
          image: "jkashkasfasf",
        },
        {
          key: 52,
          id: "628d15685bb65ca2b06d5fe",
          product_code: "Nike1778598avac",
          name: "nike authentic",
          price: "2000",
          color: "red",
          category: "nike",
          quantity: 2,
          size: "L",
          image: "jkashkasfasf",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="home__revenue">
        <Card
          size="small"
          title="Information"
          extra={<AiOutlineEdit className="progress-icon" />}
          headStyle={{ color: "gray" }}
          style={{
            width: 370,
            boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
            borderRadius: "8px",
          }}
          bordered={false}
        >
          <div className="info__item">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="info__img"
            />
            <div className="info__details">
              <h1 className="info__title">Jane Doe</h1>
              <div className="info__details-item">
                <span className="details__item-key">Full name:</span>
                <span className="details__item-value">jane doe</span>
              </div>
              <div className="info__details-item">
                <span className="details__item-key">Email:</span>
                <span className="details__item-value">janedoe@gmail.com</span>
              </div>
              <div className="info__details-item">
                <span className="details__item-key">Birth:</span>
                <span className="details__item-value">19/10/1999</span>
              </div>
              <div className="info__details-item">
                <span className="details__item-key">Phone:</span>
                <span className="details__item-value">+1 2345 67 89</span>
              </div>
              <div className="info__details-item">
                <span className="details__item-key">Address:</span>
                <span className="details__item-value">
                  Elton St. 234 Garden Yd. NewYork
                </span>
              </div>
              <div className="info__details-item">
                <span className="details__item-key">Gender:</span>
                <span className="details__item-value">Male</span>
              </div>
            </div>
          </div>
        </Card>
        <div className="revenue__chart">
          <ChartComponent title="Last 6 Months (Revenue)" aspect={3 / 1} />
        </div>
      </div>
      <div style={{ width: 1115 }}>
        <h1 className="trans">Transactions</h1>
        <ListTable data={data} noSup XAxis={1500} />
      </div>
    </div>
  );
};

export default DetailUser;
