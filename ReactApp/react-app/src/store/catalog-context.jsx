import { createContext, useEffect, useState } from 'react';
import { catalogCarrotsData } from '../data/catalog-carrots-data';

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

  const [items, setItems] = useState(catalogCarrotsData);

  useEffect(() => {
    const setItemsTimeoutFn = setTimeout(() => {
      let items = [...catalogCarrotsData];

      switch (filterOption) {
        case 'favorite': {
          items = items.filter(item => item.isFavourite)
          break;
        }
        case 'hotseason': {
          items = items.filter(item => item.isHotSeason)
          break;
        }
        default: {
          break;
        }
      }

      items = items.filter(carrot =>
        carrot.title.toLowerCase()
          .includes(searchQuery.trim().toLowerCase()));

      if (sortOption !== '') {
        items.sort((item1, item2) =>
          (item1[sortOption] > item2[sortOption])
            ? 1
            : (item1[sortOption] < item2[sortOption])
              ? -1
              : 0)
      }

      setItems(items);
    }, 500)

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
