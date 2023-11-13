export const getStudents = async (req, res) => {
  return res.status(200).send({ mensagem: "Get all studants" });
};

export const getStudentById = async (req, res) => {
  const { id } = req.params;
  return res.status(200).send({ mensagem: `Get student with id: ${id}` });
};

export const createStudent = async (req, res) => {
  const { name, email, age } = req.body;

  age >= 18
    ? res.status(201).send({ mensagem: `Aluno com idade menor a 18 anos` })
    : res.status(201).send({ mensagem: `Aluno com idade maior a 18 anos` });

    if (!name || !email || !age) {
        return res.status(400).send({ mensagem: "Missing required fields" });
        }

    return res.status(200).send({
    mensagem: `Create student with name: ${name}, email: ${email} and age: ${age}`,
    });
      
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).send({ mensagem: "Missing required fields" });
  }

  return res.status(200).send({
    mensagem: `Update student with id: ${id} with name: ${name}, email: ${email} and age: ${age}`,
  });
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  return res.status(200).send({
    mensagem: `Delete student with id: ${id}`,
  });
};