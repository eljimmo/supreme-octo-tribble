import { React, useState, useEffect, Suspense } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
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
          <SidebarRoute
            to='/neuroevolution'

          >
            Neuroevolution
          </SidebarRoute>
          <SidebarRoute
            to='/Reinforcement'
          >
            Reinforcement
          </SidebarRoute>

          <SidebarRoute
            to='/AImodels'
          >
            AI Models
          </SidebarRoute>


          <SidebarRoute
            to='/signup'
          >
            Sign Up
          </SidebarRoute>
        </SidebarMenu>
  
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
