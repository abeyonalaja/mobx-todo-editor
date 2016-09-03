
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

  // save todos, if possible
  @action
  save(){

    // are there invalid todos?
    if(this.todos.filter(todo => todo.isValid === false).length > 0 ){
      alert("unable to save: there are invalid todo's");
    }

    if(window.localStorge){
      window.localStorge.setItem(

        "todos",
        JSON.stringify(
          this.todos.map(todo => todo.serialize())
        )
      )
    }

  }
}
