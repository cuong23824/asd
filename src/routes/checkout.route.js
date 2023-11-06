import express from "express";
import { checkout } from "../controllers/checkout.controller.js";

export const checkout_router = express.Router();
checkout_router.get('/checkout', checkout);