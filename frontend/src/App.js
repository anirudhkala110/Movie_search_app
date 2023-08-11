import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './components/Search/Search';
import { useState } from 'react';
import axios from 'axios'
import Result from './components/Result/Result';
import Detail from './components/Details/Detail';
function App() {
  const [state, setState] = useState({
    search: '',
    results: [],
    selected: {}
  })
  const handleInput = (event) => {
    let search = event.target.value
    setState((prevState) => {
      return { ...prevState, search: search }
    })
  }
  const SearchResult = (event) => {
    if (event.key === "Enter") {
      axios.get(' http://www.omdbapi.com/?i=tt3896198&apikey=ca749ece' + "&s=" + state.search)
        .then(res => {
          console.log(res)
          setState(prevState => {
            return { ...prevState, results: res.data.Search }
          })
        })
        .catch(err => console.log(err))
    }
  }
  const openDetail = (id) => {
    axios.get(' http://www.omdbapi.com/?i=' + id + '&apikey=ca749ece')
      .then(({ data }) => {
        setState((prevState) => {
          return { ...prevState, selected: data }
        })
      })
      .catch(err => console.log(err))
  }

  const close = () => {
    setState((prevState) => { return { ...prevState, selected: {} } })
  }

  return (
    <>

      <div className="w-100 main-wrapper bg-dark d-flex flex-column align-items-center min-vh-100">
        {typeof state.selected.Title != "undefined" ? <Detail selected={state.selected} close={close} /> : <header className='w-100 text-center text-light mt-5'>
          <h2>Movie Search</h2>
          <Search handleInput={handleInput} SearchResult={SearchResult} />
          <div className="container">
            <div className="row">
              {
                state.results.map((result, i) => (
                  <div className="col-12 col-sm-3 col-md-4 col-lg-3 ">
                    <Result result={result} openDetail={openDetail} />
                  </div>
                ))
              }
            </div>
          </div>
        </header>}

      </div>

    </>
  );
}

export default App;
