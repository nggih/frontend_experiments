import Todo from './components/Todo'
import { Route} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetup'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import './index.css'

function App() {
  return (
    <div>
      <AllMeetupsPage></AllMeetupsPage>
      <FavoritesPage></FavoritesPage>
      <Route path="/">
        <NewMeetupPage></NewMeetupPage>
      </Route>
      {/* <Switch> */}
      <div className="text-black">
        hello

      </div>
        {/* <Route path='/' exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage></FavoritesPage>
        </Route> */}

      {/* </Switch> */}
      <h1>Todos</h1>
      <Todo text="tile1"></Todo>
      <Todo text="tile2"></Todo>
      <Todo text="tile3"></Todo>
    </div>
  ) 
}

export default App
