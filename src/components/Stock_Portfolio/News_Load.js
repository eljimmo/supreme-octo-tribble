import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import NewsCard from "../Stock_Portfolio/News_Card";
import {
  ServicesContainer2,
  ServicesCard,
  ServicesH2,
  ServicesP
} from '../Services/ServicesElements';

export default function News(props) {
  const [news, setNews] = React.useState([]);

  const fetchData = () => {
    
    let url = "";
    if (props.basic === "news?category=general") {
      url =
        "https://finnhub.io/api/v1/news?category=general&token=c94i99aad3if4j50rvn0";
    } else {
      const today = new Date();
    const pastDate = new Date();
    let Day1 = today.getDate();
    let Day2 = pastDate.getDate();
    let Month1 = today.getMonth();
    if (today.getMonth() < 10) {
      Month1 = "0" + today.getMonth();
    }

    let Month2 = pastDate.getMonth();
    if (pastDate.getMonth() < 10) {
      Month2 = "0" + pastDate.getMonth();
    }

    if (today.getDate() < 10) {
      Day1 = "0" + today.getDate();
    }

    if (pastDate.getDate() < 10) {
      Day2 = "0" + pastDate.getDate();
    }
    const Year1 = today.getFullYear();
    const Year2 = pastDate.getFullYear();
      url = "https://finnhub.io/api/v1/".concat(
        props.basic,
        props.symbol,
        "&from=",
        Year2,
        "-",
        Month2,
        "-",
        Day2,
        "&to=",
        Year1,
        "-",
        Month1,
        "-",
        Day1,
        "&token=c94i99aad3if4j50rvn0"
      );
    }
    axios.get(url).then((res) => {
      const pData = res.data;
      //console.log(url);
      setNews(pData);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  let final1 =[];
  for(let i=0;i<news.length && i<10;i++ )
  {
    final1.push(


      <ServicesContainer2 id="services">
      <ServicesCard>
             <NewsCard data={news[i]} />
        <ServicesH2>{news[i].headline}</ServicesH2>
        <ServicesP>{news[i].summary}</ServicesP>
        <ServicesP>{news[i].source}</ServicesP>
        <ServicesP>{news[i].url}</ServicesP>
      </ServicesCard>
      </ServicesContainer2>
    )
  }
  
  return <>{final1}</>;
}
