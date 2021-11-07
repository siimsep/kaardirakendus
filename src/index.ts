import express, { Request, Response, Application } from "express";

//import db from "./db";
import usersController from "./components/users/controller";
//import responseCodes from "./components/general/responseCodes";
import { port } from "./components/general/settings";

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

/* // SHOWING THE JOBLIST
app.get("/jobs", (req: Request, res: Response) => {
  const { jobList } = db;
  return res.status(responseCodes.ok).json({
    jobList,
  });
});

app.get("/jobs/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(responseCodes.badRequest).json({
      error: "No valid id provided",
    });
  }
  const job = db.jobList.find((element) => element.id === id);
  if (!job) {
    return res.status(responseCodes.badRequest).json({
      error: `No job found with id: ${id}`,
    });
  }
  return res.status(responseCodes.ok).json({
    job,
  });
});
/////////////////////////////////////////////////////

// ADDING JOBS
app.post("/jobs", (req: Request, res: Response) => {
  const { lat, lng, note } = req.body;
  if (!lat) {
    return res.status(responseCodes.badRequest).json({
      error: "Error in coordinates: no latitude",
    });
  }
  if (!lng) {
    return res.status(responseCodes.badRequest).json({
      error: "Error in coordinates: no longitude",
    });
  }
  if (!note) {
    return res.status(responseCodes.badRequest).json({
      error: "Error, please add note",
    });
  }

  const id = db.jobList.length + 1;
  db.jobList.push({
    id,
    lat,
    lng,
    note,
    completion: false,
  });
  return res.status(responseCodes.created).json({
    id,
    message: "Great success!",
  });
});
/////////////////////////////////////////////////////

// DELETING JOBS
app.delete("/jobs/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(responseCodes.badRequest).json({
      error: "No valid id provided",
    });
  }
  const index = db.jobList.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(responseCodes.badRequest).json({
      message: `Job not found with id: ${id}`,
    });
  }
  db.jobList.splice(index, 1);
  return res.status(responseCodes.noContent).send();
});

// CHANGING JOB STATUS
app.patch("/jobs/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const { completion } = req.body;
  if (!id) {
    return res.status(responseCodes.badRequest).json({
      error: "No valid id provided",
    });
  }
  if (!completion) {
    return res.status(responseCodes.badRequest).json({
      error: "Nothing to update",
    });
  }
  const index = db.jobList.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(400).json({
      error: `No job found with id: ${id}`,
    });
  }
  if (completion) {
    db.jobList[index].completion = true;
  }

  return res.status(responseCodes.noContent).send();
}); */
/////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(
    `App is running on port ${port}, visit http://localhost:3000/users for example`
  );
});
