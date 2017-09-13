module.exports = function(app) {
    var task = require('../service/task');

    app.route('/tasks')
        .get(task.list_all_tasks)
        .post(task.create_a_task);


    app.route('/tasks/:taskId')
        .get(task.read_a_task)
        .put(task.update_a_task)
        .delete(task.delete_a_task);
};