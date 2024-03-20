import express from "express";
import { signUp, signIn } from "../Controller/admin.controller.js";
import { verifyAdmin } from "../Token/verifyToken.js";
import { body } from "express-validator";

let router = express.Router();

router.post("/signUp"
    , body(`email`, `Invalid email`).notEmpty().isEmail()
    , body(`password`).notEmpty().isStrongPassword({ minLength: 5 })
    , signUp);

router.post("/signIn"
    , body(`email`, `Invalid email`).notEmpty().isEmail()
    , body(`password`).notEmpty().isStrongPassword({ minLength: 5 })
    , verifyAdmin, signIn);

// Update
// View

export default router;
