import React, { Component } from 'react';
 
// Component personalitzat "Header"
class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <ul>
            <li><a href="#">Inici</a></li>
            <li><a href="#">Sobre nosaltres</a></li>
            <li><a href="#">Contacte</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
 
// Component personalitzat "Main"
class Main extends Component {
  render() {
    return (
      <main>
        <h2>Benvingut a {this.props.title}</h2>
        <p>Aquesta és la pàgina principal de l'aplicació.</p>
      </main>
    );
  }
}
 
// Component personalitzat "Footer"
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Copyright © {new Date().getFullYear()} {this.props.title}</p>
      </footer>
    );
  }
}
 
// Component principal "App"
class App extends Component {
  render() {
    return (
      <div>
        <Header title="Disseny d'Aplicacions Web" />
        <Main title="Aplicació de React.js" />
        <Footer title="IOC- DAW - M9" />
      </div>
    );
  }
}
 
export default App;