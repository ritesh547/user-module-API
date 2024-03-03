const express = require('express');
require('./db');
const app = express();
const port = 3000;
app.use(express.json());

const userRouter = require("./user-module/user-router");

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});