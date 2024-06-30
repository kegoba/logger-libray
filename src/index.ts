import express from 'express';
const bodyParser = require('body-parser');
const {exposeAllLogger} = require("./services/userServerice")

const userRouter = require("./route/userRoute")

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/v1/user", userRouter)
exposeAllLogger()





  


