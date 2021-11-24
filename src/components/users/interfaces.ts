/**
 * User interface
 */
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "Admin" | "User";
}

export default User;

/**
 * Lisada interfeisid nagu 6petajal.
 */
