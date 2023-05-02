import React, { useState } from 'react';
import { Affix, Button, rem } from '@mantine/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import Sidebar from '../components/Sidebar/index';



export default function AIPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

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