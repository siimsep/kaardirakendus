import User from "./components/users/interfaces";
import Job from "./components/jobs/interfaces";
/**
 * Database interface
 */
interface Db {
  users: User[];
  jobs: Job[];
}

/**
 * Mock database
 */
const db: Db = {
  users: [
    {
      id: 1,
      firstName: "Juku",
      lastName: "Juurikas",
    },
    {
      id: 2,
      firstName: "Mari",
      lastName: "Maasikas",
    },
  ],

  jobs: [
    {
      id: 1,
      lat: 58.91741, // latitude
      lng: 23.698196, // longitude
      note: "On these coordinates is an issue to handle", //
      completion: false, // user can change status of completion if job is done
    },
  ],
};

export default db;
