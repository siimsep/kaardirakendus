import { Request, Response } from "express";
import responseCodes from "../general/responseCodes";
import jobService from "./service";

const jobController = {
  getAllJobs: (req: Request, res: Response) => {
    const jobs = jobService.getAllJobs();
    return res.status(responseCodes.ok).json({
      jobs,
    });
  },
  getJobById: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: "No valid id provided",
      });
    }
    const job = jobService.getJobById(id);
    if (!job) {
      return res.status(responseCodes.badRequest).json({
        error: `No job found with id: ${id}`,
      });
    }
    return res.status(responseCodes.ok).json({
      job,
    });
  },
  removeJob: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: "No valid id provided",
      });
    }
    const job = jobService.getJobById(id);
    if (!job) {
      return res.status(responseCodes.badRequest).json({
        message: `Job not found with id: ${id}`,
      });
    }
    jobService.removeJob(id);
    return res.status(responseCodes.noContent).json({});
  },
  createJob: (req: Request, res: Response) => {
    const { lat, lng, note, completion } = req.body;
    if (!lat) {
      return res.status(responseCodes.badRequest).json({
        error: "Latitude is required",
      });
    }
    if (!lng) {
      return res.status(responseCodes.badRequest).json({
        error: "Longitude is required",
      });
    }
    if (!note) {
      return res.status(responseCodes.badRequest).json({
        error: "Add a note for more detailed information",
      });
    }
    if (!completion) {
      return res.status(responseCodes.badRequest).json({
        error: "Choose completion", // Should do that by default this boolean is set to FALSE
      });
    }
    const id = jobService.createJob(lat, lng, note, completion);
    return res.status(responseCodes.created).json({
      id,
    });
  },
  updateJob: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { lat, lng, note, completion } = req.body;
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: "No valid id provided",
      });
    }
    if (!lat && !lng && !note && !completion) {
      return res.status(responseCodes.badRequest).json({
        error: "Nothing to update",
      });
    }
    const job = jobService.getJobById(id);
    if (!job) {
      return res.status(responseCodes.badRequest).json({
        error: `No job found with id: ${id}`,
      });
    }
    jobService.updateJob({ id, lat, lng, note, completion });
    return res.status(responseCodes.noContent).json({});
  },
};

export default jobController;
