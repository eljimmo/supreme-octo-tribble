import React from 'react';
import Footer from '../components/Footer/index';
import InfoSection from '../components/InfoSection';
import InfoSectionCanva from '../components/InfoSection/index_Canvas';
import {
  homeObjOne,
  homeObjThree,
} from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services/index2';
import ChatApp from '../components/Chatbot/App';


export default function AIPage() {

  return (
    <>
<HeroSection/>
<InfoSectionCanva {...homeObjOne} />
<InfoSection {...homeObjThree} />
<Services/>
<ChatApp/>
        <Footer/>
    </>
  );
}

