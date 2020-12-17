import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/Nav'
//pages
import Home from './Pages/Home/'

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        {/* Home Router */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/signup">
          <Signup />
        </Route> */}
        {/* <Route exact path="/login">
          <Login />
        </Route> */}
      </Router>
    </>
  )
}

export default App
