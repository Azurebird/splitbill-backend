import express from "express";
import createProfile from "./actions/create";

const router = express.Router();

/**
 * Creates a new profile
 */
router.post("/", createProfile);

export default router;
