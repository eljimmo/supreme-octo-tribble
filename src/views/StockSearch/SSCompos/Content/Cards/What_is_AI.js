// import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, Grid } from '@mantine/core';




// import { Box, NavLink } from '@mantine/core';

// function Nested_Nav_AI() {
//   return (
//     <Box w={240}>
//       <NavLink
//         label="Artificial Intelligence Methods"
//         childrenOffset={28}
//       >
//         <NavLink label="Turtle Agent" component="a" href="/home" target="_blank" />
//         <NavLink label="Duel-Q-Learning Agent" component="a" href="/home" target="_blank" />
//         {/* <NavLink label="Double-Duel-Q-Learning Agent"  component="a" href="/home" target="_blank"> */}
//         <NavLink label="Duel-Recurrent-Q-Learning Agent" component="a" href="/home" target="_blank"/>
//         <NavLink label="Actor-Critic-Agent"  component="a" href="/home" target="_blank"/>
//         <NavLink label="Actor-Critic-Duel Agent" component="a" href="/home" target="_blank" />
//         <NavLink label="Actor-Critic-Recurrent Agent" component="a" href="/home" target="_blank" />
//           <NavLink label="Actor-Critic-Duel-Recurrent Agent" component="a" href="/home" target="_blank" />
//           <NavLink label="Curiosity-Q-Learning Agent" component="a" href="/home" target="_blank" />
//           <NavLink label="Recurrent-Curiosity-Q-Learning Agent" component="a" href="/home" target="_blank" />
//           <NavLink label="Moving-Average Agent" component="a" href="/home" target="_blank" />
//           <NavLink label="Duel-Curiosity-Q-Learning Agent" component="a" href="/home" target="_blank" />

//         {/* </NavLink> */}
//       </NavLink>

//     </Box>
//   );
// }



// function Nested_Nav_ML() {
//   return (
//     <Box w={240}>

//       <NavLink
//         label="Reinforcement Deep Learning Methods"
//         childrenOffset={28}
//       >
//         <NavLink label="LSTM" component="a" href="/home" target="_blank"/>
//         <NavLink label="LSTM-Sequence2Sequence" component="a" href="/home" target="_blank" />
//         <NavLink label="Bidirectional-LSTM-Sequence2Sequence" component="a" href="/home" target="_blank" />
//         <NavLink label="LSTM-Sequence2Sequence-vae" component="a" href="/home" target="_blank" />
//         <NavLink label="GRU-Sequence2Sequence" component="a" href="/home" target="_blank" />
//         <NavLink label="Bidirectional-GRU-Sequence2Sequence" component="a" href="/home" target="_blank" />
//         <NavLink label="GRU-Sequence2Sequence-vae" component="a" href="/home" target="_blank" />
//         <NavLink label="CNN-Sequence2Sequence" component="a" href="/home" target="_blank" />
//         <NavLink label="Dilated-CNN-Sequence2Sequence" component="a" href="/home" target="_blank" />
//         <NavLink label="Bidirectional-LSTM" component="a" href="/home" target="_blank" />
//         <NavLink label="LSTM-2Path" component="a" href="/home" target="_blank" />
//         <NavLink label="Bidirectional-LSTM" component="a" href="/home" target="_blank" />
//         <NavLink label="Bidirectional-GRU" component="a" href="/home" target="_blank" />


//       </NavLink>
//     </Box>
//   );
// }



// function Nested_Nav_Free_Agency() {
//   return (
//     <Box w={240}>

//       <NavLink
//         label="Free Agency & Simulations"
//         childrenOffset={28}
//       >
//         <NavLink label="Evolution Strategy Agent" component="a" href="/home" target="_blank"/>
//         <NavLink label="Evolution-Strategy-Bayesian Agent" component="a" href="/home" target="_blank" />
//         <NavLink label="Monte-Carlo-Drift" component="a" href="/home" target="_blank" />
//         <NavLink label="Multivariate-Drift-Monte-Carlo" component="a" href="/home" target="_blank" />
//         <NavLink label="Monte-Carlo-Dynamic-Volatility" component="a" href="/home" target="_blank" />
//         <NavLink label="Monte-Carlo-Drift" component="a" href="/home" target="_blank" />


//       </NavLink>
//     </Box>
//   );
// }

// function AI_Card() {
//     return (
//       <Card withBorder shadow="sm" radius="md">
//         <Card.Section withBorder inheritPadding py="xs">
//           <Group position="apart">
//             <Text weight={500}> What is Artificial Intelligence? </Text>
//             <Menu withinPortal position="bottom-end" shadow="sm">
//               <Menu.Target>
//                 <ActionIcon>
//                 </ActionIcon>
//               </Menu.Target>
  
//               <Menu.Dropdown>
//               </Menu.Dropdown>
//             </Menu>
//           </Group>
//         </Card.Section>
  
//         <Text mt="sm" color="dimmed" size="sm">
//         <Text>{' '}
//         Artificial Intelligence can be defined as the computing ability to
//         </Text>{' '}
//           <Text component="span" inherit color="blue">
//           idiosyncratically mimick bio evolutionary processes for solving processes and completing tasks found in nature that can be percieved as intelligent respectibe to intelligence exhibited by living organisms.
//           </Text>{' '}
//           Creating the capabilty for an agent in an enviroment to update its opwn precesses and problem solving capabilites based upon the rewards of its approch in each respective iteration. The ability to self update and self learn, self govern and self regulate. These actions and the rewards resulting from them dictate the characterisics found to be as good in a greater system. 
//         </Text>
  
//         <Card.Section mt="sm">
//         <Grid>
//       <Grid.Col span={4}>
//         <Nested_Nav_AI />
//       </Grid.Col>
//       <Grid.Col span={4}>
//         {/* <Nested_Nav_ML /> */}
//       </Grid.Col>
//       <Grid.Col span={4}>
//         {/* <Nested_Nav_Free_Agency /> */}
//       </Grid.Col>

//     </Grid>
//         </Card.Section>
  
//         <Card.Section inheritPadding mt="sm" pb="md">
//           <SimpleGrid cols={3}>

//           </SimpleGrid>
//         </Card.Section>
//       </Card>
//     );
//   }

//   export default AI_Card;
