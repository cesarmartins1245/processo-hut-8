import Sidebar from './Components/Sidebar/sidebar'
import Dashboard from './Containers/Dashboard/dashboard'
import MyCourses from './Containers/MyCourses/myCourses'
import './App.css'
import React, { useEffect, useState } from 'react'
import { getUser } from './services/requests'
//import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar name="Fausto Silva" course="Ciência da Computação"></Sidebar>
        <div id="container">
          <Route path='/' exact component={Dashboard}></Route>
          <Route path='/courses' exact component={MyCourses}></Route>
          <Route path='/course' exact component={Dashboard}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
*/
const App = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser()
          console.log(data)
        setUser(data)
      } catch (err) {
        console.err(err)
      }
    }

    getUserData()
  }, [])

  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <h1>Dashboard</h1>,
    },
    {
      path: '/courses',
      main: () => <h1>Courses</h1>,
    },
  ]

  return (
    <div className="App">
      <Router>
      <div className="App">
        <Sidebar user={user}></Sidebar>
        <div id="container">
          <Route path='/' exact component={Dashboard}></Route>
          <Route path='/courses' exact component={MyCourses}></Route>
        </div>
      </div>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App