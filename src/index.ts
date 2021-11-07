import express, { Request, Response, Application } from "express";
import usersController from "./components/users/controller";
import jobController from "./components/jobs/controller";
import { port } from "./components/general/settings";

/*
 * *********************** Initializing Express.js API ******************
 */
const app: Application = express();
var favicon = require("serve-favicon"); // Favicon middleware
const rateLimit = require("express-rate-limit"); // Middleware that limits the repeated API requests from the same IP address.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(express.json());

/*
 * *********************** Users ******************
 */
app.get("/users", usersController.getAllUsers);
app.get("/users/:id", usersController.getUserById);
app.delete("/users/:id", usersController.removeUser);
app.post("/users", usersController.createUser);
app.patch("/users/:id", usersController.updateUser);
/*
 * *********************** Jobs ******************
 */
app.get("/jobs", jobController.getAllJobs);
app.get("/jobs/:id", jobController.getJobById);
app.delete("/jobs/:id", jobController.removeJob);
app.post("/jobs", jobController.createJob);
app.patch("/jobs/:id", jobController.updateJob);
/*
 * *********************** Middleware execution ******************
https://blog.logrocket.com/express-middleware-a-complete-guide/
 */
app.use(limiter);
app.use(favicon("favicon.ico"));
/*
 * *********************** Indicates our API is alive ******************
 */
app.listen(port, () => {
  console.log(
    `App is running on port ${port}, visit http://localhost:3000/users for example`
  );
});
