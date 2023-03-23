// import Current_Daily_Indicators from './Analytic_Dash/Curr_Ind';
// import Series_Simulations_Modeling from './Analytic_Dash/Time_Series';
// import Demo_con from './Analytic_Dash/Funda_Analysis';
import { Tabs } from '@mantine/core';
// import Backtesting_Page from './Analytic_Dash/Backtesting_ST';
// import Performance_page from './Analytic_Dash/Performance_Stren';



function Tabs_Demo() {
  return (
    <Tabs color="yellow" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first"> Current Daily Indicators</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">Series Simulations & Modeling</Tabs.Tab>
        <Tabs.Tab value="third"  color="red"> Fundamental Analysis</Tabs.Tab>
        <Tabs.Tab value="fourth"  color="green"> Performance and Strength</Tabs.Tab>
        <Tabs.Tab value="fifth"  color="pink"> Backtesting Strategies </Tabs.Tab>
      </Tabs.List>
      <div className="content">
      <Tabs.Panel value="first" pt="xs">
      {/* <Current_Daily_Indicators/> */}
      </Tabs.Panel>
      <Tabs.Panel value="second" pt="xs">
      {/* <Series_Simulations_Modeling/> */}
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
      {/* <Demo_con/> */}
      </Tabs.Panel>
      <Tabs.Panel value="fourth" pt="xs">
      {/* <Performance_page/> */}
    </Tabs.Panel>
    <Tabs.Panel value="fifth" pt="xs">
    {/* <Backtesting_Page/> */}
    </Tabs.Panel>
      </div>
    </Tabs>
  );
}

export default Tabs_Demo;