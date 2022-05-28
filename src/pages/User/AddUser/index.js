import React, { useState } from "react";
import "../../../assets/css/form.css";
import { AiFillCamera } from "react-icons/ai";
import { DatePicker, Radio } from "antd";

const AddUser = () => {
  const [file, setFile] = useState("");
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeGender = (e) => {
    console.log("radio checked", e.target.value);
  };
  const onChangeRole = (e) => {
    console.log("radio checked", e.target.value);
  };
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div className="formInput upload-btn">
              <label htmlFor="file">
                <AiFillCamera className="upload__icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>User name</label>
                <input type="text" placeholder="User Name" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="User" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="Email" />
              </div>
              <div className="formInput date-picker">
                <label style={{ paddingBottom: 5 }}>Birth</label>
                <DatePicker
                  onChange={onChangeDate}
                  style={{
                    width: 280,
                    padding: 5,
                    height: 30,
                  }}
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Address" />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="formInput">
                <label>Gender</label>
                <Radio.Group
                  onChange={onChangeGender}
                  value={1}
                  style={{ display: "flex" }}
                >
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
              </div>
              <div className="formInput">
                <label>Role</label>
                <Radio.Group
                  onChange={onChangeRole}
                  value={1}
                  style={{ display: "flex" }}
                >
                  <Radio value={1}>Admin</Radio>
                  <Radio value={2}>User</Radio>
                </Radio.Group>
              </div>

              <button className="send__btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
