import React from "react";
import {
  Card,
  CardHeader,
  Row,
  Col,
} from "reactstrap";
import Tabs_Demo from './StockSearch/SSCompos/Tabs/Analytic_Dash_Index';
// import Tabs_Demo from './views/StockSearch/SSCompos/Tabs/Analytic_Dash_Index';
import { Skeleton, Container, Textarea, Group, Text, Menu, ActionIcon, Image, SimpleGrid, Select, NumberInput, Space, Button, Tooltip, Box, List } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';
import { Badge, NavLink, Navbar, ScrollArea, Grid, rem, MantineProvider  } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';



function Dashboard(props) {
  return (
    <>

<MantineProvider theme={{ colorScheme: 'light' }}>


 <Grid justify="space-between">
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>1</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
    </MantineProvider>

{/* <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
      Header logo
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        ScrollArea
      </Navbar.Section>

      <Navbar.Section>
      Footer
      </Navbar.Section>
    </Navbar> */}


{/* 

 <Box w={240}>
      <NavLink label="With icon" icon={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        label="With right section"
        icon={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink label="Disabled" icon={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        icon={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="filled"
        active
      />
    </Box> */}
{/* 
<Tabs defaultValue="gallery" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs> */}

       {/* <Tabs variant="outline" radius="xs" orientation="vertical" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>Gallery</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pl="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pl="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pl="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs> */}
          {/* <div className="content">
          <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
              <Col className="text-left" sm="6">
              <Text component="span" inherit color="green"> Welcome to Leibniz Analytica; Machine Learning and Artificial Intelligence Software for Stock & Commodity Investors.</Text>
                  </Col>
                  </CardHeader>
                  </Card>
                  </Col>
                  </Row>
                  <Tabs_Demo/>

        </div> */}



    </>
  );
}

export default Dashboard;
