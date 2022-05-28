import React, { useState } from "react";
import { Button, Input, InputNumber } from "antd";
import "../../../assets/css/product-detail.css";
import ImgUpload from "../../../components/ImageUpload";

import _ from "lodash";
import ChartComponent from "../../../components/ChartComponent";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const ProductDetail = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="detail-container">
      <div className="revenue__chart" style={{ width: "100%", height: "auto" }}>
        <ChartComponent title="Last 6 Months (Revenue)" aspect={3 / 1} />
      </div>
      <div className="top">
        <h1>Detail product</h1>
      </div>
      <div className="center">
        <div className="detail-left">
          <div className="formInput-product">
            <label>Product Code</label>
            <Input placeholder="Basic usage" disabled />
          </div>
          <div className="formInput-product">
            <label>Name</label>
            <Input placeholder="Basic usage" disabled />
          </div>
          <div className="formInput-product">
            <label>Category</label>
            <Input placeholder="Basic usage" disabled />
          </div>
          <div className="formInput-product">
            <label>Description</label>
            <TextArea
              maxLength={100}
              style={{
                height: 100,
              }}
              placeholder="textarea with clear icon"
              allowClear
              disabled={disabled}
            />
          </div>
          <div className="formInput-product short-input">
            <label>Views</label>
            <Input placeholder="Basic usage" disabled />
          </div>
        </div>
        <div className="detail-right">
          <div className="image-product">
            <label>Image</label>
            <ImgUpload disable={disabled} />
          </div>
          <div className="formInput-product short-input">
            <label>Gender</label>
            <Input placeholder="Basic usage" disabled />
          </div>
          <div className="formInput-product">
            <label>Created</label>
            <Input placeholder="Basic usage" disabled />
          </div>
          <div className="formInput-product">
            <label>Discount</label>
            <InputNumber placeholder="Basic usage" disabled={disabled} />
          </div>
          <div className="formInput-product">
            <label>Supplier</label>
            <Input placeholder="Basic usage" disabled />
          </div>
        </div>
      </div>
      <div className="center-div">
        {!disabled ? (
          <Button
            className="icon-btn"
            type="primary"
            icon={<SaveOutlined />}
            onClick={() => setDisabled(!disabled)}
          >
            Save
          </Button>
        ) : (
          <Button
            className="icon-btn"
            type="primary"
            icon={<EditOutlined />}
            onClick={() => setDisabled(!disabled)}
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
