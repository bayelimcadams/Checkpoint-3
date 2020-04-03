import { generateId } from "../utils.js";
import Task from "./TaskModel.js"


// 

export default class List {
  constructor(data) {

    this.listName = data.listName;
    this.id = data.id || generateId();
    /** @type {Task[]} */
    this.tasks = data.tasks || []

        //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  }

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/`
      <div style="margin-left: 20px; margin-right: 20px;"
      class="col-3 border border-warning">
      <button type="button" class="w-100 text-right close" onclick="app.listController.delete('${this.id}')">
      <span>&times;</span>
      </button>
        <h3 class="text-black">${this.listName}</h3>
        <h5 style="padding-left:10px;" class="w-100 text-left"><i>Tasks:</i></h5>

        <form onsubmit="app.listController.createTask(event, '${this.id}')">
          <div class="form-group">
            <input type="text" name="taskName" class="form-control" placeholder="Add new task...">
            <button type="submit" class="w-25 btn btn-warning btn-sm"><b>+</b></button>
          </div>
        </form>
      </div>
    `
  }

  get Tasks() {
    let template = ''
    this.tasks.forEach(task => template += task.Template)
    return template;
  }
}
