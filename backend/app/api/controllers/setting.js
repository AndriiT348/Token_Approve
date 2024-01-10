const walletModel = require("../models/setting");

module.exports = {
  getAll: async function (req, res, next) {
    let walletInfo = await walletModel.find();
    res.status(200).json({ message: null, data: walletInfo });
  },
  getFilter: async function (req, res, next) {
    const filter = req.body;
    let walletInfo = await walletModel.find(filter);
    res.status(200).json({ message: null, data: walletInfo });
  },
  getById: function (req, res, next) {
    walletModel.findById(req.params.id, function (err, walletInfo) {
      if (err) {
        res.status(404).json({ message: "Wallet info not found", data: null });
      } else {
        res.status(200).json({ message: null, data: walletInfo });
      }
    });
  },
  updateById: function (req, res, next) {
    const walletInfo = req.body;
    walletModel.findByIdAndUpdate(req.params.id, walletInfo, function (
      err,
      walletInfo
    ) {
      if (err) res.status(400).json({ message: "Update failed", data: null });
      else {
        res
          .status(200)
          .json({ message: "Wallet info updated successfully!", data: walletInfo });
      }
    });
  },
  deleteById: function (req, res, next) {
    walletModel.findByIdAndRemove(req.params.id, function (err, walletInfo) {
      if (err) res.status(400).json({ message: "Delete failed", data: null });
      else {
        res.status(200).json({ message: "Wallet info deleted successfully!", data: null });
      }
    });
  },
};
