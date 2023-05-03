import  express  from "express";
import { createPetsController, getAllpetsController } from "./controller/AllpetsController.js";
import { createAdoptController } from "./controller/adoptController.js";
import { creategiveAwayController } from "./controller/giveAwayController.js";
const router = express.Router();


router.get('/api/getAllPets',getAllpetsController);

router.post('/api/createpets',createPetsController);

router.post('/api/createAdoptUser',createAdoptController);

router.post('/api/craeteUserGiveAway',creategiveAwayController);

export {router as routes};