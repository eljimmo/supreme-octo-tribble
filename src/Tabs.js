import { Tabs } from '@mantine/core';
import Artificial_Layout from './views/Artificial_Int';
// import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import Dashboard from './views/Dashboard';
import Machine_Learning_Layout from './views/Machine_Learning_Index';


export default function T_Demo() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        {/* <Tabs.Tab value="gallery" >Artificial</Tabs.Tab> */}
        <Tabs.Tab value="messages" >Dashboard</Tabs.Tab>
        {/* <Tabs.Tab value="settings" >Machine_Learning</Tabs.Tab> */}
      </Tabs.List>

      {/* <Tabs.Panel value="gallery" pt="xs">
        <Artificial_Layout/>
      </Tabs.Panel> */}

      <Tabs.Panel value="messages" pt="xs">
        <Dashboard/>
      </Tabs.Panel>

      {/* <Tabs.Panel value="settings" pt="xs">
       <Machine_Learning_Layout/>
     </Tabs.Panel> */}
    </Tabs>
  );
}