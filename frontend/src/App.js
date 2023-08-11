import {Route,Routes} from 'react-router-dom';
import Main from './Pages/Main';
import Dashboard from './Components/Dashboard/index';
import CreateIssue from './Components/Dashboard/CreateIssue';
import Cal from './Components/Dashboard/Cal';
import Profile from './Components/Dashboard/Profile';
import Team from './Components/Dashboard/Team';
import ViewUsers from './Components/Dashboard/ViewUsers';
import ViewManager from './Components/Dashboard/ViewManager';
import ViewProject from './Components/Dashboard/ViewProject';
import Tasks from './Components/Dashboard/Tasks';
import CreateTeam from './Components/Dashboard/CreateTeam';
import CreateProject from './Components/Dashboard/CreateProject';
import './App.css';
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/createissue" element={<CreateIssue/>} />
      <Route path="/cal" element={<Cal/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/viewusers" element={<ViewUsers/>} />
      <Route path="/viewmanager" element={<ViewManager/>} />
      <Route path="/viewproject" element={<ViewProject/>} />
      <Route path="/tasks" element={<Tasks/>} />
      <Route path="/createteam" element={<CreateTeam/>} />
      <Route path="/createproject" element={<CreateProject/>} />

     </Routes>
    </div>
  );
}

export default App;
