const express = require("express");
const router = express.Router();

const Menu = require("./../models/MenuItem");
//menu

router.post("/", async (req, res) => {
  const menuData = req.body;
  const newMenu = new Menu(menuData);

  try {
    const savedMenu = await newMenu.save();
    console.log("data saved successfully");
    res.status(201).json(savedMenu);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    res.status(200).json(data);
    console.log("data fetched");
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const tasteType = req.params.taste;
    if (
      tasteType == "sweet" ||
      tasteType == "sour" ||
      tasteType == "spicy" ||
      tasteType == "bitter"
    ) {
      const data = await Menu.find({ taste: tasteType });
      res.status(200).json(data);
      console.log("data fetched");
    } else {
      res.status(400).json({ error: "invalid taste type" });
    }
  } catch {
    console.log("Error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});


//comment added for testing purpose
module.exports = router;
