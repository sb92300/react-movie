import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import {Login, SignUp, Mypage, AddMovie, ShowMovie} from './component/AllComponent'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/movie/add" component={AddMovie} />
      <Route path="/movie/show" component={ShowMovie} />
    </div>
  );
}

export default App;
