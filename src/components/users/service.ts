import db from "../../db";
import User from "./interfaces";
import hashService from "../general/services/hashService";

const usersService = {
  getAllUsers: (): User[] => {
    const { users } = db;
    return users;
  },
  getUserById: (id: number): User | undefined => {
    const user = db.users.find((element) => element.id === id);
    return user;
  },
  getUserByEmail: (email: string): User | undefined => {
    const user = db.users.find((element) => element.email === email);
    return user;
  },
  removeUser: (id: number): boolean => {
    const index = db.users.findIndex((element) => element.id === id);
    db.users.splice(index, 1);
    return true;
  },
  createUser: async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: "Admin" | "User"
  ) => {
    const id = db.users.length + 1;
    const hashedPassword = await hashService.hash(password);
    db.users.push({
      id,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });
    return id;
  },
  updateUser: (data: {
    id: number;
    firstName?: string;
    lastName?: string;
  }): boolean => {
    const { id, firstName, lastName } = data;
    const index = db.users.findIndex((element) => element.id === id);
    if (firstName) {
      db.users[index].firstName = firstName;
    }
    if (lastName) {
      db.users[index].lastName = lastName;
    }
    return true;
  },
};

export default usersService;
