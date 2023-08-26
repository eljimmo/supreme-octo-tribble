import { React } from 'react';
import {
  SidebarContainer,
  // Icon,
  // CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  // SidebarLink,
  SidebarRoute,
  // SideBtnWrap
} from './SidebarElements';






const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute
            to='/about'

          >
            About
          </SidebarRoute>


          {/* <SidebarRoute
            to='/neuroevolution'

          >
            Neuroevolution
          </SidebarRoute> */}


          <SidebarRoute
            to='/MachineLearning'
          >
            Machine Learning
          </SidebarRoute>

          <SidebarRoute
            to='/artificialintelligence'
          >
            Artificial Intelligence
          </SidebarRoute>


          {/* <SidebarRoute
            to='/signup'
          >
            Sign Up
          </SidebarRoute>


          <SidebarRoute
            to='/login'
          >
            Log in
          </SidebarRoute> */}


          
        </SidebarMenu>
  
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
