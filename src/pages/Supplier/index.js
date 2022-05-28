import "../../assets/css/datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserService from "../../services/userServices";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Button } from "antd";
import ListTable from "../../components/ListOrder";

const { Option } = Select;

//temporary data

const Supplier = () => {
  const [data2, setData2] = useState();
  const data = [
    {
      key: 1,
      supplier_name: "Nike Store",
      created: "2022-05-24",
      address: "Hà Nội",
      phone: "0987654321",
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
        },
      ],
    },
    {
      key: 2,
      supplier_name: "Nike Store",
      created: "2022-05-24",
      address: "Hà Nội",
      phone: "0834108518",
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
        },
      ],
    },
    {
      key: 3,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
    {
      key: 4,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
    {
      key: 5,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
    {
      key: 6,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
    {
      key: 7,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
    {
      key: 8,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
    {
      key: 9,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
    {
      key: 10,
      supplier_name: "Nike Store",
      created: "2022-05-24",
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
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        page: 1,
        limit: 5,
      };
      const result = await UserService.getUsers(params);
      console.log(result);

      setData2(
        result.data.map((item) => {
          return {
            ...item,
          };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <div className="main-wrapper">
      <div className="datatable">
        <div className="datatableTitle">
          Supplier Management
          <Link to="/add-product" className="_link">
            Add New
          </Link>
        </div>
        <div className="datatable-feature">
          <div className="feature-input">
            <h3>What are you looking for?</h3>
            <Input placeholder="default size" prefix={<SearchOutlined />} />
          </div>
          <div className="feature-select">
            <h3>Type?</h3>
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="feature-btn">
            <Button type="primary" icon={<SearchOutlined />} size="middle">
              Search
            </Button>
          </div>
        </div>
        <ListTable
          data={data}
          noName
          noStatus
          noPay
          noRec
          XAxis={0}
          noFixed
          noImg
          noOrder
        />
      </div>
    </div>
  );
};

export default Supplier;
