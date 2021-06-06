import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import ListEntries from './components/ListEntries'
import ShowEntry from './components/ShowEntry'
import { loadState, saveState } from './local-store'

import './App.css';

const persistedState = loadState()
const store = createStore(reducers, persistedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
  saveState(store.getState())
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListEntries />
        <ShowEntry />
      </div>
    </Provider>
  );
}

export default App;
