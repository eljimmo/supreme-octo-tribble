import * as React from 'react';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import Title from '../Dashboard/Title';
import axios from 'axios';
import NewsCard from '../Stock_Portfolio/News_Card';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import GaugeChart from 'react-gauge-chart'

export default function Quotes( ) {
    const [news,setNews]= React.useState([])
    axios.get("https://finnhub.io/api/v1/stock/social-sentiment?symbol=SPY&token=c94i99aad3if4j50rvn0").then(res => {
      const pData=res.data;
      console.log(pData);
      setNews(pData);
    })   
    console.log(news);
    // convert the news data to an array then map through it
    const newsArray = Object.entries(news).map(([key, value]) => ({key,value}));
    console.log(newsArray);
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="stats">
                            <div className="column-left">
                                {/* <p> Buzz :</p>
                                <p> Weekly Average :</p>
                                <p> Bullish :</p>
                                <p> Bearish :</p> */}
                            </div>
                            <div className="column-right">
                                {/* <p>{newsArray[0].value.buzz}</p>
                                <p>{newsArray[0].value.weeklyAverage}</p>
                                <p>{newsArray[0].value.bullishPercent}</p>
                                <p>{newsArray[0].value.bearishPercent}</p> */}
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
