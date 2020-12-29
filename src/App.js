import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Deshboard  from './components/Dashboard'
import Takeout from './components/Takeout';
import AddFoods from './components/AddFoods';
import FoodDetails from './components/FoodDetails';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Header from './components/Header';
import Delivary from './components/Delivary';
import Cartscreen from './components/Cartscreen';
import ContactScreen from './components/ContactScreen';


function App() {
  return (
    <Router>
         <Header/>
         <Route path='/signin' component={LoginScreen} />
         <Route path='/' component={Deshboard} exact />
         <div>        
         <Route path='/cart/:id?' component={Cartscreen} />
         <Route path='/takeout' component={Takeout}  />
         <Route path='/contact' component={ContactScreen}  />
         <Route path='/delivary' component={Delivary}  />
         <Route path='/addfoods' component={AddFoods} />
         <Route path='/food/:id/:type' component={FoodDetails} />
         <Route path='/register' component={RegisterScreen} />
         </div>
    </Router>
  );
}

export default App;
