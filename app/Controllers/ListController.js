//NOTE in charge of taking user input from the view, and passing it on to the service. Also in charge of drawing the results of those actions to the view

import ListService from "../Services/ListService.js";
import _store from '../store.js'


function _drawLists() {
  let template = ''
  let lists = _store.State.lists

  lists.forEach(list => template += list.Template)

  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }



  create(event) {
    event.preventDefault()
    let formData = event.target
    let newList = {
      listName: formData.listName.value
    }

    ListService.create(newList)
    _drawLists()
    formData.reset()
  }

  delete(listId) {
    let confirmed = window.confirm("Are you sure?")
    if(confirmed) {
    ListService.delete(listId)
    _drawLists();
    }
  }
  createTask(event) {
    event.preventDefault()
    // debugger
    let formData = event.target
    let newTask = {
      taskName: formData.taskName.value
    }
  
    ListService.createTask(newTask)
    _drawLists()
    formData.reset()
  }

}