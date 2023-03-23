import { Grid, Container, Card } from '@mantine/core';
import Card_Port_ML from '../../Content/Cards/Port_ML_Card';
import AI_Card from '../../Content/Cards/What_is_AI';
import Card_What_Is from '../../Content/Cards/What_is_AI';
import Services_Card from '../../Content/Cards/Card_Services';
import Importances from '../../Content/Cards/Math_Importance';
import Card_ML from '../../Content/Cards/What_Is_Index';
import Searchbar from 'views/StockSearch/SSCompos/SearchBar/SE_Index';
import useAppState from 'views/StockSearch/hooks/useAppState';
import Spinner from 'views/StockSearch/SSCompos/Spinner/Index';
import Content2 from '../../Content/Output/2Content';
import Content3 from '../../Content/Output/3content';

import { Box, NavLink } from '@mantine/core';

function Nested_Nav() {
  return ( 
    <Box w={240}>
      <NavLink
        label="Artificial Intelligence Methods"
        childrenOffset={28}
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Reinforcement Learning Methods"
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </Box>
  );
}


function Machine_Cards_Index() {
  const {isLoading, symbolData} = useAppState();

    return (


<Grid grow>
<Container>
  </Container>
<Grid.Col span={4}>
<Container>
{/* <main>{isLoading ? <Spinner /> : <Content2 data={symbolData} />}</main> */}
</Container>
</Grid.Col>
<Grid.Col span={4}>
<Container>
{/* <main>{isLoading ? <Spinner /> : <Content3 data={symbolData} />}</main> */}
</Container>
</Grid.Col>
<Grid.Col span={4}>      
<Container>
<Services_Card/>
</Container>
</Grid.Col>
<Grid.Col span={4}>
<Container>
<Card_Port_ML/>
</Container>
</Grid.Col>
</Grid>
  );
}

export default Machine_Cards_Index;