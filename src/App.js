import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calculator } from './Components/MainComonents/Calculator'
import { CardList } from './Components/Card-List/Card-List.Component'
import { SearchBox } from './Components/SearchBox/Search-Box.Component'
export class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      sarchFields: '',
      monsters: []

    }

  }

  handelChange(e) {
    this.setState({ sarchFields: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(users =>
        this.setState({ monsters: users })

      );

  }

  render() {

    const { monsters, sarchFields } = this.state;
    const filterMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(sarchFields.toLowerCase())

    ));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handelChange={this.handelChange.bind(this)}></SearchBox>
        <CardList monsters={filterMonsters} >
        </CardList>
      </div>
    );
    // return <Calculator />
  }

}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
