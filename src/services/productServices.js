import axiosClient from "./axiosClient";
const Products = {
  //   getUsers: (params) => {
  //     const url = "/user/get-all";
  //     return axiosClient.get(url, { params });
  //   },
  uploadImages: (id, body) => {
    const url = `/product/upload-image/${id}`;
    return axiosClient.put(url, body);
  },
  addProduct: (body) => {
    const url = `/product/import`;
    return axiosClient.put(url, body);
  },
};

export default Products;
