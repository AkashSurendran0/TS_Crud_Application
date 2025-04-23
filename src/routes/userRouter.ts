import modifyStudent from "../controllers/userController"
import { Router } from "express"

const router=Router()
const alterStudent= new modifyStudent()

router.get('/', alterStudent.loadPanel)
router.post('/addUser', alterStudent.addUser)
router.post('/editUser/:id', alterStudent.editUser)
router.get('/deleteUser/:id', alterStudent.deleteUser)

export default router