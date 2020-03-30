import { generateId } from "../utils.js";

export default class Task {
  constructor(data) {

    this.taskName = data.taskName;
    this.id = data.id || generateId();

  }

  get Template() {
    return /*html*/`
      <dd>
      <h6>${this.taskName}</h6>
      <button type="button" class="text-right close" onclick="app.taskController.delete('${this.id}')">
      <span>&times;</span>
      </dd>
    `
  }
}
