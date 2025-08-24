const ImagesService = require("../services/ImagesService");

class ImagesController {
  async updateImages(req, res) {
    const { id } = req.params;
    const existingImages = req.body.existingImages || [];
    const newImages = req.files?.newImages || [];

    const superhero = await ImagesService.updateImages(
      id,
      newImages,
      existingImages
    );
    res.status(200).json(superhero);
  }
}

module.exports = new ImagesController();
