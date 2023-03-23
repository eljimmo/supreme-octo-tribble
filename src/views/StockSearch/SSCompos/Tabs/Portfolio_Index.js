import { Tabs } from '@mantine/core';
import Demo_Tab_Port from '../Tabs/Portfolio/Tab_Port';

function Portfolio_Tab() {
    return (
        <Tabs defaultValue="chat" inverted>
          {/* <Tabs.Panel value="chat" pb="xs">Portfolio panel</Tabs.Panel> */}
          <Tabs.Panel value="gallery" pb="xs">Watchlist Panel</Tabs.Panel>
          <Tabs.Panel value="account" pb="xs">Portfolio Panel</Tabs.Panel>
    
          <Tabs.List>
            <Tabs.Tab value="chat">
              {/* <Demo_Tab_Port /> */}
            </Tabs.Tab>
            <Tabs.Tab value="gallery">Watchlist</Tabs.Tab>
            <Tabs.Tab value="account">Portfolio</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      );
    }

export default Portfolio_Tab;