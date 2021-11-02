import Main from './components/Main/Main';
// import Request from './components/Request/Request';
import NotFound from "./components/404/404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom";


import './App.css';

const MainApp = () => {
  return (
    <div className="App">
     
      <div>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect from="/" to="/home" />
          </Route>

          <Route
            path="/home"
            render={() => (
              <Main/>
            )}
          />
          {/* <Route
            path="/request"
            render={() => (
              <Request/>
            )}
          /> */}
              
          <Route path="*" render={() =>  <NotFound/>} />
        </Switch>
        </div>
        <Footer /> 
     
    </div>
  );
}





let App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainApp />
    </BrowserRouter>
  );
};
export default App;