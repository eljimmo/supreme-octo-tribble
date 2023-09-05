import React from 'react';
import styled from 'styled-components';

const SectorInfoContainer = styled.div`
  display: block;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin: 10px;
  padding: 10px;

`;


const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#f7f8fa')};

@media screen and (max-width: 480px) {
  font-size: 32px;
}
`;

const TopLine = styled.div`
  color: #00b100;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


const TopLine2a = styled.div`
  color: #00b100;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


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
        <SectorInfoContainer>
            <Main />
        </SectorInfoContainer>
    )
}
