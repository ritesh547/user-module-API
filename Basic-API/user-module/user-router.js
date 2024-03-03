// user-router.js

const express = require('express');
const userRouter = express.Router();
const userController = require("./user-controller");

userRouter.get("/user-list", userController.getUserList);
userRouter.post("/create-user", userController.createUser);
userRouter.put("/edit-user/:id", userController.editUser);
userRouter.delete("/delete-user/:id", userController.deleteUser);

module.exports = userRouter;
