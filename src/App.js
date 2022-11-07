import { Link, Route } from "react-router-dom"
import 'antd/dist/antd.min.css'
import StatsContainer from "./components/StatsContainer"
import Home from "./components/Home"
import Settings from "./components/Settings"
import Profile from "./components/Profile"
import DefaultLayout from "./components/DefaultLayout";
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
   return (
      <div>
         <DefaultLayout>
            <div>
               <StatsContainer />

               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Settings">Settings</Link></li>
                  <li><Link to="/Profile">Profile</Link></li>
               </ul>

               <Route path="/" component={Home} exact={true}></Route>
               <Route path="/Settings" component={Settings} exact={true}></Route>
               <Route path="/Profile" component={Profile} exact={true}></Route>
               <Route path="/Login" component={Login} exact={true} />
               <Route path="/Regsiter" component={Register} exact={true} />
            </div>

         </DefaultLayout>
      </div>


   )
}

export default App