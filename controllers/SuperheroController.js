const SuperheroService = require("../services/SuperheroService");

class SuperheroController {
  async getAllSuperheroes(req, res) {
    const superhero = await SuperheroService.getAllSuperheroes();
    return res.status(200).json(superhero);
  }

  async getSuperheroById(req, res) {
    const { id } = req.params;
    const superhero = await SuperheroService.getSuperheroById(id);
    return res.status(200).json(superhero);
  }

  async deleteSuperheroById(req, res) {
    const { id } = req.params;
    const superhero = await SuperheroService.deleteSuperheroById(id);
    return res.status(200).json(superhero);
  }

  async createSuperhero(req, res) {
    const superhero = await SuperheroService.createSuperhero(req.body);
    return res.status(201).json(superhero);
  }

  async updateSuperheroData(req, res) {
    const { id } = req.params;
    const data = req.body;
    const superhero = await SuperheroService.updateSuperheroData(id, data);
    return res.status(200).json(superhero);
  }
}

module.exports = new SuperheroController();
