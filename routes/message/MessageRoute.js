import { Router } from "express";
import { sendMessage } from "../../controllers/MessageController.js";

const router = Router();

router.post("/send", sendMessage);

export default router;
