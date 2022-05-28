import React from "react";
import "../../assets/css/datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Button } from "antd";

const { Option } = Select;

const productColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "product_code",
    headerName: "Product Code",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
        </div>
      );
    },
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "sales",
    headerName: "Sales",
    width: 100,
  },
  {
    field: "views",
    headerName: "Views",
    width: 100,
  },
];

//temporary data
const productRows = [
  {
    id: "3424a777-458b-4a61-90b0-2d3f974ba88b",
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 2,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 3,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 4,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 5,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 6,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 7,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 8,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 9,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
  {
    id: 10,
    product_code: "handjasiajs",
    name: "nike authentic",
    category: "nike",
    price: 2000,
    image: [
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ],
    gender: "men",
    sales: 100,
    views: 100,
  },
];
const ProductManagement = () => {
  const [data, setData] = useState(productRows);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const params = {
    //     page: 1,
    //     limit: 5,
    //   };
    //   const result = await UserService.getUsers(params);
    //   console.log(result);
    //   setData2(
    //     result.data.map((item) => {
    //       return {
    //         ...item,
    //       };
    //     })
    //   );
    // };
    // fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/product-detail" style={{ textDecoration: "none" }}>
              <div className="viewButton">View Detail</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="main-wrapper">
      <div className="datatable" style={{ height: "700px" }}>
        <div className="datatableTitle">Product Management</div>
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
        <DataGrid
          className="datagrid"
          rows={data}
          columns={productColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default ProductManagement;
