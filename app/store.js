import List from "./Models/ListModel.js";
import Task from "./Models/TaskModel.js"

let _state = {
  /** @type {List[]} */
  lists: [],
  /** @type {Task[]} */
  tasks: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("Checkpoint-3"));
  if (data) {
    data.lists = data.lists.map(l =>{
      let list = new List(l);
      list.tasks = list.tasks.map(t => new Task(t))
      return list;

    });

    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("Checkpoint-3", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;