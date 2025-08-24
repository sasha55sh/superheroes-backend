const { cloudinary } = require("../config/config");
const Superhero = require("../models/superheroModel");

class ImagesService {
  async updateImages(id, files, existingImages = []) {
    const superhero = await Superhero.findById(id);
    if (!superhero) throw new Error("Hero not found");

    let uploadedImages = [];

    if (files && files.length > 0) {
      const uploadResults = await Promise.all(
        files.map((file) =>
          cloudinary.uploader.upload(file.path, { folder: "superheroes" })
        )
      );
      uploadedImages = uploadResults.map((res) => res.secure_url);
    }

    superhero.images = [...existingImages, ...uploadedImages].slice(0, 4);
    await superhero.save();

    return superhero;
  }
}

module.exports = new ImagesService();
