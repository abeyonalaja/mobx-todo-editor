// import needed libraries
import React from 'react'
import {render} from 'react-dom'

// import the view and the viewModel
import {TodoView} from './TodoView'
import {TodoViewModel} from './TodoViewModel'


// Needed for onTouchTap by material-ui
// http://stackoverflow.com/a/34015469/988941

// create a viewModel singleton
const model = new TodoViewModel()

// render the editor
render(<TodoView model={model} />, document.getElementById('root'))
