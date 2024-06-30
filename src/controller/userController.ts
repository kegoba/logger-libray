import { Request, Response } from 'express';
import  { loginServices, UserData } from '../services/userServerice';





export const loginController = async (req: Request, res: Response): Promise<void> => {
  const userInfo: UserData = req.body;
  try {
    const response = await loginServices(userInfo);
    res.status(response.status).json(response.data);
  } catch (error:any) {
    res.status(400).json({ error: error.error  });
  }
};





module.exports = {
    loginController
}