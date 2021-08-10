import Navbar from './Components/Navbar';
import ArpitChauhan from './Components/ArpitChauhan';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
   <BrowserRouter> 
    <Navbar />
    <Switch>
    <Route exact path="/" component={ArpitChauhan} />
    <Route exact path="/all" component={AllUsers} />
    <Route exact path="/add" component={AddUser} />
    <Route exact path="/edit/:id" component={EditUser} />
    <Route component ={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

// Working Fine At 1:06:54sec
