//NOTE this is where all of the business logic and the data manipulation actually occurs for our app

import List from "../Models/ListModel.js";
import Task from "../Models/TaskModel.js"
import _store from "../store.js";

//Public
class ListService {
  create(newListData) {
    let newList = new List(newListData)
    _store.State.lists.push(newList)
    _store.saveState()
  }

  createTask(newTaskData, listId) {
    let newTask = new Task(newTaskData)
    // find the list and push task onto list, refer to pizzashop addtopping
    let list = _store.State.lists.find(list => list.id
      == listId)
    _store.State.lists.push(newTask)
    _store.saveState()
  }

    delete(listId) {
      let index = _store.State.lists.findIndex(list => list.id == listId);
      _store.State.lists.splice(index, 1)
      _store.State.lists = _store.State.lists.filter(list => list.id != listId);
      _store.saveState()
    }

    deleteTask(taskId) {
      let index = _store.State.tasks.findIndex(task => task.id == taskId);
      _store.State.tasks.splice(index, 1)
      _store.State.tasks = _store.State.tasks.filter(task => task.id != taskId);
      _store.saveState()
    }

}
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

const SERVICE = new ListService();
export default SERVICE;





// import Task from "../Models/TaskModel.js";
// import _store from "../store.js";

// //Public
// class TaskService {
 
//     createTask(newTaskData, listId) {
//       let newTask = new Task(newTaskData)
//       // find the list and push task onto list, refer to pizzashop addtopping
//       let list = _store.State.lists.find(list => list.id
//         == listId)
//       list.tasks.push(newTask)
//       console.log(list)

//       // _store.State.tasks.push(newTask)
//       _store.saveState()
//     }

//     deleteTask(taskId) {
//       let index = _store.State.tasks.findIndex(task => task.id == taskId);
//       _store.State.tasks.splice(index, 1)
//       _store.State.tasks = _store.State.tasks.filter(task => task.id != taskId);
//       _store.saveState()
//     }

// }

// const SERVICE = new TaskService();
// export default SERVICE;