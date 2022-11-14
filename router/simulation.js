import express from 'express';
import 'express-async-errors';
import * as simulationController from '../controller/simulation.js';

const router = express.Router();

router.get('/', simulationController.GetAllSimulation);

router.post('/', simulationController.CreateSimulation);

router.delete('/:id', simulationController.DeleteSimulation);

router.put('/file/:path', simulationController.CreateSimulationFile);

router.put('/img/:path', simulationController.CreeateSimulationImage);

export default router;
