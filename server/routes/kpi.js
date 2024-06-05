import express from "express";
import KPI from "../model/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    console.log("in /kpis"); // Log statement for debugging
    const kpis = await KPI.find();
    console.log("Fetched KPIs:", kpis); // Log the fetched data
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;