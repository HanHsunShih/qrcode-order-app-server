import "dotenv/config";
import initKnex from "knex";
import knexConfig from "../knexfile.js";
const knex = initKnex(knexConfig);
import express from "express";
const router = express.Router();

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; // A library to hash passwords before storing in DB
import authorise from "../middleware/auth.js";

// import authorise from "../middleware/auth.js";

// Used when hashing the users password (more salt rounds = stronger encrpytion)
const SALT_ROUNDS = 8;

router.post("/register", (req, res) => {
  // Encrypt the password the user provided via bcrypt
  bcrypt.hash(req.body.password, SALT_ROUNDS, async (err, hashedPassword) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Couldn't encrypt the supplied password" });
    }

    try {
      // Create a user record in the database
      const newUserIds = await knex("users").insert({
        name: req.body.name,
        password: hashedPassword, // use the hashed password for the password (instead of the plain text password)
      });

      const newUser = await knex("users").where({ id: newUserIds[0] }).first();

      res.status(201).json(newUser);
    } catch (error) {
      res
        .status(500)
        .json({ msg: `Couldn't create new user: ${error.message}` });
    }
  });
});

router.post("/login", async (req, res) => {
  try {
    // Query the database for the user via email address
    const user = await knex("users").where({ name: req.body.name }).first();

    // Ensure the password provided matches the encrypted password
    bcrypt.compare(req.body.password, user.password, function (_, success) {
      if (!success) {
        return res
          .status(403)
          .json({ message: "Username/Password combination is incorrect" });
      }

      // Generate a JWT token for the user
      const token = jwt.sign(
        {
          id: user.id,
          sub: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "8h" }
      );

      // Send the JWT token to the client
      res.status(200).json({ authToken: token });
    });
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
});

export default router;
