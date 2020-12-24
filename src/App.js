import { OpeningScreening } from "./components/OpeningScreening";
import {OnBoardingScreen1} from "./components/OnBoardingScreen1";
import { OnBoardingScreen2 } from "./components/OnBoardingScreen2";
import {OnBoardingScreen3} from './components/OnBoardingScreen3';
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
       <Route path='/onboarding-provider-2'>
          <OnBoardingScreen3/>
       </Route>
        <Route exact path='/'>
        <OpeningScreening/>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
