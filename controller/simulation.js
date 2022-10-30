import * as simulationRepository from '../data/simulation.js';

export async function GetAllSimulation(req, res) {
    const simulations = await simulationRepository.getAll();
    res.status(200).json(simulations);
}

export async function CreateSimulation(req, res) {
    console.log(req.body);
    const { UserID, UserPW, Name, Author, Description, File, Image } = req.body;
    const simulation = await simulationRepository.create({
        UserID,
        UserPW,
        Name,
        Author,
        Description,
        File,
        Image,
    });
    console.log(simulation);
    simulation ? res.status(204).json({ simulation }) : res.sendStatus(404);
}

export async function DeleteSimulation(req, res) {
    const id = req.params.id;
    const isSuccess = await simulationRepository.remove(id);
    console.log(isSuccess);
    isSuccess ? res.sendStatus(209) : res.sendStatus(404);
}
