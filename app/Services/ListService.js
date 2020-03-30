//NOTE this is where all of the business logic and the data manipulation actually occurs for our app

import List from "../Models/ListModel.js";
import _store from "../store.js";

//Public
class ListService {
  create(newListData) {
    let newList = new List(newListData)
    _store.State.lists.push(newList)
    _store.saveState()
  }


    delete(listId) {
      let index = _store.State.lists.findIndex(list => list.id == listId);
      _store.State.lists.splice(index, 1)
      _store.State.lists = _store.State.lists.filter(list => list.id != listId);
      _store.saveState()
    }

}
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

const SERVICE = new ListService();
export default SERVICE;
