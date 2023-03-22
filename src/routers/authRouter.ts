import { Router } from 'express'
import authController from "../controllers/authController";

const router = Router()

router.post('/user/login', authController.login)

export default router