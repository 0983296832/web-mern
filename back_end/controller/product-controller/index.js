exports.getAll = (req, res) => {
  res.status(200).json({
    status: "200",
    message: "get all product successfully!",
    users: [],
  });
};
