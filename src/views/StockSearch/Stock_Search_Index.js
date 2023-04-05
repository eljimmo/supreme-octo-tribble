import useAppState from './hooks/useAppState';
import Searchbar from './SSCompos/SearchBar/SE_Index';
import Content from './SSCompos/Content/ContentIndex';
import Spinner from './SSCompos/Spinner/Index';
// import "./App.css";

const StockSearch = () => {
  const { symbolData, isLoading, handleSearch } = useAppState();

  return (
    <div >
      <Searchbar searchSubmit={handleSearch} />
      <main>{isLoading ? <Spinner /> : <Content data={symbolData} />}</main>
    </div>
  );
};

export default StockSearch;