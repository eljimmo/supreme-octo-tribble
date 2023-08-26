import styled from 'styled-components'


import {
  HeroContainerTransparent,
  HeroContainer252525,
  AnimatedGradientText,
  HeroContent2,
  HeroH1,
  HeroP,
  HeroContainer,
  HeroContent

} from "../../components/HeroSection/HeroElements";
import Videoapp2 from '../../components/VideoTexture/VApp_2';
import InfoSectionCanva from '../../components/InfoSection/index_Canvas';
import { homeObjOne, homeObjTwo } from '../../components/InfoSection/Data';
import App from '../../components/Curl_Noise/App';


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

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #252525;
  color: #252525;
`

const Sub = styled.div`
  align-self: end;
  width: 200px;
  height: 2px;
  background: #00b100;
`

const Jumbo = styled.div`
  align-self: center;
  padding: 100px;
  font-size: 3.5em;
  color: #f3f3f3;
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'ThunderThin';
  font-size: 0.2em;
  line-height: 1em;
  color: #252525;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
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
