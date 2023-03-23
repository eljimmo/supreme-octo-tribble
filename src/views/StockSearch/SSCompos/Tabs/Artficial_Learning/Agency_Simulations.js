import { SimpleGrid, List, Container } from '@mantine/core';



import { Card, Group, Text, Menu, ActionIcon, Image } from '@mantine/core';






function Free_Agency() {
    return (
      <Card withBorder shadow="sm" radius="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>In computational intelligence (CI), an evolutionary algorithm (EA) is a subset of evolutionary computation,[1] a generic population-based metaheuristic optimization algorithm
            </Text>
        
          </Group>
        </Card.Section>
  
        <Text mt="sm" color="dimmed" size="sm">
          <Text component="span" inherit color="blue">
          From the property of elitist offspring acceptance and the existence of the optimum it follows that per generation
           k an improvement of the fitness function is guaranteed.

        </Text>{' '}
          An EA uses mechanisms inspired by biological evolution, such as reproduction, mutation, recombination, and selection. Candidate solutions to the optimization problem play the role of individuals in a population, and the fitness function determines the quality of the solutions (see also loss function). Evolution of the population then takes place after the repeated application of the above operators.                </Text>
  
        <Card.Section mt="sm">
        <Container>
      
        <List>
        <List.Item>Evolution-Strategy-Bayesian Agent </List.Item>
        <List.Item>Evolution Strategy Agent </List.Item>

  
      </List>      
      </Container>
      </Card.Section>
  
        <Card.Section inheritPadding mt="sm" pb="md">
          <SimpleGrid cols={3}>

          </SimpleGrid>
        </Card.Section>
      </Card>
    );
  }


function Learning_Sim_Grid() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: '62rem', cols: 3, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]}
    >
      <Container>
      <Free_Agency/>
      </Container>
      <Container>2</Container>
      <Container>3</Container>
      <Container>4</Container>
      <Container>5</Container>
    </SimpleGrid>
  )
}

export default Learning_Sim_Grid;