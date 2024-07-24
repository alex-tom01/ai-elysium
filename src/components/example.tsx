'use client'
import { AddBoxOutlined } from '@mui/icons-material';
import { Box, styled, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion';
import { relative } from 'path';
import React from 'react'
import OrbitLayout from './orbitExampl';
import Slider from './Slider/Slider';


const OvalContainer = styled(motion.div)({
    width: '100%',
    height: 'calc(100vh - 50px)',
    borderRadius: '50%',
    // backgroundColor: 'lightblue',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // border: '2px solid #000',
    // overflow: 'hidden',
});
const Content = styled(motion.div)({
    width: '40%',
    // height: '80%',
    // backgroundColor: '#007bff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.2rem',
    // borderRadius: '20px',
});
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
const Example = () => {
    const theme:any = useTheme();
    return (
        <Box 
            sx={{ 
                bgcolor: theme.custom.name === 'morning' ? theme.palette.bg.main : theme.custom.name === 'evening' ? theme.palette.bg.main : theme.custom.name === 'night' ? theme.palette.bg.main : '#000',
                // backgroundImage: theme.custom.name === 'morning' ? theme.palette.bgImage.main : theme.custom.name === 'evening' ? theme.palette.bgImage.main : theme.custom.name === 'night' ? theme.palette.bgImage.main : '#000',
                position: 'relative',
                height: 'calc(100vh - 50px)', // Using calc function correctly
                overflow: 'hidden',
            }}
        >
    
            <OvalContainer
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                whileTap="whileTap"
                variants={containerVariants}
            >
                <Content
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    variants={contentLeftVariants}
                >
                    <OrbitLayout numOrbs={3} />
                </Content>
                <Content
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    variants={contentRightVariants}
                    style={{ x: '100%' }}
                >
                    <Slider />
                </Content>
            </OvalContainer>
            
            {/* <Typography 
                variant='h1'
                sx={{ 
                    color: theme.custom.name === 'morning' ? theme.palette.primaryText.main : theme.custom.name === 'evening' ? theme.palette.primaryText.main : theme.custom.name === 'night' ? theme.palette.primaryText.main : '#000'
                }}
            >Current Theme: {theme.custom.name}</Typography> */}
            <Typography 
                sx={{ 
                    color: theme.custom.name === 'morning' ? theme.palette.primaryText.main : theme.custom.name === 'evening' ? theme.palette.primaryText.main : theme.custom.name === 'night' ? theme.palette.primaryText.main : '#000'
                }}
            >
                This is testing
            </Typography>
            
        </Box>
    )
}

export default Example
