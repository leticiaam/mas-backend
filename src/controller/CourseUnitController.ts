import {Request, Response} from 'express';
import { resolveTypeReferenceDirective } from 'typescript';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import {GetCouseUnitsService} from '../services/GetCouseUnitsService'

class CourseUnitController {
    async create(request: Request, response:Response){
        const userData = request.body

        const createCourseUnit = new CreateCourseUnitService()

        const courseUnit = await createCourseUnit.execute(userData);

        return response.json(courseUnit);
    }

    async show(request: Request, response:Response){
        

        const userId = request.body.user;
        
        const getCourseUnits = new GetCouseUnitsService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits);

    }
}

export {CourseUnitController}