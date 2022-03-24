
import './index.css';
import { Route } from 'react-router';
import {  Routes} from "react-router-dom";
import HomeScreen from './Components/HomeScreen';
import CreateEmployee from './Components/CreateEmployee';

import UpdateEmployee from './Components/UpdateEmployee';
import DetailsEmployee from './Components/DetailsEmployee';
function App() {
  return (
    <>
    {/* <Link to='/'><button>Create New Employee</button></Link>
     */}
    <Routes>
      
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/add-list" element={<CreateEmployee />} />
        <Route path='/update' element={<UpdateEmployee />} />
        <Route path='/details' element={<DetailsEmployee />} />
       </Routes>
      </>
  );
}

export default App;
