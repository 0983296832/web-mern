import axiosClient from "./axiosClient";
const Users = {
  getUsers: (params) => {
    const url = "/user/get-all";
    return axiosClient.get(url, { params });
  },
  uploadImage: (id, body) => {
    const url = `/user/upload/${id}`;
    return axiosClient.post(url, body);
  },
};

export default Users;
