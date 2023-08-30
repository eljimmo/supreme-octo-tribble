import styled from 'styled-components'
import {
  HeroP,
} from "../../components/HeroSection/HeroElements";



const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: 'ThunderBlack';
  font-size: 4em;
  line-height: 0.74em;
  color: #00b100;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  padding: 100px;
  white-space: nowrap;
  font-family: 'ThunderThin';
  line-height: 1em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`


const Sub = styled.div`
  align-self: end;
  width: 200px;
  height: 2px;
  background: #00b100;
`



export default function Underlay() {
  return (
    <Grid>
      <Left>

        <div>


          <br />
          <HeroP>
          Define the model state
          </HeroP>
          <br />
          <HeroP>

          change model properties
          </HeroP>

          <br />

          <HeroP>

          identify prediction controls.
          </HeroP>

          <br />

        <HeroP>

        create intelligence parameters  
        </HeroP>

        <br />

        <HeroP>

        optimize parameters of prediction
        </HeroP>



        <br />


        
        </div>
        <Sub />
        
      </Left>



    </Grid>
  )
}
