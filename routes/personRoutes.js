const express = require("express");
const router = express.Router();

const Person = require("./../models/person");

//CRUD OPERATIONS

//we will use async await

// POST (database operations) - CREATE (http methods)

router.post("/", async (req, res) => {
  const personData = req.body;
  const newPerson = new Person(personData);

  try {
    const savedPerson = await newPerson.save();
    console.log("data saved successfully");
    res.status(201).json(savedPerson);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});

//get method to get the person

//READ - GET

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data);
    console.log("data fetched");
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});

//parameterised

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const data = await Person.find({ work: workType });
      res.status(200).json(data);
      console.log("data fetched");
    } else {
      res.status(400).json({ error: "invalid work type" });
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});

//update

router.put("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personid,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      res.status(404).json({ error: "person not found" });
      return;
    }

    console.log("data updated successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "internal server error" });
  }
});

//delete

router.delete("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const response = await Person.findByIdAndDelete(personid);

    if (!response) {
      res.status(404).json({ error: "person not found" });
      return;
    }

    console.log("data deleted successfully");
    res.status(204).json({ message: "data deleted successfully" });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "internal server error" });
  }
});

//comment for testing pull

module.exports = router;
