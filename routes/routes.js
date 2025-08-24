const express = require("express");
const router = express.Router();

const SuperheroController = require("../controllers/SuperheroController");
const ImagesControllers = require("../controllers/ImagesController");

router.get("/", (req, res) => {
  res.send("Choose route");
});

router.get("/catalog", SuperheroController.getAllSuperheroes);
router.get("/catalog/:id", SuperheroController.getSuperheroById);

router.delete("/catalog/:id", SuperheroController.deleteSuperheroById);

router.post("/catalog/create", SuperheroController.createSuperhero);

router.put("/catalog/:id", ImagesControllers.updateImages);
router.patch("/catalog/:id", SuperheroController.updateSuperheroData);

module.exports = router;
