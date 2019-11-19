const express = require("express");
const bodyParser = require("body-parser"); 
const config = require("./config/index.js");
const DBconn = require("./db/connection"); 
const costumers= require("./handlers/costumers");

var c = config.getConfig("db");
// console.log(c);

DBconn.init(c); 
const api = express(); 

api.use(bodyParser.json());

api.get("/api/v1/costumers", costumers.getAll); 
api.get("/api/v1/costumers/:id", costumers.getOne);
api.post("/api/v1/costumers", costumers.save);
api.put("/api/v1/costumers/:id", costumers.replace);
api.patch("/api/v1/costumers/:id", costumers.update);
api.delete("/api/v1/costumers/:id", costumers.remove);

api.listen(8080, err => {
  if (err) {
    console.log("could not start server");
    return;
  }
  console.log("server started successfully on port 8080");
});
