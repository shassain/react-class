import logo from './logo.svg';
import './App.css';
import React from 'react'
import MyComponete from './component/MyComponete'
//JSX
/* className==class
style=style
<label for="">
</label>
HtmlFor=for */
//function App()
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    let { token, user } = this.props
    return (
      <div className="App" >
        <header className="App-header">
          <p>
            <label>Nombre</label>:{user.name} <br />
            <label>Email</label>:{user.email}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            token: {token}
          </a>
          <MyComponete usuario={user} />
        </header>
      </div>
    );
  }
}

export default App;
