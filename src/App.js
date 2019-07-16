import React from 'react';
import {Route, Link} from 'react-router-dom';
import Profile from './Profile';
import Grades from './Grades';
import './App.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstName : "Mike",
            lastName : "Willis",
            grades : [90, 85, 100]
        }
    }

    render() {
      return (
          <div className="App">
              <Link to="/profile">
                  Profile
              </Link>
               -
              <Link to="/grades">
                  Grades
              </Link>
              <Route path="/profile" render={() => <Profile firstName={this.state.firstName} lastName={this.state.lastName}/>}/>
              <Route path="/grades" render={() => <Grades grades={this.state.grades} />} />
          </div>
      );
    }
}

export default App;
