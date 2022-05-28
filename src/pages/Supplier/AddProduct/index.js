import { Button, Form, Input, InputNumber, Select } from "antd";
import Products from "../../../services/productServices";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
};
/* eslint-enable no-template-curly-in-string */

const AddProduct = () => {
  const onFinish = async (values) => {
    try {
      const data = await Products.addProduct(values);
    } catch (error) {
      
    }
    console.log(values);
  };

  return (
    <div>
      <div className="top">
        <h1>Add new product</h1>
      </div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["product", "product_code"]}
          label="Product Code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "supplier_name"]}
          label="Supplier Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "address"]}
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "phone"]}
          label="Phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "name"]}
          label="Product Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "price"]}
          label="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["product", "color"]}
          label="Color"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "gender"]}
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue="male"
            style={{
              width: 120,
            }}
          >
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["product", "category"]}
          label="Category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["product", "size"]}
          label="Size"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["product", "quantity"]}
          label="Quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Add new product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
