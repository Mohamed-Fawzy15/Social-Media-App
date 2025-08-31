import { Router } from "express";
import US from "./user.service";
import { validation } from "../../middleware/validation";
import { signUpSchema } from "./user.validation";

const userRouter = Router();

userRouter.post("/signup", validation(signUpSchema), US.signup);
userRouter.post("/login", US.login);

export default userRouter;
