import express from "express";
import {protextRoute} from "../middleware/auth.middleware.js";
import {uploads_example} from "../controllers/uploads_example.js";

router.post('/upload',protextRoute, awsuploads_example);
const router = express.Router();