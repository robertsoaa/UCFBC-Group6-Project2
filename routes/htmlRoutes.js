var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome"
    });
  });

  // Load index page
  app.get("/index", function(req, res) {
    res.render("index", {
      msg: "its working"
    });
  });

  app.get("/admin", function(req, res) {
    res.render("admin", {
      msg: "admin route working"
    });
  });

  // Load example page and pass in an example by id
  app.get("/admin/:id", function(req, res) {
    db.VinylRecord.findOne({ where: { id: req.params.id } }).then(function(
      dbVinylRecord
    ) {
      res.render("admin", {
        VinylRecord: dbVinylRecord
      });
    });
  });

    // Load hiphop page
  app.get("/hiphop", function(req, res) {
    res.render("hiphop", {
      msg: "its working"
    });
  });

    // Load pop page
  app.get("/pop", function(req, res) {
    res.render("pop", {
      msg: "its working"
    });
  });

    // Load country page
  app.get("/country", function(req, res) {
    res.render("country", {
      msg: "its working"
    });
  });

    // Load rock page
  app.get("/rock", function(req, res) {
    res.render("rock", {
      msg: "its working"
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
