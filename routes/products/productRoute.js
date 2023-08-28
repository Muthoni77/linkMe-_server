import { Router } from "express";
import { getAllProducts } from "../../controllers/ProductsController.js";
import verifyJWT from "../../middlewares/verifyJWT.js";
const router=Router();

router.get("/all",verifyJWT,getAllProducts)

export default router;