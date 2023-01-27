
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/seach-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState([]) // [val, setValue]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  

  useEffect(() => {
    console.log(`effect fired`)
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((users) => setMonsters(users)
    )
  }, []);
  console.log(`rendered`)

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })  

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])
 
    const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase()
      setSearchField(searchFieldString)
      
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setTitle(searchFieldString)
    
};

  return (
    <div className="App">
    <h1 className='app-title'>{title}</h1>
    <SearchBox 
      className= 'monsters-search-box'
      onChangeHandler ={onSearchChange} 
      placeholder='searh monsters'
    />
    <br />
    <SearchBox 
      className= 'title-search-box'
      onChangeHandler ={onTitleChange} 
      placeholder='set title'
    />
    { <CardList monsters={filteredMonsters} /> }  
    </div>
  );
}

// class App extends Component {
  
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };

//   }

//   componentDidMount() {

//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((response) => response.json())
//       .then((users) => 
//       this.setState(() => 
//       {return {monsters: users}
//     },
//     ))
//   }

//   onSearchChange =(event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(
//       () => {
//       return{ searchField } 
//     })
//   }


//   render() {

//     const{ monsters, searchField } = this.state
//     const {onSearchChange} = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })  
    
//     return (
//       <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//        <SearchBox 
//        className= 'monsters-search-box'
//        onChangeHandler ={onSearchChange} placeholder='seach monsters'/>
//        <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
//   }
  

export default App;

