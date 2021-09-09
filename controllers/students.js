class StudentsController {
    static getStudents (req,res) {
      let students = {
        "students": [
          {
            "name": "Jihad",
            "gender": "Male"
          },
          {
            "name": "Joshua",
            "gender": "Male"
          },
          {
            "name": "Rayan",
            "gender": "Male"
          },
          {
            "name": "Rayhan",
            "gender": "Male"
          },
          {
            "name": "Rizky",
            "gender": "Male"
          },
          {
            "name": "Vasya",
            "gender": "Female"
          },
          {
            "name": "Wahid",
            "gender": "Male"
          },
        ]
      }
       res.json(students);
    };
};

module.exports = StudentsController;