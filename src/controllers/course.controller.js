export const getCourse = (req, res) =>{
    return res.status(200).send({message: "Get all courses controller"});
}

export const getCourseById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({message: `Get course with id ${id} controller`});
}

export const createCourse = (req, res) =>{
    const { name, description, numberStudents }= req.body;


    if(!name || !description || !numberStudents){
        return res.status(400).send({message: "Missing required informations"});
    }
    return res.status(200).send({message: `Create course with name ${name}, description ${description} and number of students ${numberStudents}`});

}

export const updateCourse = (req, res) =>{
    const { id } = req.params;
    const { name, description, numberStudents } = req.body;

    if(!name || !description || !numberStudents){
        return res.status(400).send({message: "Missing requered informations"})
    }
    
    return res.status(200).send({message: `Update student with id ${id} with name ${name}, description ${description} and number of students ${numberStudents}`});
}

export const deleteCourse = (req, res) =>{
    const { id } = req.params;
    return res.status(200).send({message: `Delete student with id ${id}`});
}