import {
  Popconfirm,
  Table,
  Typography,
  Input,
  Form,
  InputNumber,
  Tooltip,
} from "antd";
import { useState } from "react";
import "../assets/css/list.css";
const ListTable = ({
  data,
  noName,
  noStatus,
  noPay,
  noRec,
  noSup,
  XAxis,
  noImg,
  noOrder,
}) => {
  const [editingKey, setEditingKey] = useState("");
  const [form] = Form.useForm();
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const isEditing = (record) => record.key === editingKey;
  const cancel = () => {
    setEditingKey("");
  };

  const edit = (record) => {
    form.setFieldsValue(record);

    setEditingKey(record.key);
  };
  const save = () => {
    console.log(form.getFieldValue());
    setEditingKey("");
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      fixed: "left",
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (address) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: "Name",
      dataIndex: "user_name",
      key: "user_name",
      fixed: "left",
      width: 150,
      editable: true,
      hidden: noName,
    },
    {
      title: "Supllier",
      dataIndex: "supplier_name",
      key: "supplier_name",
      fixed: "left",
      width: 150,
      editable: true,
      hidden: noSup,
    },
    {
      title: `${!noOrder ? "Order Date" : "Created"} `,
      dataIndex: "created",
      key: "created",
      width: 150,
      editable: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      editable: true,
      ellipsis: {
        showTitle: false,
      },
      render: (address) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 150,
      editable: true,
    },
    {
      title: "Payment Type",
      dataIndex: "payment_type",
      key: "payment_type",
      editable: true,
      hidden: noPay,
    },
    {
      title: "Recive Date",
      dataIndex: "receive_date",
      key: "receive_date",
      editable: true,
      hidden: noRec,
    },
    {
      title: "Status",
      dataIndex: "state",
      key: "state",
      fixed: "right",
      editable: true,
      hidden: noStatus,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
      fixed: "right",
      width: 150,
    },
  ].filter((column) => !column.hidden);

  const childrenColumns = [
    {
      title: "Product Code",
      dataIndex: "product_code",
      key: "product_code",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: () => {
        return (
          <img
            src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="product__img"
          />
        );
      },
      hidden: noImg,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      editable: true,
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      editable: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      editable: true,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      editable: true,
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      editable: true,
    },
  ].filter((column) => !column.hidden);

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <Form form={form} component={false}>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        style={{ padding: 10 }}
        className="box-shadow"
        columns={mergedColumns}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        expandable={{
          expandedRowRender: (record) => (
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              columns={childrenColumns}
              dataSource={record?.details}
              pagination={false}
            />
          ),
        }}
        scroll={{ x: XAxis }}
        dataSource={data}
      />
    </Form>
  );
};

export default ListTable;
