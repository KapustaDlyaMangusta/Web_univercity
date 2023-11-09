import { createContext, useEffect, useState } from 'react';
import { fetchCarrots } from '../api/carrots.api';

export const CatalogContext = createContext({
  searchQuery: '',
  sortOption: '',
  filterOption: '',
  searchQueryChangeHandler: (event) => {
  },
  sortOptionChangeHandler: (event) => {
  },
  filterOptionChangeHandler: (event) => {
  },
  items: []
})

export const CatalogContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const [items, setItems] = useState([]);

  useEffect(() => {
    const setItemsTimeoutFn = setTimeout(async () => {
      try {
        const catalogItems = await fetchCarrots(searchQuery, filterOption, sortOption);

        setItems(catalogItems);
      }
      catch{
        setItems([]);
      }
    }, 600)

    return () => {
      clearTimeout(setItemsTimeoutFn)
    };
  }, [searchQuery, sortOption, filterOption]);

  const searchQueryChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  }

  const sortOptionChangeHandler = (event) => {
    setSortOption(event.target.value);
  }

  const filterOptionChangeHandler = (event) => {
    setFilterOption(event.target.value);
  }

  return (<CatalogContext.Provider value={ {
    searchQuery,
    sortOption,
    filterOption,
    searchQueryChangeHandler,
    sortOptionChangeHandler,
    filterOptionChangeHandler,
    items
  } }>{ children }</CatalogContext.Provider>);
}
