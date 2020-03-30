import Task from "../Models/TaskModel.js";
import _store from "../store.js";

//Public
class TaskService {

    createTask(newTaskData) {
      let newTask = new Task(newTaskData)
      _store.State.tasks.push(newTask)
      _store.saveState()
    }

    deleteTask(taskId) {
      let index = _store.State.tasks.findIndex(task => task.id == taskId);
      _store.State.tasks.splice(index, 1)
      _store.State.tasks = _store.State.tasks.filter(task => task.id != taskId);
      _store.saveState()
    }

}

const SERVICE = new TaskService();
export default SERVICE;