"use client"

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import { motion } from "framer-motion";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 300 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const listVariants = {
    hidden: { opacity: 0, y: -300 },
    visible: (i:any) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 80,
        },
    }),
};
const AnimatedListItem = motion(ListItem);
const Slider = () => {
    const theme:any = useTheme();
    
    const sliderContent = [
        {
            heading: "Why Choose AIElysium?",
            content: [
                'Expertise: Seasoned AI professionals with extensive industry experience.',
                'Customization: Bespoke solutions tailored to your business needs.',
                'Collaboration: Seamless integration through close collaboration with your team.',
                'Innovation: Cutting-edge AI technology driven by continuous R&D.',
                'Ethics: Committed to responsible and fair AI practices.',
            ]
        },
        {
            heading: 'Empowering Businesses with AI Excellence',
            content: `At Effigenics, we are a team of passionate AI consultants, engineers, and developers dedicated to transforming businesses through innovative artificial intelligence solutions. Our mission is to solve your company's most pressing challenges with state-of-the-art AI technologies, beautifully designed interfaces, and a commitment to ethical AI practices.`,
        }
    ]
    
    
    const CustomRight:any = ({ onClick }:any) => (
        <IconButton
            onClick={onClick}
            sx={{ 
                color: theme.palette.mode === 'light' ? "#000": "#fff",
                background: "transparent",
                border: 0,
                position: 'absolute',
                bottom: 0,
                left: 0,
            }}
            title="left-side-arrow"
        >
            <WestIcon fontSize="small" />
        </IconButton>
    );
    const CustomLeft:any = ({ onClick }:any) => (
        <IconButton
            sx={{
                transform: 'rotate(180deg)', // Rotates the icon by 45 degrees
                transition: 'transform 0.3s ease-in-out', // Smooth transition
                color: theme.palette.mode === 'light' ? "#000": "#fff",
                background: "transparent",
                border: 0,
                position: 'absolute',
                bottom: 0,
                left: 40,
            }}
            title="left-side-arrow"
            onClick={onClick}
        >
            <WestIcon fontSize="small" />
        </IconButton>
    );
    return (
        <Box 
            sx={{
                px: {xs: 1, md: 3}, 
                bgcolor: "red",
                height: {xs: '100%',md:'400px'}, 
                width: { xs: '90%', md:'60%'},
                borderRadius: '20px',
                overflow: 'hidden'
            }}
        >
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={false}
                showDots={false}
                infinite={true}
                partialVisible={false}
                customRightArrow={<CustomRight />}
                customLeftArrow={<CustomLeft />}
            >
            {sliderContent.map((item, index) => {
                return (
                    <Box key={index}  sx={{ 
                        padding: {xs: "2rem 0",md:"2rem 0"}, 
                        height: {xs: '100%',md: 360}, 
                    }} >
                        <Typography variant="h5">{item.heading}</Typography>
                        {
                            typeof(item.content) === 'string' 
                            ? <Typography variant="caption">{item.content}</Typography> 
                            : <List 
                                sx={{ 
                                    width: {xs: '100%', md:'100%'}, p: '0px', 
                                    // bgcolor: 'background.paper' 
                                }}>
                            {item.content.map((value, i) => (
                            <AnimatedListItem
                                key={i}
                                disableGutters
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={listVariants}
                            >
                                {/* <ListItemText sx={{ fontSize: 7, fontWeight: 300, color: '#fff' }} primary={`${value}`} /> */}
                                <Typography variant="caption">{value}</Typography> 
                            </AnimatedListItem>
                            ))}
                        </List>
                        }
                    </Box>
                );
            })}
            </Carousel>
        </Box>
    );
};
export default Slider;