import { generateId } from "../utils.js";

export default class Task {
  constructor(data) {

    this.taskName = data.taskName;
    this.id = data.id || generateId();

  }

  get Template() {
    return /*html*/`
      <dd>
      <h6 style="padding-left: 10px;">${this.taskName}</h6>
      <button type="button" class="close" onclick="app.listController.deleteTask('${this.id}')">
      <span>&times;</span>
      </dd>
    `
  }
}
