const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const SuperheroController = require("../controllers/SuperheroController");
const ImagesController = require("../controllers/ImagesController");

router.get("/", (req, res) => {
  res.send("Choose route");
});

router.get("/catalog", SuperheroController.getAllSuperheroes);
router.get("/catalog/:id", SuperheroController.getSuperheroById);

router.delete("/catalog/:id", SuperheroController.deleteSuperheroById);

router.post("/catalog/create", SuperheroController.createSuperhero);

router.put(
  "/catalog/:id",
  upload.fields([{ name: "newImages", maxCount: 4 }]),
  ImagesController.updateImages
);
router.patch("/catalog/:id", SuperheroController.updateSuperheroData);

module.exports = router;
