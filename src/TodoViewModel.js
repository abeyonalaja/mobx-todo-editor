
import {observable, action} from 'mobx';
import {Todo} from './Todo';

export class TodoViewModel{

  @observable todos = [];

  constructor() {
    this.load();
  }

  @action
  add(){
    const newTodo = new Todo();
    this.todos.push(newTodo);
    return newTodo;
  }

  // remove and delets the given todo
  @actionremove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if(index > -1){
      this.todos.splice(index, 1)
    }
  }

  @action
  load(){

    if(window.localStorage){
        const json = JSON.parse(window.localStorge.getItem("todos") || "[]")

        this.todos = json.map(todo => Todo.deserialize(todo))
    }

  }
}
