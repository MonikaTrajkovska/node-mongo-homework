const mCostumers = require("../models/costumers");

const getAll = (req, res) => {
  mCostumers
    .getAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getOne = (req, res) => {
  mCostumers
    .getOne(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const save = (req, res) => {
  var data = req.body;
  let er = 0;
  if (data.first_name == undefined || data.first_name.length == 0) {
    er++;
  }
  if (data.surname == undefined || data.surname.length == 0) {
    er++;
  }
  if (data.country== undefined || data.country.length == 0) {
    er++;
  }
  if (data.city == undefined || data.city.length == 0) {
    er++;
  }
  if (data.email == undefined || data.email.length == 0) {
    er++;
  }
  if (data.profession == undefined || data.profession.length ==0) {
    er++;
  }
  if (data.cars == undefined || data.cars.length ==0) {
    er++;
  }
  if (data.bought == undefined || data.bought.length ==0) {
    er++;
  }
  if (er == 0) {
    mCostumers.save(data).then(() => {
      res
        .status(201)
        .send("Created")
        .catch(err => {
          res.status(500).send(err);
        });
    });
  }
  mCostumers
    .save(data)
    .then(() => {
      res.status(200).send("Created");
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const remove = (req, res) => {
  mCostumers
    .remove(req.params.id) 
    .then(() => {
      res.status(204).send();
    })
    .catch(err => {
      res.status(500).send(err);
    });
  
};
const replace = (req, res) => {
  var data = req.body;
  let er = 0;
  if (data.first_name == undefined || data.first_name.length == 0) {
    er++;
  }
  if (data.surname == undefined || data.surname.length == 0) {
    er++;
  }
  if (data.country== undefined || data.country.length == 0) {
    er++;
  }
  if (data.city == undefined || data.city.length == 0) {
    er++;
  }
  if (data.email == undefined || data.email.length == 0) {
    er++;
  }
  if (data.profession == undefined || data.profession.length ==0) {
    er++;
  }
  if (data.cars == undefined || data.cars.length ==0) {
    er++;
  }
  if (data.bought == undefined || data.bought.length ==0) {
    er++;
  }
  if (er == 0) {
    mCostumers
      .replace(req.params.id, data)
      .then(() => {
        res.status(204).send();
      })
      .catch(err => {
        res.status(500).send(err);
      });
    //res.send("OK");
  } else {
    res.status(400).send("Bad request");
  }
};
const update = (req, res) => {
  var data = req.body;

  mCostumers
    .replace(req.params.id, data)
    .then(() => {
      res.status(204).send();
    })
    .catch(err => {
      res.status(500).send(err);
    });
  //res.send("OK");
};
module.exports = {
  getAll,
  getOne,
  save,
  replace,
  update,
  remove
};
