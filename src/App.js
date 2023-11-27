
import './App.css';
import UsersView from "./components/UsersView";
import UserInformationView from "./components/UserInformationView";
import { useParams } from 'react-router-dom';

function App() {
  const { user_id } = useParams();

  if (user_id) {
    return (
      <div className="App">
        <header className="header">
          Back
        </header>
        <UserInformationView user_id={user_id} />
      </div>
  
    );
  } else {
    return (
      <div className="App">
        <header className="header">
          Users {user_id}
        </header>
        <UsersView />
      </div>
  
    );
  }
}

export default App;
