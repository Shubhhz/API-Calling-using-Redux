import { useDispatch,useSelector } from 'react-redux'
import { fetchcomments } from './redux/slices/coments'
import React from 'react'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const state=useSelector(state=>state);
  //comment is the reducer name we defined in store
  

  return (
    <div className="app">
      <button onClick={e => dispatch(fetchcomments())}>
        Fetch Comments
      </button>
      {state.comment.isLoading?(<h1>Loading...</h1>):
        state.comment.data&&state.comment.data.map(e=><li>{e.name}</li>)
      }
    </div>
  )
}

export default App