const Superhero = require("../models/superheroModel");

class SuperheroService {
  async getAllSuperheroes() {
    return await Superhero.find();
  }

  async getSuperheroById(id) {
    return await Superhero.findById(id);
  }

  async deleteSuperheroById(id) {
    return await Superhero.findByIdAndDelete(id);
  }

  async createSuperhero(data) {
    const superhero = new Superhero(data);
    return await superhero.save();
  }

  async updateSuperheroData(id, data) {
    return await Superhero.findByIdAndUpdate(id, data, { new: true });
  }
}

module.exports = new SuperheroService();
