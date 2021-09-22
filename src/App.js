import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Timetable from "./pages/timetable/Timetable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>

      <Topbar/>
      <div className = "container">
        <Sidebar/>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "/timetable">
            <Timetable/>
          </Route>
          <Route path = "/users">
            <UserList/>
          </Route>
          <Route path = "/user/:userId">
            <User/>
          </Route>
          <Route path = "/newUser">
            <NewUser/>
          </Route>
          <Route path = "/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
