import express from 'express';
import 'express-async-errors';
import * as simulationController from '../controller/simulation.js';

const router = express.Router();

router.get('/', simulationController.GetAllSimulation);

router.post('/', simulationController.CreateSimulation);

router.delete('/:id', simulationController.DeleteSimulation);

router.post('/file/:path', simulationController.CreateSimulationFile);

router.post('/img/:path', simulationController.CreateSimulationFile);

export default router;
