import { NextFunction, Request, Response } from "express";
import { SignUp } from "../../utils/interfaces";
import { signUpSchema } from "./user.validation";
import { AppError } from "../../utils/classError";

class UserService {
  signup = async (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password, cPassword }: SignUp = req.body;

    return res.status(201).json({ message: "created" });
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "success" });
  };
}

export default new UserService();
