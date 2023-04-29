// import { Container, Button, Grid, SimpleGrid, Skeleton, useMantineTheme, Stack, Input, Flex } from '@mantine/core';
// import Demo_card_fundas from '../Analytic_Dash/Funnda_Card';
// import { Card, List, ThemeIcon, Text, Avatar, Timeline, Box, Badge, Group, Image } from '@mantine/core';
// import { deviation, mean } from 'd3';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label,
//   LineChart,
//   Line,
//   ReferenceArea,  } from 'recharts';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
  
  



// // Just copy in some data from
// // https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=AUD&apikey=<APIKEY>
// //https://cloud.iexapis.com/stable/stock/twtr/chart/max?token=sk_09c6971dee1a4d28801956d73a114c5a


// // const actualValues = rawData["Time Series (Digital Currency Intraday)"];



// // const data = Object.keys(data)
// //   .reverse()
// //   .map(key => {
// //     return {
// //       name: key,
// //       uv: Number(data[key]["1a. price (AUD)"])
// //     };
// //   });








// function Demo_con() {
//   const [stocks, setStocks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const getNewStock = async (event) => {
  

//     event.preventDefault();
//     if (!symbol) {
//       return;
//     }
//     const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=0M9PWWBA6S79C84X`);
//     console.log(response.data);
//     setStocks([...stocks, response.data]);
//     setSymbol('');
//   };


//   const [symbol, setSymbol] = useState('');
//   const handleSymbolChange = (event) => {
//     setSymbol(event.target.value);
//   }; 

//   return (

//     <>
//       <SimpleGrid
//       cols={4}
//       spacing="lg"
//       breakpoints={[
//         { maxWidth: 'md', cols: 3, spacing: 'md' },
//         { maxWidth: 'sm', cols: 2, spacing: 'sm' },
//         { maxWidth: 'xs', cols: 1, spacing: 'sm' },
//       ]}
//     >
//       <div>
//       <Text fz="md" c="blue">
//       Fundamental analysts search for stocks currently trading at prices higher or lower than their real value.
//       </Text>
//       </div>
//       <div>
//       <Text fz="md" c="blue">
//       In contrast, technical analysts favor studying the historical price trends of the stock to predict short-term future trends.
//       </Text>
//       </div>
//       <div>
//       <Text fz="md" c="blue">
//       Fundamental analysis is usually done from a macro to micro perspective to identify securities that are not correctly priced by the market.
//       </Text>
//       </div>
//       <div>
//       <Text fz="md" c="blue">
//       PE ratio is the ratio of a company’s stock price to its earnings per share. Value investors commonly use it as one way to measure if a company is undervalued.
//       </Text>
//       </div>
//       <div>
//       </div>
//     </SimpleGrid>
//       <Container size={1000}>
//       <Text fz="md" c="green">
//       Fundamental analysts search for stocks currently trading at prices higher or lower than their real value.       
//       </Text>
//       </Container>
//       <Card>
//       <Grid grow gutter="xl">
//       <Grid.Col span={4}>
//                <Input
//       variant="filled"
//       placeholder="Select Stock"
//       value={symbol}
//       onChange={handleSymbolChange}
//     />
//       </Grid.Col>
//       <Grid.Col span={4}>
//             <Flex gap="md">
//         <Button  
//         onClick={getNewStock} 
//         variant="outline">
//           Add Data Series
//         </Button>
//     </Flex>
//       </Grid.Col>

      
//       <Grid.Col span={12}>
//       <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Card.Section>
//         <Image
//           src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//           height={160}
//           alt="Norway"
//         />
//       </Card.Section>
//       <Grid.Col span={6}>

//       </Grid.Col>
//       <Grid.Col span={6}>
        
//       </Grid.Col>
//       {/* <Grid.Col span={4}> */}
//         {/* <Card> */}

//       <Group position="apart" mt="md" mb="xs">
//         <Text weight={500}>Norway Fjord Adventures</Text>
//         <Badge color="pink" variant="light">
//           On Sale
//         </Badge>
//       </Group>

//       <Text size="sm" color="dimmed">
//         With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//         activities on and around the fjords of Norway
//       </Text>

//       <Button variant="light" color="blue" fullWidth mt="md" radius="md">
//         Book classic tour now
//       </Button>
//     </Card>
//       </Grid.Col>
//       <Grid.Col span={4}>
//       <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Card.Section>
//         <Image
//           src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//           height={160}
//           alt="Norway"
//         />
//       </Card.Section>

//       <Group position="apart" mt="md" mb="xs">
//         <Text weight={500}>Norway Fjord Adventures</Text>
//         <Badge color="pink" variant="light">
//           On Sale
//         </Badge>
//       </Group>

//       <Text size="sm" color="dimmed">
//         With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//         activities on and around the fjords of Norway
//       </Text>

//       <Button variant="light" color="blue" fullWidth mt="md" radius="md">
//         Book classic tour now
//       </Button>
//     </Card>
//       </Grid.Col>
//       <Grid.Col span={4}>
//       <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Card.Section>
//         <Image
//           src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//           height={160}
//           alt="Norway"
//         />
//       </Card.Section>

//       <Group position="apart" mt="md" mb="xs">
//         <Text weight={500}>Norway Fjord Adventures</Text>
//         <Badge color="pink" variant="light">
//           On Sale
//         </Badge>
//       </Group>

//       <Text size="sm" color="dimmed">
//         With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//         activities on and around the fjords of Norway
//       </Text>

//       <Button variant="light" color="blue" fullWidth mt="md" radius="md">
//         Book classic tour now
//       </Button>
//     </Card>
//       </Grid.Col>
//     </Grid>
//     </Card>


//     </>

//   );
// }
// export default Demo_con;