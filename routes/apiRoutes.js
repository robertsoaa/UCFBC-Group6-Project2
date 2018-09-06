var db = require("../models");

module.exports = function(app) {
// =================================================================
// Get all Vinyl Records
// =================================================================
  app.get("/api/allInventory", function(req, res) {
    db.inventory.findAll({}).then(function(dbVinylRecord) {
      res.json(dbVinylRecord);
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
