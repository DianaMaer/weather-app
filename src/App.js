import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=177c1eb7d3293c259b90829ca5283840&units=metric')
      .then(res => res.json())
        .then(data => this.setState({data, isLoaded: true,}))
  }

  fetchOnSearch = (text) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=177c1eb7d3293c259b90829ca5283840&units=metric`)
      .then(res => res.json())
        .then(data => this.setState({data}))
  }

  render(){
    const {data, isLoaded } = this.state;
    //console.log(data);
    return (
      <div className="app-container">
        <Navbar />
        <Switch>
         <Route exact path='/' render ={
            () => data && (<Home {...data} onSearch={this.fetchOnSearch} />)
            } />
          <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer />
      </div>
       );
  }
}

export default App;
