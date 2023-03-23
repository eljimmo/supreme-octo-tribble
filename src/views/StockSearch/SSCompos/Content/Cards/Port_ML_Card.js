import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, NavLink, Box } from '@mantine/core';


function Nested_Nav_ML() {
  return (
    <Box w={240}>

      <NavLink
        label="Reinforcement Deep Learning Methods"
        childrenOffset={28}
      >
        <NavLink label="LSTM" component="a" href="/home" target="_blank"/>
        <NavLink label="LSTM-Sequence2Sequence" component="a" href="/home" target="_blank" />
        <NavLink label="Bidirectional-LSTM-Sequence2Sequence" component="a" href="/home" target="_blank" />
        <NavLink label="LSTM-Sequence2Sequence-vae" component="a" href="/home" target="_blank" />
        <NavLink label="GRU-Sequence2Sequence" component="a" href="/home" target="_blank" />
        <NavLink label="Bidirectional-GRU-Sequence2Sequence" component="a" href="/home" target="_blank" />
        <NavLink label="GRU-Sequence2Sequence-vae" component="a" href="/home" target="_blank" />
        <NavLink label="CNN-Sequence2Sequence" component="a" href="/home" target="_blank" />
        <NavLink label="Dilated-CNN-Sequence2Sequence" component="a" href="/home" target="_blank" />
        <NavLink label="Bidirectional-LSTM" component="a" href="/home" target="_blank" />
        <NavLink label="LSTM-2Path" component="a" href="/home" target="_blank" />
        <NavLink label="Bidirectional-LSTM" component="a" href="/home" target="_blank" />
        <NavLink label="Bidirectional-GRU" component="a" href="/home" target="_blank" />


      </NavLink>
    </Box>
  );
}


function Card_Port_ML() {
    return (
      <Card withBorder shadow="sm" radius="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}> Machine Learning Algorithms in Empirical Asset Pricing </Text>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon>
                </ActionIcon>
              </Menu.Target>
  
              <Menu.Dropdown>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>
       
        <Text mt="sm" color="dimmed" size="sm">
        <Text>{' '}
        Measuring asset risk & other variables as 
        </Text>{' '}
          <Text component="span" inherit color="blue">
           a scientific field and running Algorithms to find nonlinear trends in a data series.
          </Text>{' '}
            Understaning Artificial Intelligence as a mathemetical based approach to creatively solve complex problems of trend prediction. By mimicking the bio evolutionary processes in nature, we can assemble a dymanic approach towards financial pricing with modern day computing technologies and functions.
        </Text>
  
        <Card.Section mt="sm">
        </Card.Section>
  
        <Card.Section inheritPadding mt="sm" pb="md">
        {/* <Nested_Nav_ML/> */}
          {/* <SimpleGrid cols={3}>

          </SimpleGrid> */}
        </Card.Section>
      </Card>
    );
  }

  export default Card_Port_ML;
