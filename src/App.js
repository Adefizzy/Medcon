import logo from './logo.svg';
import './App.css';
import { OpeningScreening } from "./components/OpeningScreening";
import {OnBoardingScreen1} from "./components/OnBoardingScreen1";
import { OnBoardingScreen2 } from "./components/OnBoardingScreen2";
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/onboarding-patient'>
             <OnBoardingScreen1/>
        </Route>
        <Route path='/onboarding-provider'>
          <OnBoardingScreen2/>
       </Route>
        <Route exact path='/'>
        <OpeningScreening/>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
