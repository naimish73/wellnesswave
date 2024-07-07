import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Image, Stack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 18000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" width="50%" maxWidth="600px" minWidth='599px' mx="auto" overflow="hidden" borderRadius="md" >
      <Stack direction="row" align="center" justify="center" spacing={0} width="full" position='relative'>
        {images.map((image, index) => (
          <Box
            key={index}
            display={currentIndex === index ? 'block' : 'none'}
            width="full"
            transition="transform 100s"
                
          >
            <Image src={image} alt={`Slide ${index}`} width="full" borderRadius="md" />
          </Box>
        ))}
      </Stack>
      <IconButton
        aria-label="Previous Slide"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
      />
      <IconButton
        aria-label="Next Slide"
        icon={<ChevronRightIcon />}
        position="absolute"
        right={2}
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
      />

      

    </Box>
    
  );
};

export default Carousel;
