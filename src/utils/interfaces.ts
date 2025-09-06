import { Types } from "mongoose";
import { signUpSchema } from "../modules/users/user.validation";
import z from "zod";

// export interface SignUp {
//   name: string;
//   email: string;
//   password: string;
//   cPassword: string;
//   age:number,
//   address:string,
//   phone:string,
//   gender: GenderType
// }

export type signUpSchemaType = z.infer<typeof signUpSchema.body>;

export enum GenderType {
  male = "male",
  female = "female",
}

export enum RoleType {
  user = "user",
  admin = "admin",
}

export interface IUser {
  _id: Types.ObjectId;
  fName: string;
  lName: string;
  userName?: string;
  email: string;
  password: string;
  age: number;
  phone?: string;
  address?: string;
  gender: GenderType;
  role?: RoleType;
  createdAt: Date;
  updatedAt: Date;
}
