import { Tabs } from '@mantine/core';
import Artificial_Layout from './views/Artificial_Int';
// import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import Dashboard from './views/Dashboard';
export default function T_Demo() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" >Gallery</Tabs.Tab>
        <Tabs.Tab value="messages" >Messages</Tabs.Tab>
        <Tabs.Tab value="settings" >Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        <Artificial_Layout/>
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        <Dashboard/>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}