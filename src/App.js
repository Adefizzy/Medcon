import { OpeningScreening } from "./components/Onboarding/OpeningScreening";
import {OnBoardingScreen1} from "./components/Onboarding/OnBoardingScreen1";
import { OnBoardingScreen2 } from "./components/Onboarding/OnBoardingScreen2";
import {OnBoardingScreen3} from './components/Onboarding/OnBoardingScreen3';
import { OnBoardingSuccess } from './components/Onboarding/OnBoardingSuccess';
import { OnBoardingFailed } from './components/Onboarding/OnBoardingFailed';
import { ChatRoom } from './components/Onboarding/ChatRoom';
import {UpcomingEventScaffold} from './components/Overview/UpcomingEventScaffold';
import {Switch, Route} from 'react-router-dom';
import { WaitingRoom } from './components/Onboarding/WaitingRoom';
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
       <Route path='/upcoming-event-past-session'>
          <UpcomingEventScaffold/>
       </Route>
       <Route path='/onboarding-success'>
         <OnBoardingSuccess/>
       </Route>
       <Route path='/onboarding-failed'>
         <OnBoardingFailed/>
       </Route>
       <Route path='/waiting-room'>
         <WaitingRoom/>
       </Route>
       <Route path='/chat-room'>
         <ChatRoom/>
       </Route>
        <Route exact path='/'>
        <OpeningScreening/>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
