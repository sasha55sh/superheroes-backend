const { cloudinary } = require("../config/config");
const Superhero = require("../models/superheroModel");

class ImagesService {
  async updateImages(id, files = [], existingImages = []) {
    const superhero = await Superhero.findById(id);

    let uploadedImages = [];

    if (files.length > 0) {
      const uploadFile = (file) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "superheroes" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result.secure_url);
            }
          );
          stream.end(file.buffer);
        });
      };

      uploadedImages = await Promise.all(files.map(uploadFile));
    }

    superhero.images = [...existingImages, ...uploadedImages].slice(0, 4);
    await superhero.save();

    return superhero;
  }
}

module.exports = new ImagesService();
