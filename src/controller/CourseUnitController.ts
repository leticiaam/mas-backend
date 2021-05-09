import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';

class CourseUnitController {
    async create(request: Request, response:Response){
        const userData = request.body

        const createUser = new CreateCourseUnitService()

        const user = await createUser.execute(userData);

        return response.json(user);
    }
}

export {CourseUnitController}