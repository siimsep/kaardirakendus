import express, { Request, Response, Application } from "express";
import usersController from "./components/users/controller";
import jobController from "./components/jobs/controller";
import { port } from "./components/general/settings";

/*
 * *********************** Initializing Express.js API ******************
 */
const app: Application = express();
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

/////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(
    `App is running on port ${port}, visit http://localhost:3000/users for example`
  );
});
