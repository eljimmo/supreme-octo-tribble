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
import { Text, Cylinder, meshBounds, Line, Stage, useFBO, useVideoTexture, useAspect, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber'





const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute
            to='/about'
            // onClick={toggle}
            // smooth={true}
            // duration={500}
            // spy={true}
            // exact='true'
            // offset={-80}
          >
            About
          </SidebarRoute>
          <SidebarRoute
            to='/neuroevolution'
            // onClick={toggle}
            // smooth={true}
            // duration={500}
            // spy={true}
            // exact='true'
            // offset={-80}
          >
            Neuroevolution
          </SidebarRoute>
          <SidebarRoute
            to='/Reinforcement'
            // onClick={toggle}
            // smooth={true}
            // duration={500}
            // spy={true}
            // exact='true'
            // offset={-80}
          >
            Reinforcement
          </SidebarRoute>
          <SidebarRoute
            to='/signup'
            // onClick={toggle}
            // smooth={true}
            // duration={500}
            // spy={true}
            // exact='true'
            // offset={-80}
          >
            Sign Up
          </SidebarRoute>
        </SidebarMenu>
        {/* <SideBtnWrap>

        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
