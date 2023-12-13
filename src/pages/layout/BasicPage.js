import * as React from "react";
import  { useState} from 'react';
import { Suspense } from "react";
import {  createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Grid as MuiGrid } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { blueGrey } from "@mui/material/colors";
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import './components.css';
// import Navbar from "../Navbar/index";
import { useStore } from './store'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';
import { Grid } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { GridBackground } from "../layout/Elements";
import { Menu } from 'antd';
import { Perf } from "r3f-perf"
import { useControls } from "leva";
import { Affix, Button } from 'antd';




extend({ Grid });






function BackgroundGrid({ preset = 'sunset' }) {
  const [bad, set] = useState(false);
  const { impl, debug, enabled, samples, ...config } = useControls({
    debug: true,
  });
  return (
    <GridBackground>
      
          <Canvas
      concurrent
      shadowMap
      orthographic
      camera={{ near: 0.1, far: 250, position: [0, 50, 0], zoom: 60 }} // Adjust camera position
      gl={{ powerPreference: 'high-performance' }}
    >


            <color attach="background" args={['#15151a']} />

      <ambientLight intensity={0.7} />
      {debug && <Perf position="bottom-left" />}
        <Grid
          renderOrder={-1}
          position={[0, -1.85, 0]}
          infiniteGrid
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3.3}
          sectionThickness={1.5}
          sectionColor={[0.5, 0.5, 10]}
          fadeDistance={30}
        />
        {/* <OrbitControls/> */}

      </Canvas>
    </GridBackground>
  );
}



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#c7c7c7' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'transparent', // Set AppBar background to transparent
  boxShadow: 'none', // Remove boxShadow or set to 'none' if transparency is desired
  ...(open && {
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));




function DashboardContent({ envPreset, setEnvPreset, showBackgroundGrid, toggleBackgroundGrid }) {
  const [open, setOpen] = useState(true);
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  // const envMenu = (
  //   <Menu onClick={(e) => setEnvPreset(e.key)}>
  //     <Menu.Item key="sunset">Sunset</Menu.Item>
  //     <Menu.Item key="dawn">Dawn</Menu.Item>
  //     <Menu.Item key="night">Night</Menu.Item>
  //     <Menu.Item key="forest">Forest</Menu.Item>
  //     <Menu.Item key="city">City</Menu.Item>
  //     <Menu.Item key="park">Park</Menu.Item>
  //     <Menu.Item key="warehouse">Warehouse</Menu.Item>
  //     <Menu.Item key="apartment">Apartment</Menu.Item>
  //     <Menu.Item key="studio">Studio</Menu.Item>
  //     <Menu.Item key="lobby">Lobby</Menu.Item>

  //   </Menu>
  // );


  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history('/login');
    } catch {
      setError('Failed to logout');
    }
  }

  if (currentUser === null) {
    history('/login');
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };


  const commonThemeSettings = {
    palette: {
      background: {
        default: '#000', // Black background for both themes
      },
      // ... other common settings
    },
    // ... other theme configurations
  };

  const lightTheme = createTheme({
    ...commonThemeSettings,
    palette: {
      ...commonThemeSettings.palette,
      mode: 'light',
      // ... other specific settings for light theme if needed
    },
  });
  
  const darkTheme = createTheme({
    ...commonThemeSettings,
    palette: {
      ...commonThemeSettings.palette,
      mode: 'dark',
      // ... other specific settings for dark theme if needed
    },
  });

  // This state will decide which theme to use
  const [themeMode, setThemeMode] = useState('dark');

  const appliedTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  function handleClick() {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

const backgroundStyle = themeMode === 'dark'
  ? { backgroundColor: '#000' } // Solid black for dark mode
  : { backgroundImage: 'linear-gradient(45deg, #214E66 30%, #E8EDEF 90%)' }; // Gradient for light mode


  const menu = (
    <Menu onClick={(e) => setEnvPreset(e.key)}>
      <Menu.Item key="forest">Forest</Menu.Item>
      <Menu.Item key="city">City</Menu.Item>
      <Menu.Item key="dawn">Dawn</Menu.Item>
      {/* ... other presets ... */}
    </Menu>
  );
  



  return (


    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
            <CssBaseline />


        {/* AppBar starts here */}
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >


          {/* <Dropdown overlay={envMenu}  placement="bottom">
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Change Lighting <DownOutlined />
            </a>
          </Dropdown> */}
          
          {/* <IconButton
          color="inherit"
          onClick={toggleBackgroundGrid}
        >
          {showBackgroundGrid ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton> */}



            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>







          





            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onClick={handleClick} />}
            />
            <IconButton color="inherit">
              <Avatar sx={{ bgcolor: blueGrey[500] }}>{currentUser.email[0].toUpperCase()}</Avatar>
            </IconButton>
            <IconButton color="inherit" onClick={handleLogout}>
              <Badge color="secondary">
                <ClearIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* AppBar ends here */}

        {/* Main content starts here */}
        <Box
        component="main"
        sx={{
          display: 'flex',
          background: 'transparent', // Set to transparent or use theme.palette.background.default
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
          <Toolbar />

            <Container maxWidth="xl" >

                                    <MuiGrid container spacing={3}>
                                      {/* Your Grid Content */}
                                      <Outlet/>
                                    </MuiGrid>      
                                    
                                      
            </Container>

        </Box>

      {/* <Navbar/> */}


      <Affix >
        <Button type="primary" >
          VR NOT YET SUPPORTED
        </Button>
      </Affix>


      </ThemeProvider>
               
  );
}


export default function BasicPage() {
  const [themeMode, setThemeMode] = useState('dark'); // State to hold the current theme mode
  const [envPreset, setEnvPreset] = useState("night"); // State to hold the current environment preset
  const [showBackgroundGrid, setShowBackgroundGrid] = useState(true); // New state for BackgroundGrid visibility

  // Toggle function for BackgroundGrid
  const toggleBackgroundGrid = () => {
    setShowBackgroundGrid(!showBackgroundGrid);
  };
  // Function to toggle the theme mode
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  
  const commonThemeSettings = {
    palette: {
      background: {
        default: '#000', // Black background for both themes
      },
      // ... other common settings
    },
    // ... other theme configurations
  };

  const lightTheme = createTheme({
    ...commonThemeSettings,
    palette: {
      ...commonThemeSettings.palette,
      mode: 'light',
      // ... other specific settings for light theme if needed
    },
  });
  
  const darkTheme = createTheme({
    ...commonThemeSettings,
    palette: {
      ...commonThemeSettings.palette,
      mode: 'dark',
      // ... other specific settings for dark theme if needed
    },
  });

  // Decide on the theme to use based on the state
  const theme = themeMode === 'dark' ? lightTheme : darkTheme;
  

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        {showBackgroundGrid && <BackgroundGrid preset={envPreset} />}
        <br />
        <DashboardContent 
          onToggleTheme={toggleTheme} 
          envPreset={envPreset} 
          setEnvPreset={setEnvPreset} 
          showBackgroundGrid={showBackgroundGrid} // Pass state
          toggleBackgroundGrid={toggleBackgroundGrid} // Pass handler
        />
      </Suspense>
    </ThemeProvider>
  );
}


function Selector({ children }) {
  const ref = useRef()
  const store = useStore()
  useFrame(({ viewport, camera, pointer }, delta) => {
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3])
    easing.damp3(ref.current.position, [(pointer.x * width) / 2, (pointer.y * height) / 2, 3], store.open ? 0 : 0.1, delta)
    easing.damp3(ref.current.scale, store.open ? 4 : 0.01, store.open ? 0.5 : 0.2, delta)
    easing.dampC(ref.current.material.color, store.open ? '#f0f0f0' : '#ccc', 0.1, delta)
    // easing.dampC(ref.current.material.color, store.open ? '#000000' : '#ccc', 0.1, delta)

  })
  return (
    <>
      <mesh ref={ref}>
        <circleGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial samples={16} resolution={512} anisotropy={1} thickness={0.1} roughness={0.4} toneMapped={true} />
      </mesh>
      <group
        onPointerOver={() => (store.open = true)}
        onPointerOut={() => (store.open = false)}
        onPointerDown={() => (store.open = true)}
        onPointerUp={() => (store.open = false)}>
        {children}
      </group>
    </>
  )
}
