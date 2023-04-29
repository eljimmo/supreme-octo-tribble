// import { SimpleGrid, List, Container } from '@mantine/core';



// import { Card, Group, Text, Menu, ActionIcon, Image } from '@mantine/core';



// function Free_Agency() {
//     return (
//       <Card withBorder shadow="sm" radius="md">
//         <Card.Section withBorder inheritPadding py="xs">
//           <Group position="apart">
//             <Text weight={500}>In computational intelligence (CI), an evolutionary algorithm (EA) is a subset of evolutionary computation,[1] a generic population-based metaheuristic optimization algorithm
//             </Text>
        
//           </Group>
//         </Card.Section>
  
//         <Text mt="sm" color="dimmed" size="sm">
//           <Text component="span" inherit color="blue">
//           From the property of elitist offspring acceptance and the existence of the optimum it follows that per generation
//            k an improvement of the fitness function is guaranteed.

//         </Text>{' '}
//           An EA uses mechanisms inspired by biological evolution, such as reproduction, mutation, recombination, and selection. Candidate solutions to the optimization problem play the role of individuals in a population, and the fitness function determines the quality of the solutions (see also loss function). Evolution of the population then takes place after the repeated application of the above operators.                </Text>
  
//         <Card.Section mt="sm">
//         <Container>
      
//         <List>
//         <List.Item>Evolution-Strategy-Bayesian Agent </List.Item>
//         <List.Item>Evolution Strategy Agent </List.Item>

  
//       </List>      
//       </Container>
//       </Card.Section>
  
//         <Card.Section inheritPadding mt="sm" pb="md">
//           <SimpleGrid cols={3}>

//           </SimpleGrid>
//         </Card.Section>
//       </Card>
//     );
//   }

// function Agent_card() {
//   return (
//     <Card withBorder shadow="sm" radius="md">
//       <Card.Section withBorder inheritPadding py="xs">
//         <Group position="apart">
//           <Text weight={500}>Evolutionary Computation (EC) approaches are inspired by nature and solve optimization problems in a stochastic manner.</Text>
      
//         </Group>
//       </Card.Section>

//       <Text mt="sm" color="dimmed" size="sm">
//         <Text component="span" inherit color="blue">
//         The agent, The environment, The reward function, The action space, The state space...
//             </Text>{' '}
//         Reinforcement learning refers to the type of machine learning technique enabling an agent to learn to interact with an environment (area outside the agent’s borders) by trial and error using reward (feedback from its actions and experiences).              </Text>

//       <Card.Section mt="sm">
//       <Container>
    
//       <List>
//       <List.Item>Turtle Agent </List.Item>
//       <List.Item>Duel-Q-Learning Agent </List.Item>
//       <List.Item>Double-Duel-Q-Learning Agent </List.Item>
//       <List.Item>Duel-Recurrent-Q-Learning Agent </List.Item>
//       <List.Item>Actor-Critic-Agent </List.Item>
//       <List.Item>Actor-Critic-Duel Agent </List.Item>
//       <List.Item>Actor-Critic-Recurrent Agent </List.Item>
//       <List.Item>Actor-Critic-Duel-Recurrent Agent </List.Item>
//       <List.Item>Curiosity-Q-Learning Agent </List.Item>
//       <List.Item>Recurrent-Curiosity-Q-Learning Agent </List.Item>
//       <List.Item>Moving-Average Agent </List.Item>
//       <List.Item>Duel-Curiosity-Q-Learning Agent  </List.Item>
//       <List.Item>Neuro-Evolution-Agent  </List.Item>
//       <List.Item>Neuro Evolution Novelty Search Agent </List.Item>
//       <List.Item>ABCD Strategy Agent  </List.Item>
//       <List.Item>Signal Rolling Agent  </List.Item>
//       <List.Item>Policy Gradient Agent  </List.Item>
//       <List.Item>Q-Learning Agent  </List.Item>
//       <List.Item>Evolution Strategy Agent  </List.Item>
//       <List.Item>Double Q Learning Agent  </List.Item>
//       <List.Item>Recurrent-Q-Learning Agent  </List.Item>
//       <List.Item>Double-Recurrent-Q-Learning Agent  </List.Item>

//     </List>      
//     </Container>
//     </Card.Section>

//       <Card.Section inheritPadding mt="sm" pb="md">
//         <SimpleGrid cols={3}>

//         </SimpleGrid>
//       </Card.Section>
//     </Card>
//   );
// }




// function Deep_Learn_Card() {
//     return (
//       <Card withBorder shadow="sm" radius="md">
//         <Card.Section withBorder inheritPadding py="xs">
//           <Group position="apart">
//             <Text weight={500}>Deep learning is a type of machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge.</Text>
        
//           </Group>
//         </Card.Section>
  
//         <Text mt="sm" color="dimmed" size="sm">
//           <Text component="span" inherit color="blue">
//           Deep learning is an important element of data science, which includes statistics and predictive modeling.
//           </Text>{' '}
//           The adjective "deep" in deep learning refers to the use of multiple layers in the network. The universal approximation theorem for deep neural networks concerns the capacity of networks with bounded width but the depth is allowed to grow.
//                           </Text>
  
//         <Card.Section mt="sm">
//         <Container>
      
//         <List>
//         <List.Item>LSTM </List.Item>
//         <List.Item>LSTM-Sequence2Sequence  </List.Item>
//         <List.Item>Bidirectional-LSTM-Sequence2Sequence</List.Item>
//         <List.Item>LSTM-Sequence2Sequence-vae </List.Item>
//         <List.Item>GRU-Sequence2Sequence </List.Item>
//         <List.Item>Bidirectional-GRU-Sequence2Sequence </List.Item>
//         <List.Item>GRU-Sequence2Sequence-vae  </List.Item>
//         <List.Item>CNN-Sequence2Sequence </List.Item>
//         <List.Item>Dilated-CNN-Sequence2Sequence </List.Item>
//         <List.Item>Bidirectional-LSTM  </List.Item>
//         <List.Item>LSTM-2Path   </List.Item>
//         <List.Item>GRU  </List.Item>
//         <List.Item>Bidirectional-GRU  </List.Item>
//         <List.Item>Bidirectional-LSTM  </List.Item>
       
  
//       </List>      
//       </Container>
//       </Card.Section>
  
//         <Card.Section inheritPadding mt="sm" pb="md">
//           <SimpleGrid cols={3}>

//           </SimpleGrid>
//         </Card.Section>
//       </Card>
//     );
//   }
  
  


// function Agent_Griddings() {
//   return (
//     <SimpleGrid
//       cols={4}
//       spacing="lg"
//       breakpoints={[
//         { maxWidth: '62rem', cols: 3, spacing: 'md' },
//         { maxWidth: '48rem', cols: 2, spacing: 'sm' },
//         { maxWidth: '36rem', cols: 1, spacing: 'sm' },
//       ]}
//     >
//       <Container>
//       <Agent_card/>
//       </Container>
//       <Container>
//         2
//       </Container>
//       <Container>
//         3
//       </Container>
//       <Container>4</Container>
//     </SimpleGrid>
//   )
// }

// export default Agent_Griddings;