var db = require("../models");

module.exports = function(app) {
// =================================================================
// Get all Vinyl Records
// =================================================================
  app.get("/api/allInventory", function(req, res) {
    console.log("we're inside apiRoutes all inventory route");
    db.inventory.findAll({}).then(function(dbVinylRecord) {
      console.log("inside Find All");
      res.json(dbVinylRecord);
    });
  });

  // =================================================================
// Get all hiphop Vinyl Records
// =================================================================
app.get("/api/hiphopInventory", function(req, res) {
  db.inventory.findAll({where: {genre: "HipHop"}}).then(function(dbVinylRecord) {
    res.json(dbVinylRecord);
  });
});

// =================================================================
// Get all pop Vinyl Records
// =================================================================
app.get("/api/popInventory", function(req, res) {
  db.inventory.findAll({where: {genre: "Pop"}}).then(function(dbVinylRecord) {
    res.json(dbVinylRecord);
  });
});
// =================================================================
// Get all country Vinyl Records
// =================================================================
app.get("/api/countryInventory", function(req, res) {
  db.inventory.findAll({where: {genre: "Country"}}).then(function(dbVinylRecord) {
    res.json(dbVinylRecord);
  });
});
// =================================================================
// Get all rock Vinyl Records
// =================================================================
app.get("/api/rockInventory", function(req, res) {
  db.inventory.findAll({where: {genre: "Rock"}}).then(function(dbVinylRecord) {
    res.json(dbVinylRecord);
  });
});

// =================================================================
// Update a Vinyl Record by its ID
// =================================================================
app.put("/api/vinylStock/:id", function(req, res) {
  console.log("inside PUT");
  db.inventory.update({stock : req.body.stock},{
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.render("dashboard");
    });
});



// =================================================================
// Create a new Vinyl Records
// =================================================================  
  app.post("/api/vinylrecord", function(req, res) {
    db.VinylRecord.create(req.body).then(function(dbVinylRecord) {
      res.json(dbVinylRecord);
    });
  });

// =================================================================
// Delete a Vinyl Record by its ID
// =================================================================
  app.delete("/api/vinylrecord/:id", function(req, res) {
    db.VinylRecord.destroy({ where: { id: req.params.id } }).then(function(dbVinylRecord) {
      res.json(dbVinylRecord);
    });
  });


};