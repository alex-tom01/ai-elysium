'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { AddBoxOutlined } from '@mui/icons-material';

const OuterOrbitContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '360px',
  height: '360px',
  borderRadius: '50%',
  border: '2px solid #000',
  background: 'red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '360px',
  },
}));
const OrbitContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '280px',
  height: '280px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '280px',
  //  color: '#fff',
  },
}));
const BackgroundImage = styled(motion.div)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundImage: `url('/robot-face.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
});

const Orb = styled(motion.div)({
  position: 'absolute',
//   width: '50px',
//   height: '50px',
  borderRadius: '50%',
  // backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backgroundColor: '#000',
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3em',
    height: '3em',
    boxShadow: `0 0 5px rgba(0, 0, 0, 0.5)`,
});

const generateOrbits = (numOrbs:any) => {
  const orbs = [];
  const startAngle = 270; // Start angle for the first item
  const endAngle = 360; // End angle for the last item
  const angleStep = (endAngle - startAngle) / (numOrbs - 1);
  for (let i = 0; i < numOrbs; i++) {
    const angle = startAngle + i * angleStep;
    orbs.push({ angle });
  }
  return orbs;
};

const OrbitLayout = ({ numOrbs = 6 }) => {
  const orbs = generateOrbits(numOrbs);
  const radius = 180; // Distance from center

  const orbVariants = {
    initial: { opacity: 1, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
    whileHover: { scale: 1.2, transition: { yoyo: Infinity, duration: 0.3 } },
    whileTap: { scale: 1.5, transition: { type: 'spring', stiffness: 300 } },
  };
  return (
    <OuterOrbitContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      whileHover={{ scale: 1.1, transition: { duration: 2 } }}
      whileTap={{ scale: 1.2 }}
    >
      <OrbitContainer>
        <BackgroundImage
          initial={{ scale: 0.8 }}
          animate={{ scale: 1, transition: { duration: 3 } }}
          whileHover={{ scale: 1.1, transition: { duration: 3 } }}
          whileTap={{ scale: 1.2 }}
        />
       {orbs.map((orb, index) => {
       const x = Math.cos((orb.angle * Math.PI) / 180) * radius;
       const y = Math.sin((orb.angle * Math.PI) / 180) * radius;
        
        return (
            <Orb
                key={index}
                initial="initial"
                animate={{ x: x, y: y }}
                whileHover="whileHover"
                whileTap="whileTap"
                variants={orbVariants}
            >
                <AddBoxOutlined />
            </Orb>
        );
      })}
    </OrbitContainer>
    </OuterOrbitContainer>
  );
};

export default OrbitLayout;
