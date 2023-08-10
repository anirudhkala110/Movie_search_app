import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './components/Search/Search';
import { useState } from 'react';
function App() {
  const [state, setState] = useState({
    search: '',
    results: []
  })
  const handleInput = (event) => {
    let search = event.target.value
    setState((prevState) => {
      return { ...prevState, search: search }
    })
  }

  const SearchResult = (event) => {
    if (event.key === "Enter") {
      alert("Enter")
    }
  }

  return (
    <>

      <div className="w-100 main-wrapper d-flex flex-column align-items-center justify-content-center">
        <header className='w-100 text-center text-light mt-5'>
          <h2>Movie Search</h2>
          <Search handleInput={handleInput} SearchResult={SearchResult} />
        </header>
      </div>

    </>
  );
}

export default App;
