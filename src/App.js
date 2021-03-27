import React, {Component} from 'react'

import randomUser from './firstRandomUser'
import RandomUser from './RandomUser'

import './index.css'

class App extends Component {
  constructor() {
      super()
      this.state = {
          text: "My name is",
          answer: this.formName(randomUser.name.first, randomUser.name.last),
          randomButtonText: "RANDOM USER",
          randomUser
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
      this.setState({randomButtonText: "Loading..."})
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(response => {
        this.setState({ randomUser: response.results[0], 
                        answer: this.formName(response.results[0].name.first,
                                              response.results[0].name.last)
        })
        this.setState({randomButtonText: "RANDOM USER"})
      })
  }

  // Handlers

  handleClick(e) {
      this.setState({randomButtonText: "Loading..."})
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(response => {
        this.setState({ randomUser: response.results[0], 
                        answer: this.formName(response.results[0].name.first,
                                              response.results[0].name.last)
        })
        this.setState({randomButtonText: "RANDOM USER"})
      })
  }
  
  handleHover(e) {
      this.setState({text: `My ${e.target.name} is`})
      this.setState({answer: eval(`this.get${e.target.name}()`)})
  } 

  // Helper functions

  formName(firstName, lastName) {
    firstName = firstName.toUpperCase()
    lastName = lastName.toUpperCase()
    firstName = firstName[0] + firstName.slice(1).toLowerCase()
    lastName = lastName[0] + lastName.slice(1).toLowerCase();
    return firstName + ' ' + lastName
  }

  getName = () => this.formName(this.state.randomUser.name.first,
                                this.state.randomUser.name.last)

  getEmail = () => this.state.randomUser.email

  getAge = () => this.state.randomUser.dob.age

  getPhone = () => this.state.randomUser.phone

  getPassword = () => this.state.randomUser.login.password

  getAddress = () => (this.state.randomUser.location.street.number + ', ' +
                      this.state.randomUser.location.street.name)

  render() {
    return (
      <div className="ground">
          <div className="back"></div>
          <div className="fore">
              <div className="container">
                  <div className="container-back"></div>
                  <RandomUser 
                    data={this.state}
                    handleClick={(e) => this.handleClick(e)}
                    handleHover={(e) => this.handleHover(e)}
                  />
              </div>
          </div>
      </div>
    )
  }
}

export default App
