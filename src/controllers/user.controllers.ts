import { Request, Response } from "express";
import createUserService from "../services/user/createUser.service";
import getAllUsersService from "../services/user/getAllUsers.service";
import userLoginService from "../services/user/userLogin.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";

const createUserController = async(req: Request, res: Response):Promise<Response> => {
    const user = await createUserService(req.body);

    return res.status(201).json(user);
}

const retrieveUserController = async(req: Request, res: Response): Promise<Response> => {
    const user = req.userById;
    
    return res.status(200).json(user);
}

const getAllUsersController = async(req: Request, res: Response): Promise<Response> => {
    const users = await getAllUsersService();
    
    return res.status(200).json(users);
}

const userLoginController = async(req: Request, res: Response): Promise<Response> => {
    const token:string = await userLoginService(req.body);

    return res.status(201).json({
        "accessToken": token
    })
}

const updateUserController = async(req: Request, res: Response): Promise<Response> => {
    const updatedUser = await updateUserService(req.body, req.userById);

    return res.status(200).json(updatedUser);
}

const deleteUserController = async (req: Request, res: Response): Promise<Response>=> {
    const deletedUser = await deleteUserService(Number(req.params.id));

    return res.status(204).json(deletedUser);
}

export { createUserController, retrieveUserController, getAllUsersController, userLoginController, updateUserController, deleteUserController };
