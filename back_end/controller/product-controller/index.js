const productsDB = require("../../models/product/product");
const _ = require("lodash");
const cloudinary = require("../../helper/cloudinaryConfig");
const productImage = require("../../models/product/productImage");
const commentDB = require("../../models/product/commentModel");
const suppliersDB = require("../../models/product/supplierModel");

exports.getAll = async (req, res) => {
  const products = await productsDB.find();
  return res.status(200).json({
    status: "200",
    message: "get all product successfully!",
    products: products,
  });
};

exports.create = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      return res
        .status(400)
        .json({ status: "400", message: "body can not be empty" });
    }
    const product = await productsDB.findOne({
      product_code: req.body.product_code,
    });
    if (product) {
      return res
        .status(400)
        .json({ status: "400", message: "product does exist" });
    }
    const newProduct = new productsDB({
      product_code: req.body.product_code,
      name: req.body.name,
      price: req.body.price,
    });
    const savedProduct = await newProduct.save();
    return res.status(200).json({
      status: "200",
      message: "product saved successfully",
      data: savedProduct,
    });
  } catch (error) {
    return res.status(400).json({ status: "400", message: error.message });
  }
};

exports.uploadProductImage = async (req, res) => {
  try {
    if (_.isEmpty(req.files)) {
      return res
        .status(400)
        .json({ status: "400", message: "body can not be empty" });
    }
    const productExists = await productsDB.findById(req.params.id);
    if (!productExists) {
      return res
        .status(400)
        .json({ status: "400", message: "product not found" });
    }

    const uploads = async (path) => {
      if (!path) return;
      const newPath = await cloudinary.uploader.upload(path);
      let newImage = new productImage({
        product_id: req.params.id,
        imageUrl: newPath.url,
        public_id: newPath.public_id,
      });
      // Save img
      const result = await newImage.save();
      return result;
    };

    let urls = [];
    const files = req.files;
    Promise.all(files.map((file) => uploads(file.path)))
      .then((values) => {
        urls = values;
        return urls;
      })
      .then((urls) =>
        productsDB.findOne({ _id: req.params.id }).then((result, err) => {
          if (err) {
            return res.status(500).json({
              status: "500",
              message: "can not find product",
            });
          } else {
            urls.map((url) => {
              result.image.push(url);
            });
            result.save();
            return res
              .status(200)
              .json({ status: "200", message: "images saved" });
          }
        })
      );
  } catch (error) {
    return res.status(400).json({ status: "400", message: error.message });
  }
};

exports.comment = async (req, res) => {
  console.log(productsDB);
  try {
    if (_.isEmpty(req.body)) {
      res
        .status(400)
        .json({ status: 400, message: "content can not be empty" });
    }
    const comment = new commentDB({
      name: req.body.name,
      author_id: req.params.id,
      content: req.body.content,
    });
    const commentSaved = await comment.save();
    productsDB.findById(req.params.id, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: "false",
          message: "can not find product",
        });
      } else {
        console.log(result.comments);
        result.comments.push(commentSaved);
        result.save();
      }
    });
    return res.status(200).json({
      status: "200",
      message: "comment success",
      comment: commentSaved,
    });
  } catch (error) {
    res.status(400).json({ status: "200", message: error.message });
  }
};

exports.importProduct = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      res
        .status(400)
        .json({ status: 400, message: "content can not be empty" });
    }
    const existProduct = await productsDB.findOne({
      product_code: req.body.product_code,
    });
    if (existProduct) {
      const newProductImport = new suppliersDB({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        product_code: req.body.product_code,
        price: req.body.price,
        color: req.body.color,
        category: req.body.category,
        quantity: req.body.quantity,
        size: req.body.size,
      });
      const savedProductImport = await newProductImport.save();
      const { price, color, category, quantity, size } = savedProductImport;
      console.log(existProduct.details);
      const existColor = existProduct.details.find(
        (item) => item.color === color
      );
      let newDetails;
      if (existColor) {
        newDetails = existProduct.details.map((item) => {
          if (item.color === color) {
            return {
              ...item,
              quantity: item.quantity + quantity,
              size: [item.size, size],
            };
          } else {
            return item;
          }
        });
      } else {
        newDetails = [
          ...existProduct.details,
          { price, color, category, quantity, size },
        ];
      }

      productsDB
        .findOne({ product_code: req.body.product_code })
        .then((result, err) => {
          if (result) {
            result.supplier.push(savedProductImport);
            result.save();
          } else {
            return res
              .status(400)
              .json({ status: "400", message: err.message });
          }
        });
      const product = await productsDB.updateOne(
        {
          product_code: req.body.product_code,
        },
        { details: newDetails },
        { new: true }
      );
      return res.status(200).json({
        status: "200",
        message: "Product import successfully",
        data: product,
      });
    }
    const newProductImport = new suppliersDB({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      product_code: req.body.product_code,
      price: req.body.price,
      color: req.body.color,
      category: req.body.category,
      quantity: req.body.quantity,
      size: req.body.size,
    });
    const newProduct = new productsDB({
      product_code: req.body.product_code,
      name: req.body.name,
    });
    await newProduct.save();
    const savedProductImport = await newProductImport.save();
    const { price, color, category, quantity, size } = savedProductImport;
    productsDB
      .findOne({ product_code: req.body.product_code })
      .then((result, err) => {
        if (result) {
          result.details.push({ price, color, category, quantity, size });
          result.supplier.push(savedProductImport);
          result.save();
          res.status(200).json({ status: "200", message: result });
        } else {
          res.status(400).json({ status: "400", message: err.message });
        }
      });
  } catch (error) {
    res.status(400).json({ status: "400", message: error.message });
  }
};
