import {getRepository} from 'typeorm'
import{CourseUnit} from '../model/CourseUnit'

interface CourseUnitData {
    name: string;
    description: string;
}

class CreateCourseUnitService {

    async execute( {name, description}: CourseUnitData)
    {
        const courseUnitRepository = getRepository(CourseUnit);
        const courseUnit = courseUnitRepository.create({
            name,
            description
        });
        await courseUnitRepository.save(courseUnit);

        return CourseUnit;
    }
}

export {CreateCourseUnitService}