import useAppState from './hooks/useAppState';
import Searchbar from './SSCompos/SearchBar/SE_Index';
import Content from './SSCompos/Content/Output/ContentIndex';
import Content3 from './SSCompos/Content/Output/3content';
import Content2 from './SSCompos/Content/Output/2Content';
import Spinner from './SSCompos/Spinner/Index';

const StockSearch = () => {
  const { symbolData, isLoading, handleSearch } = useAppState();

  return (
    <div style={{padding: 20}} >
      <Searchbar searchSubmit={handleSearch} />
      <main>{isLoading ? <Spinner /> : <Content data={symbolData} />}</main>
      <main>{isLoading ? <Spinner /> : <Content3 data={symbolData} />}</main>
      <main>{isLoading ? <Spinner /> : <Content2 data={symbolData} />}</main>

    </div>
  );
};

export default StockSearch;