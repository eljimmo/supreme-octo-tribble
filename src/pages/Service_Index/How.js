import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Footer from '../../components/Footer/index';
import Overlay from '../../components/Landing/Overlay';
import Map from '../../components/Maps/index';
import Underlay from '../../components/Landing/Underlay';
import EnhancedTable from '../../components/Data/DataOutput/DataTables/Table';


const TopLine1 = styled.div`
  color: #00b100;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


const gradientText = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;


const AnimatedGradientText1 = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 50px;

  letter-spacing: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 200%;
  background-clip: text;
  padding: 20px;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`;


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
`;

const DataDisplay = styled.div`
  background-color: #f4f4f4;
  padding: 5px;
  height: 500px;
  margin-bottom: 5px;
  border-radius: 10px;
  `;


const Analysis = styled.div`
  background-color: #e0e0e0;
  padding: 20px;
`;

const PageWrapper = styled.div`
    max-width: 1500px;
    margin: 75px auto;
    padding: 20px;
    border: 1px solid #00b100;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 1500px) {
        margin: 50px auto;
        padding: 15px;
    }

    @media (max-width: 768px) {
        margin: 30px auto;
        padding: 10px;
        max-width: 90%;
    }

    @media (max-width: 480px) {
        margin: 20px auto;
        padding: 5px;
        max-width: 100%;
    }
`;


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const BoxWrapper = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 10px;
  text-align: center;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const BoxHeader = styled.h3`
  color: #333;
  margin-bottom: 16px;
`;


const HeroContainer = styled.div`
background: 
/* Diagonal split - top left to bottom right */
linear-gradient(to bottom right, transparent 50%, transparent 50%), 
url('container.jpg') left top,

/* Diagonal split - top right to bottom left */
linear-gradient(to bottom left, transparent 50%, transparent 50%), 
url('containers.jpg') right top;

background-size: 50% 100%, 50% 100%; /* Adjust the size as needed */
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

`;




export default function Howitworks() {
  const [isOpen, setIsOpen] = useState(false);
  const sampleData = [10, 12, 15, 20, 27, 35];
  const growth = ((sampleData[sampleData.length - 1] - sampleData[0]) / sampleData[0]) * 100;


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <br/>

      <PageWrapper>
        <AnimatedGradientText1>
        Operations Overview
        </AnimatedGradientText1>

        <DataDisplay>

            
            <Map/>

       
        </DataDisplay>
        <Analysis>
          <h2>Freight Management </h2>

          <EnhancedTable/>
        </Analysis>

        <Row>
          <BoxWrapper>
            <BoxHeader>Financial KPIs
            </BoxHeader>
            <p>Gross Margin:
            Gross Margin: Gross margin is a financial metric that represents the percentage of revenue remaining after deducting the cost of goods sold (COGS).
            </p>

            <p>Operating Expense Ratio (OER)
            Gross Margin: Gross margin is a financial metric that represents the percentage of revenue remaining after deducting the cost of goods sold (COGS).
            Where:

Operating Expenses include all expenses related to the core operations of the business, such as salaries, rent, utilities, and other day-to-day costs.
Total Revenue is the total income generated from sales of goods or services.

Key Points:

A lower OER suggests that a company is more efficient in managing its operating expenses relative to its revenue.
A higher OER indicates that a larger portion of revenue is used to cover operating costs, which might suggest inefficiencies or higher operational costs.
            </p>
            
            <p>
            Revenue Growth Rate: The Revenue Growth Rate is a financial metric that measures the percentage increase or decrease in a company’s revenue over a specific period. 
            It helps to assess how quickly a companys revenue is growing and can be a key indicator of business performance and market potential.
            Where:

    Current Period Revenue is the revenue earned during the current reporting period (e.g., the current fiscal quarter or year).
    Previous Period Revenue is the revenue earned during the previous comparable period.

Key Points:

    A positive Revenue Growth Rate indicates an increase in revenue, reflecting successful business expansion or increased sales.
    A negative Revenue Growth Rate indicates a decrease in revenue, which may signal declining sales or business challenges.
            </p>

          
          </BoxWrapper>


          <BoxWrapper>
            <BoxHeader>Key Performance Indicators | KPIs</BoxHeader>


            <p>Transit Time
            Transit Time: Transit Time refers to the duration it takes for goods to travel from the point of origin to the destination. It is a key performance metric in logistics and transportation, reflecting the efficiency and speed of the shipping process.

The formula to calculate Transit Time is:

Transit Time=Delivery Date−Pickup DateTransit Time=Delivery Date−Pickup Date

Where:

    Delivery Date is the date when the goods reach their final destination.
    Pickup Date is the date when the goods are first collected.

Key Points:

    Shorter Transit Times typically indicate more efficient transportation and faster delivery to customers.
    Longer Transit Times can reflect potential delays or inefficiencies in the supply chain.

Understanding Transit Time helps businesses improve logistics operations and enhance customer satisfaction by ensuring timely deliveries.
            </p>  

            <p>Fleet Utilization Rate
            Fleet Utilization Rate: The Fleet Utilization Rate is a measure of how effectively a company's fleet of vehicles is being used. It indicates the percentage of time that the fleet is operational and actively transporting goods compared to the total available time.

The formula to calculate Fleet Utilization Rate is:

Fleet Utilization Rate=Total Operational HoursTotal Available Hours×100%Fleet Utilization Rate=Total Available HoursTotal Operational Hours​×100%

Where:

    Total Operational Hours is the total number of hours that vehicles in the fleet are actively in use for transporting goods.
    Total Available Hours is the total number of hours the fleet is available for use, including idle time.

Key Points:

    A higher Fleet Utilization Rate suggests that the fleet is being used efficiently, with minimal downtime.
    A lower Fleet Utilization Rate may indicate underutilization of the fleet, potentially leading to higher operational costs.

Monitoring the Fleet Utilization Rate helps companies optimize their fleet management and reduce costs by improving vehicle usage and minimizing idle time.
</p>

            <p>Freight Cost per Mile
            Freight Cost per Mile: Freight Cost per Mile is a financial metric that measures the cost associated with transporting goods for each mile traveled. It helps evaluate the efficiency of transportation operations and the overall cost of shipping.

The formula to calculate Freight Cost per Mile is:

Freight Cost per Mile=Total Freight CostTotal Miles TraveledFreight Cost per Mile=Total Miles TraveledTotal Freight Cost​

Where:

    Total Freight Cost is the total expense incurred for transporting the goods, including fuel, labor, maintenance, and other related costs.
    Total Miles Traveled is the total distance covered during the transportation of the goods.

Key Points:

    A lower Freight Cost per Mile indicates more efficient transportation operations and cost management.
    A higher Freight Cost per Mile may suggest increased expenses or inefficiencies in the transportation process.

Understanding Freight Cost per Mile helps businesses manage transportation budgets, identify cost-saving opportunities, and optimize their logistics operations.
            </p>  


          </BoxWrapper>


          <BoxWrapper>
            <BoxHeader>Statistical Frequency Distribution Table  </BoxHeader>
            <p>
            This table helps identify the most common or frequent entities in each category, providing valuable insights for analysis and decision-making.
            </p>
            <p>
            When creating a Statistical Frequency Distribution Table for a trucking company, especially when considering expansion to include commodities from South America to North America, you should focus on data that provides insights into key operational and financial aspects. Here’s what to highlight in the table:
Key Data to Highlight:

    Commodity Type:
        Purpose: Track the frequency and distribution of different types of commodities transported.
        Example: Count of shipments by commodity type (e.g., Machine Parts, Electronics, etc.).

    Revenue:
        Purpose: Analyze revenue generated across different periods or for different types of shipments.
        Example: Average revenue per shipment or per commodity.

    Net Revenue:
        Purpose: Understand the profitability of different shipments or routes.
        Example: Net revenue distribution by commodity type or region.

    Weight:
        Purpose: Track the distribution of shipment weights to optimize load planning and cost management.
        Example: Frequency of shipments within different weight ranges (e.g., 0-10,000 lbs, 10,000-20,000 lbs).

    Miles Traveled:
        Purpose: Assess the distribution of travel distances and identify trends or opportunities for route optimization.
        Example: Distribution of miles traveled for shipments to and from South America.

    Per Mile Rate:
        Purpose: Evaluate the cost efficiency of different routes or types of shipments.
        Example: Average per mile rate by commodity type or region.

    Transit Time:
        Purpose: Monitor and optimize the efficiency of the transportation process.
        Example: Frequency distribution of transit times to identify potential delays or efficiencies.

    Payment Status:
        Purpose: Track payment collection efficiency and identify patterns in payment issues.
        Example: Frequency of different payment statuses (e.g., Paid, Pending, Overdue).
        </p>
          </BoxWrapper>


        </Row>

      </PageWrapper>

      
  <HeroContainer>
                <Underlay/>
              </HeroContainer>


      <Footer/>
    </>
  );
}