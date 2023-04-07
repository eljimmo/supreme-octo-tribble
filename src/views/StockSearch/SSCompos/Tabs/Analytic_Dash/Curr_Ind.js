import { useMantineTheme } from '@mantine/core';
// import useAppState from 'views/StockSearch/hooks/useAppState';
// import Searchbar from 'views/StockSearch/SSCompos/SearchBar/SE_Index';
// import Content from 'views/StockSearch/SSCompos/Content/Output/ContentIndex';
// import Spinner from 'views/StockSearch/SSCompos/Spinner/Index';
import { Grid, Container, Card } from '@mantine/core';
// import Content2 from '../../Content/Output/2Content';
// import Content3 from '../../Content/Output/3content';
const PRIMARY_COL_HEIGHT = 300;

function Current_Daily_Indicators(data) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  // const { symbolData, isLoading, handleSearch } = useAppState();

  return (
    <div >
        {/* <Searchbar searchSubmit={handleSearch} /> */}
        {/* <main>{isLoading ? <Spinner /> : <Content data={symbolData} />}</main> */}
        <Grid grow>
<Container>
  </Container>
<Grid.Col span={4}>
<Container>
Content2 data = symbolData
{/* <main>{isLoading ? <Spinner /> : <Content2 data={symbolData} />}</main> */}
</Container>
</Grid.Col>
<Grid.Col span={4}>
<Container>
Content3 data = symbolData

{/* <main>{isLoading ? <Spinner /> : <Content3 data={symbolData} />}</main> */}
</Container>
</Grid.Col>
</Grid>
    </div>
  );
}
export default Current_Daily_Indicators;