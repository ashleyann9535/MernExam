const PetController = require("../controllers/pet.controllers");

module.exports = (app) => {
  app.get("/api/pet", PetController.getPets);
  app.get("/api/pet/:id", PetController.getOnePet);
  app.post("/api/pet/create", PetController.createPet);
  app.put("/api/pet/:id", PetController.updatePet);
  app.delete("/api/pet/:id", PetController.deletePet);
};


