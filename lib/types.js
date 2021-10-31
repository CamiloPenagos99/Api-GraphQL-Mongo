let model = require("./model/course");
let modelStudent = require("./model/student");

module.exports = {

    //buscar en la coleccion de estudiantes, dado los ids que se almacenan en students
  Course: {
    students: async ({ students }) => {
      ids = students ? students.map((id) => id) : [];
      studentsData =
        ids.length > 0 ? await modelStudent.find({ _id: { $in: ids } }) : [];
    //console.log("resolver de students", studentsData)
        return studentsData;
    },

   
  },
};
