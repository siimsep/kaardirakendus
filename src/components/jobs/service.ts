import db from "../../db";
import Job from "./interfaces";

const jobService = {
  getAllJobs: (): Job[] => {
    const { jobs } = db;
    return jobs;
  },
  getJobById: (id: number): Job | undefined => {
    const Job = db.jobs.find((element) => element.id === id);
    return Job;
  },
  removeJob: (id: number): boolean => {
    const index = db.jobs.findIndex((element) => element.id === id);
    db.jobs.splice(index, 1);
    return true;
  },
  createJob: (lat: number, lng: number, note: string, completion: boolean) => {
    const id = db.jobs.length + 1;
    db.jobs.push({
      id,
      lat,
      lng,
      note,
      completion,
    });
    return id;
  },
  updateJob: (data: {
    id: number;
    lat?: number;
    lng?: number;
    note?: string;
    completion?: boolean;
  }): boolean => {
    const { id, lat, lng, note, completion } = data;
    const index = db.jobs.findIndex((element) => element.id === id);
    if (lat) {
      db.jobs[index].lat = lat;
    }
    if (lng) {
      db.jobs[index].lng = lng;
    }
    if (note) {
      db.jobs[index].note = note;
    }
    if (completion) {
      db.jobs[index].completion = completion;
    }
    return true;
  },
};

export default jobService;
