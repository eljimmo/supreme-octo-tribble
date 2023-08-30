import React from 'react';
import './styles.css';
// import {
//   HeroContainerTransparent,
//   HeroContainer252525,
//   AnimatedGradientText,
//   HeroContent2,
//   HeroH1,
//   HeroP,
//   HeroContainer,
//   HeroContent

// } from "../../components/HeroSection/HeroElements";

import {
  TopLine2a,
  TopLine,
  Heading,
  Subtitle,
} from '../../components/InfoSection/InfoElements';

//Temporarily store data here
const PostsData = [
    {
      "category": "Trading Bots",
      // "title": "CNN Acquire BEME",
      "text": "testing strategies with a backtesting then run the trading bot in Dry-run.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Analytical Tool Development",
      // "title": "Nomad Lifestyle",
      "text": "provides users with financial tools to monitor investments and analyze stock behavior.",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Portfolio Optimization",
      // "title": "React and the WP-API",
      "text": " committed to translating research into practice and profits.",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    
  ]
  
  
  // Start App
  
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
  class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <h1>Understanding Artificial Intelligence</h1>
          <p>Arriving Soon</p>
        </div>
      </section>
    }
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <TopLine className="card-header--title">{category}</TopLine>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <Heading className="date">Releasing 2024</Heading>
          <TopLine2a>{this.props.title}</TopLine2a>
          <Subtitle className="body-content">{this.props.text}</Subtitle>
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
  

export default function CardApp() {
    return (
        <div>
            <Main />
        </div>
    )
}
