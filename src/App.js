import { data } from 'jquery';
import './style.css';
import LoginRegister from './components/loginregister/loginregister';
import HomePage from './components/home/homepage';
import IntegrationsPage from './components/integrations/integrations';
import AgentPage from './components/agent/agentTalk';
import SettingPage from './components/settings/settings';
import SupportPage from './components/support/support';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {


  return (
    <div>

      <Router>
      
        <Routes>
        <Route path='/' element={<LoginRegister />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/agent' element={<AgentPage />} />
            <Route path='/integrations' element={<IntegrationsPage />} />
            <Route path='/setting' element={<SettingPage />} />
            <Route path='/support' element={<SupportPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
