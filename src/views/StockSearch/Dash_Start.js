// import Current_Daily_Indicators from '././Analytic_Dash/Curr_Ind';
// import Series_Simulations_Modeling from './Analytic_Dash/Time_Series';
// import Demo_con from './Analytic_Dash/Funda_Analysis';
import { Tabs } from '@mantine/core';
// import Backtesting_Page from './Analytic_Dash/Backtesting_ST';
// import Performance_page from './Analytic_Dash/Performance_Stren';
import StockSearch from '../StockSearch/Stock_Search_Index';
import { Icon3dCubeSphere, IconAlphabetGreek, IconBinaryTree, IconTriangleSquareCircle, IconFocusCentered } from '@tabler/icons-react';
// import StockPrediction from '../StockSearch/Stock_Pred';
// import App from './DataChart';
// import App from '../StockSearch/Testing/Index';
import CardApp from '../StockSearch/Testing/Card_Index';

function Tabs_Demo() {
  return (
    
    <Tabs color="yellow" defaultValue="first">
      <br/>
      <Tabs.List grow>
        {/* <Tabs.Tab value="first"> Current Indicators & Movement</Tabs.Tab> */}
             <Tabs.Tab icon={<IconTriangleSquareCircle size="0.9rem" color='#5a40bf' />} value="first" color="blue">Current Indicators & Movement</Tabs.Tab>
        <Tabs.Tab icon={<IconFocusCentered size="0.9rem" color='#5a40bf' />} value="second" color="blue">Simple Series Simulations & Modeling</Tabs.Tab>
        <Tabs.Tab icon={<IconBinaryTree size="0.9rem" color='#5a40bf' />} value="third"  color="blue"> Advanced Fundamental Analysis</Tabs.Tab>
        <Tabs.Tab icon={<Icon3dCubeSphere size="0.9rem" color='#5a40bf'/>} value="fourth"  color="blue"> Regressive Performance and Strength</Tabs.Tab>
        <Tabs.Tab icon={<IconAlphabetGreek size="0.9rem" color='#5a40bf'/>} value="fifth"  color="blue"> Variable Time Series Modeling </Tabs.Tab>
      </Tabs.List>
      <div className="content">
      <Tabs.Panel value="first" pt="xs">
      <StockSearch/>
      <CardApp/>

      </Tabs.Panel>
      <Tabs.Panel value="second" pt="xs">
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
      </Tabs.Panel>
      <Tabs.Panel value="fourth" pt="xs">
      {/* <App/> */}
    </Tabs.Panel>
    <Tabs.Panel value="fifth" pt="xs">
    {/* <Backtesting_Page/> */}
    </Tabs.Panel>
      </div>
    </Tabs>
  );
}

export default Tabs_Demo;