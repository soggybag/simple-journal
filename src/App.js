import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import AddList from './components/AddEntry'
import ListEntries from './components/ListEntries'
import ShowEntry from './components/ShowEntry'
import './App.css'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddList />
        <ListEntries />
        <ShowEntry />
      </div>
    </Provider>
  );
}

export default App
