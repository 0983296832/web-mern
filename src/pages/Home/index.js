import React from "react";
import "../../assets/css/home.css";
import Wigget from "../../components/Wigget";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import "react-circular-progressbar/dist/styles.css";
import Progress from "./Progress";
import ChartComponent from "../../components/ChartComponent";
import TableList from "./Table";

const Home = () => {
  const data = [
    {
      title: "Users",
      number: 500,
      isMoney: false,
      rate: "0.5%",
      isNegative: true,
      link: "See all users",
      path: "/users",
      icon: (
        <FaRegUser
          className="wigget__icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
    },
    {
      title: "Orders",
      number: 500,
      isMoney: false,
      rate: "0.5%",
      isNegative: true,
      link: "View all orders",
      path: "/users",
      icon: (
        <AiOutlineShoppingCart
          className="wigget__icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      ),
    },
    {
      title: "Revenue",
      number: 500,
      isMoney: true,
      rate: "0.5%",
      isNegative: true,
      link: "See all users",
      path: "/users",
      icon: (
        <MdAttachMoney
          className="wigget__icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      ),
    },
    {
      title: "Earnings",
      number: 500,
      isMoney: true,
      rate: "0.5%",
      isNegative: true,
      link: "View net earnings",
      path: "/users",
      icon: (
        <BsCoin
          className="wigget__icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      ),
    },
  ];
  return (
    <div className="home__wrapper">
      <div className="home__wigget">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Wigget data={item} />
            </div>
          );
        })}
      </div>
      <div className="home__revenue">
        <Progress />
        <div className="revenue__chart">
          <ChartComponent title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
      <h1 className="trans">Last Five Transactions</h1>
      <div className="table">
        <TableList />
      </div>
    </div>
  );
};

export default Home;
