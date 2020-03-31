import Task from "../Models/TaskModel.js";
import _store from "../store.js";

//Public
class TaskService {
 
    createTask(newTaskData, listId) {
      let newTask = new Task(newTaskData)
      // find the list and push task onto list, refer to pizzashop addtopping
      let list = _store.State.lists.find(list => list.id
        == listId)
      list.tasks.push(newTask)
      console.log(list)

      // _store.State.tasks.push(newTask)
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