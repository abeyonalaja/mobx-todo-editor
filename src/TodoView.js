
import React from 'react';
import { observer } from 'mobx-react';
import SingleTodoView from 'SingleTodoView';


@observer
export class TodoView extends React.Component{

  render(){
    const model = this.props.model

    return (
      <div>
        <h1>React & mobx Todo List</h1>
        <p>
          <button onClick={ () => model.add() }> New Todo </button>
          <button onClick={ () => model.load() }> Reload Todos </button>
          <button onClick={ () => model.save() }> Save Todos </button>
        </p>
        { model.todos.map((todo, i) => ) <SingleTodoView key={ todo.id } model={ model } todo={ todo } /> }
      </div>
    );
  }
}
