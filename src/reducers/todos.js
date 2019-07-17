const todos = (state = [
  {id:1,text:'Reducers',completed:false},
  {id:2,text:'Counter to store',completed:false},
  {id:3,text:'Пожрать вкусно',completed:false}
], 
action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos