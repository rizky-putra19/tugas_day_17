class TasksController {
    static getTasks ( req, res ) {
        let tasks = {
            "tasks": ["Express", "PostgreSQL", "MongoDB", "React"]
          }

        res.json(tasks);
    };
};

module.exports = TasksController;