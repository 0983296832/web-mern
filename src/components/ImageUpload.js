import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
import _ from "lodash";
import Products from "../services/productServices";

const ImgUpload = ({ disable }) => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const upload = async () => {
    const formData = new FormData();
    _.forEach(fileList, (file) => {
      formData.append("image", file.originFileObj);
    });

    const data = await Products.uploadImages(
      "6287a69d7ff2ad32976c9f41",
      formData
    );
    console.log(data);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div>
      <ImgCrop rotate>
        <Upload
          beforeUpload={() => false}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          disabled={disable}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default ImgUpload;
