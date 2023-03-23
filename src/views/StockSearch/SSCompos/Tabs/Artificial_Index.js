import { Tabs } from '@mantine/core';
import Agent_Griddings from './Artficial_Learning/Agents_Grid';
import Deep_Learning_gridd from './Artficial_Learning/Deep_Learning';
import Learning_Sim_Grid from './Artficial_Learning/Agency_Simulations';

// Agents</Tabs.Tab>
//         <Tabs.Tab value="second" color="orange" >Deep Learning</Tabs.Tab>
//         <Tabs.Tab value="third" color="yellow">Free Agency & Simulations</Tabs.Tab>
//         <Tabs.Tab value="fourth" color="blue">Reinforcement Learning</Tab



function Artificial_Tab() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List position="apart">
        <Tabs.Tab value="gallery">Agents</Tabs.Tab>
        <Tabs.Tab value="messages" >Deep Learning</Tabs.Tab>
        <Tabs.Tab value="settings" >Free Agency & Simulations</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
      <Agent_Griddings/>
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
      <Deep_Learning_gridd/>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
      <Learning_Sim_Grid/>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Artificial_Tab;