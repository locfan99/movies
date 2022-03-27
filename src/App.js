import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTempalte";
import "./sass/index.scss";
import Home from "./pages/Home";
import Footer from "./templates/Footer";
import React from "react";
import Detail from './pages/Detail'
import Login from "./templates/Login";
import { Route } from "react-router-dom";
import XemPhim from "./pages/XemPhim";
import register from "./templates/register";
import Admin from './pages/Admin'
import AdminTemplate from "./templates/AdminTemplate";
import Films from './pages/Films'
import AddPhim from "./pages/AddPhim";
import Edit from "./pages/Edit";
import Newsman from "./pages/Newsman";
import Contact from "./pages/Contact";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/footer" exact Component={Footer} />
        <HomeTemplate path="/thongtin" exact Component={Newsman} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <Route path='/login' exact component={Login} />
        <Route path='/xemPhim/:id' exact component={XemPhim} />
        <Route path='/register' exact component={register} />
        <AdminTemplate path='/admin' exact Component={Admin} />
        <AdminTemplate path='/admin/films' exact Component={Films}/>
        <AdminTemplate path='/admin/films/addPhim' exact Component={AddPhim}/>
        <AdminTemplate path='/admin/films/edit/:id' exact Component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
