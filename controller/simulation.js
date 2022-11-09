import * as simulationRepository from '../data/simulation.js';
import * as fs from 'fs';

export async function GetAllSimulation(req, res) {
    const simulations = await simulationRepository.getAll();
    res.status(200).json(simulations);
}

export async function CreateSimulation(req, res) {
    const path = req.query.path;
    console.log(path);
    if (path && path.startsWith('file')) {
        CreateSimulationFile(req, res);
    } else if (path && path.startsWith('img')) {
        CreeateSimulationImage(req, res);
    } else {
        console.log(req.body);
        const { UserID, UserPW, Name, Author, Description, File, Image } =
            req.body;
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
}

export async function CreateSimulationFile(req, res) {
    const path = req.query.path;
    const data = req.body.data;
    fs.promises
        .writeFile(`./public/${path}`, data)
        .then(res.sendStatus(200))
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
}

export async function CreeateSimulationImage(req, res) {
    const path = req.query.path;
    const data = req.body.data;
    fs.promises
        .writeFile(`./public/${path}`, data)
        .then(res.sendStatus(200))
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
}

export async function DeleteSimulation(req, res) {
    const id = req.params.id;
    const isSuccess = await simulationRepository.remove(id);
    console.log(isSuccess);
    isSuccess ? res.sendStatus(209) : res.sendStatus(404);
}
