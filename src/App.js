import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Loading from './components/Loading';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
      error: false,
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(lon, lat);
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=177c1eb7d3293c259b90829ca5283840&units=metric`)
      .then(res => res.json())
        .then(data => this.setState({data, isLoaded: true,}))
    }, (error)=> this.setState({error: true}))
  }

  fetchOnSearch = (text) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=177c1eb7d3293c259b90829ca5283840&units=metric`)
      .then(res => res.json())
        .then(data => this.setState({data}))
  }

  render(){
    const {data, isLoaded } = this.state;
  
    const renderData = () => {
      if (data){
        return <Home {...data} onSearch={this.fetchOnSearch} />
      } else if (this.state.error){
        return <Error />
      } else {
        return <Loading loading={!this.state.data}/>
      } 
    }
    return (
      <div className="app-container">
        <Navbar />
        <Switch>
         <Route exact path='/' render = {()=> renderData() } />
         <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer />
      </div>
       );
  }
}

export default App;
