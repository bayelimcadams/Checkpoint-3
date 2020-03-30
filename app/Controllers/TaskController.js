import TaskService from "../Services/TaskService.js";
import _store from '../store.js'


//TODO Don't forget to render to the screen after every data change.

//Public

function _drawTasks() {
  let template = ''
  let tasks = _store.State.tasks

  tasks.forEach(task => template += task.TaskTemp)

  document.getElementById("tasks").innerHTML = template
}


export default class TaskController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the Tasks.
    _drawTasks();
  }


createTask(event) {
  event.preventDefault()
  let formData = event.target
  let newTask = {
    taskName: formData.taskName.value
  }

  TaskService.createTask(newTask)
  _drawTasks()
  formData.reset()
}

  delete(taskId) {
    TaskService.deleteTask(taskId)
    _drawTasks()
  }

}