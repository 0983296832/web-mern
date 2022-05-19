const ordersDB = require("../../models/order/orderModels");
const productsDB = require("../../models/product/product");
const usersDB = require("../../models/user/userModel");

const _ = require("lodash");

exports.order = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      return res
        .status(400)
        .json({ status: 400, message: "body can not be empty" });
    }
    const findByIdAndUpdateProduct = async (item) => {
      const product = await productsDB.findOne({
        product_code: item.product_code,
      });
      product.details.map(async (i) => {
        if (i.color === item.color && i.size === item.size) {
          const newItem = { ...item, quantity: i.quantity - item.quantity };
          await productsDB.updateOne(
            { product_code: item.product_code },
            { $pull: { details: i } }
          );
          await productsDB.updateOne(
            { product_code: item.product_code },
            { $push: { details: newItem } }
          );
        }
      });
    };
    Promise.all(
      req.body.details.map((item) => findByIdAndUpdateProduct(item))
    ).then(() => {
      console.log("order success");
    });

    const order = new ordersDB({
      details: req.body.details,
      user_name: req.body.user_name,
      state: req.body.state,
      address: req.body.address,
      phone: req.body.phone,
      payment_type: req.body.payment_type,
      shipping_unit: req.body.shipping_unit,
      shipping_fee: req.body.shipping_fee,
    });
    const savedOrder = await order.save();
    if (req.body.user_id) {
      console.log(req.body.user_id);
      usersDB.findById(req.body.user_id).then((result, err) => {
        if (err) {
          return res.status(500).json({
            success: "500",
            message: "can not find user",
          });
        } else {
          result.orders.push(savedOrder);
          result.save();
          return res.status(200).json({
            status: "200",
            message: "order successfully",
            data: savedOrder,
          });
        }
      });
    } else {
      return res.status(200).json({
        status: "200",
        message: "order successfully",
        data: savedOrder,
      });
    }
  } catch (error) {
    return res.status(400).json({ status: "400", message: error.message });
  }
};
