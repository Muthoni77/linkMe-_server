import { Router } from "express";
import {register } from "./../../controllers/auth.js";

const router = Router();
router.post("/register", register);
const user_router = router;
export default user_router;
