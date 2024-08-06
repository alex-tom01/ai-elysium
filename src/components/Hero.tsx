'use client'

import { Box, styled, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion';
import React from 'react'
import OrbitLayout from './OrbitLayout';
import Slider from './Slider/Slider';


const OvalContainer = styled(motion.div)(({ theme }) => ({
    width: '100%',
    height: 'calc(100vh - 200px)',
    borderRadius: '50%',
    // backgroundColor: 'lightblue',
    background: '#fff',
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // border: '2px solid #000',
    overflow: 'hidden',
     // Medium devices (tablets, 600px to 960px)
    [theme.breakpoints.down('sm')]: {
        borderRadius: '0',
        flexDirection: "column",
        height: '100%',
        padding: 10
    },

}));
const LeftContent = styled(motion.div)(({ theme }) => ({
    width: '40%',
    // height: '80%',
    // backgroundColor: '#007bff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.2rem',
    // borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        margin: 50
    },

}));
const RightContent = styled(motion.div)(({ theme }) => ({
    width: '40%',
    // maxHeight: '25rem',
    // height: '300px',
    // backgroundColor: '#007bff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.2rem',
    // overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '100%',
    },
}));
const ovalVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
    whileHover: {
      scale: 1.05,
      transition: {
        yoyo: Infinity,
        duration: 0.3,
      },
    },
    whileTap: {
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
};
const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 2 } },
    // whileHover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.5 } },
};
  
const contentLeftVariants = {
    initial: { x: '-100%' },
    animate: { x: '0%', transition: { duration: 1 } },
};

const contentRightVariants = {
    initial: { x: '100%', transition: { duration: 0 } },
    animate: { x: '0%', transition: { duration: 2 } },
    whileHover: { scale: 1.1, transition: { duration: 2 } },
};
const Hero = () => {
    const theme:any = useTheme();
    return (
        <Box 
            sx={{ 
                bgcolor: theme.custom.name === 'morning' ? theme.palette.bg.main : theme.custom.name === 'evening' ? theme.palette.bg.main : theme.custom.name === 'night' ? theme.palette.bg.main : '#000',
                // backgroundImage: theme.custom.name === 'morning' ? theme.palette.bgImage.main : theme.custom.name === 'evening' ? theme.palette.bgImage.main : theme.custom.name === 'night' ? theme.palette.bgImage.main : '#000',
                position: 'relative',
                height: 'calc(100vh - 100px)', // Using calc function correctly
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}
        >
    
            <OvalContainer
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                whileTap="whileTap"
                variants={containerVariants}
            >
                <LeftContent
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    variants={contentLeftVariants}
                >
                    <OrbitLayout numOrbs={3} />
                </LeftContent>
                <RightContent
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    variants={contentRightVariants}
                    style={{ x: '100%' }}
                >
                    {/* <Box sx={{ maxHeight: '200px', height: '100%', width: '100%', overflow: 'hidden',}}> */}
                        <Slider />
                    {/* </Box> */}
                </RightContent>
            </OvalContainer>
            
            {/* <Typography 
                variant='h1'
                sx={{ 
                    color: theme.custom.name === 'morning' ? theme.palette.primaryText.main : theme.custom.name === 'evening' ? theme.palette.primaryText.main : theme.custom.name === 'night' ? theme.palette.primaryText.main : '#000'
                }}
            >Current Theme: {theme.custom.name}</Typography> */}
            {/* <Typography 
                sx={{ 
                    color: theme.custom.name === 'morning' ? theme.palette.primaryText.main : theme.custom.name === 'evening' ? theme.palette.primaryText.main : theme.custom.name === 'night' ? theme.palette.primaryText.main : '#000'
                }}
            >
                This is testing
            </Typography> */}
            
        </Box>
    )
}

export default Hero
