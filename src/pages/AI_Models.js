import React from 'react';
import { Affix, Button, rem } from '@mantine/core';
import Footer from '../components/Footer/index';
import InfoSection from '../components/InfoSection';
import InfoSectionCanva from '../components/InfoSection/index_Canvas';
import {
  homeObjOne,
  // homeObjFive,
  // homeObjFour,
  homeObjThree,
} from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';


export default function AIPage() {

  return (
    <>
<HeroSection/>
<InfoSectionCanva {...homeObjOne} />
<InfoSection {...homeObjThree} />

      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
            >
              I am still in Development.
            </Button>
      </Affix>
        <Footer/>
    </>
  );
}


// class AIPage extends Component {

//   render() 
  
//   {
//     return (
//       <div className="Contact">
//         This is the contact page.

//         <Affix position={{ bottom: rem(20), right: rem(20) }}>
//            <Button
//               variant="outline"
//             >
//               I am still in Development.
//             </Button>
//       </Affix>

//         <Footer/>


//       </div>
//     )
//   }
// }
// export default AIPage;