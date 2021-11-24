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
      email: "juku@juurikas.ee",
      password: "$2b$10$PIACoENUCFtIwlGWismpAO77TQuHCfLTP6wqLGHa0xYX3.Jh3Q1bm",
      role: "Admin",
    },
    {
      id: 2,
      firstName: "Mari",
      lastName: "Maasikas",
      email: "mari@maasikas.ee",
      password: "$2b$10$TAM3mWbYswuHfXjmawF/t.//S9tI3XjyfHXKZb42TgSnlaDcFSyAS",
      role: "User",
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
