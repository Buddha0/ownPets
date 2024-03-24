import express from 'express';
import { getCat, getDogs, getOther, getpets, postPets, deletePet, updatePet } from "../controllers/petController.js"

const router = express.Router();

router.get("/get", getpets);
router.post("/post", postPets);
router.get("/dogs", getDogs);
router.get("/cats", getCat);
router.get("/others", getOther);
router.delete("/delete/:id", deletePet);
router.put("/update/:id", updatePet);


export default router;