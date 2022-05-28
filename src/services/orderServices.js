import axiosClient from "./axiosClient";
const Orders = {
  getOrder: (params) => {
    const url = "/order/get-all";
    return axiosClient.get(
      url,
      { params },
      
      
    );
  },
};

export default Orders;
