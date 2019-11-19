const mongoose = require("mongoose");

const Costumer = mongoose.model(
  "costumer",
  new mongoose.Schema(
    {
    first_name: String,
    surname: String,
    country: String,
    city: String,
    email: String,
    profession: String,
    cars: [
      {
        model: String,
        year: Number,
        price: Number
      },
      {
        model: String,
        year: Number,
        price: Number
      }
    ],
    bought: Date
  },
  {
    collection: "costumers"
  }
)
);

const getAll = () => {
  return new Promise((success, fail) => {
    Costumer.find({}, (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const getOne = id => {
  return new Promise((success, fail) => {
    Costumer.findById(id, (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const save = data => {
  return new Promise((success, fail) => {
    
    var c = new Costumer(data);
    c.save(data, err => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};
const remove = id => {
  return new Promise((success, fail) => {
    Costumer.deleteOne({ _id: id }, err => {
      
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};
const replace = (id, data) => {
  return new Promise((success, fail) => {
    Costumer.updateOne({ _id: id }, data, err => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};
module.exports = {
  getAll,
  getOne,
  save,
  remove,
  replace
};
