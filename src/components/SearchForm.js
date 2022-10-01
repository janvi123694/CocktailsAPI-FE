import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext(); 
  const searchValue = React.useRef(''); 

  const searchCocktail = () => {
    const val = searchValue.current.value
    setSearchTerm(val)
  }

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSumit =(e)=>{
    e.preventDefault(); 
    console.log('ehhl')
  }
  return (
      <section className="section-search">
          <form className='search-form' onSubmit={handleSumit}>
              <label htmlFor='name'> search your cocktail</label>
              <input type='text' id='name' ref={searchValue}
                onChange={searchCocktail}
              />
          </form>
      </section>
  );
}

export default SearchForm
