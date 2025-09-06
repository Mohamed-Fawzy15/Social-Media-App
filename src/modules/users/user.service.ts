import { NextFunction, Request, Response } from "express";
import { signUpSchemaType } from "../../utils/interfaces";
import userModel from "../../DB/model/user.model";
import { AppError } from "../../utils/classError";
import { UserRepository } from "../../DB/repositories/user.repository";
import { Hash } from "../../utils/hash";
import { eventEmitter } from "../../utils/event";

class UserService {
  // private _userModel: Model<IUser> = userModel;
  private _userModel = new UserRepository(userModel);

  signup = async (req: Request, res: Response, next: NextFunction) => {
    const {
      userName,
      email,
      password,
      cPassword,
      age,
      address,
      phone,
      gender,
    }: signUpSchemaType = req.body;

    if (await this._userModel.findOne({ email })) {
      throw new AppError("email is already exist", 403);
    }

    const hash = await Hash(password);

    const user = await this._userModel.createOneUser({
      userName,
      email,
      password: hash,
      age,
      address,
      phone,
      gender,
    });

    eventEmitter.emit("confirmEmail", { email });

    return res.status(201).json({ message: "created", user });
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "success" });
  };
}

export default new UserService();
