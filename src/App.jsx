import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider,HStack,Heading } from '@chakra-ui/react'

import Navbar from './Components/navbar.jsx'
import Intro from './Components/Intro.jsx'
import Cards from './Components/cards.jsx'
import Accordian from './Components/Accordian.jsx'
import Footer from './Components/Footer.jsx'
import Carousel from './Components/Carosel.jsx'
import Intr from './Components/intro2.jsx'
function App() {
  // 2. Wrap ChakraProvider at the root of your app

  const images = [
    'public/Images/Healthcare2.jpg?text=Slide+1',
    'public/Images/ML1.webp?text=Slide+2',
    'public/Images/Healthcare2.jpg?text=Slide+3'
  ];

  return (
    <ChakraProvider>
   
      <Navbar></Navbar>

      <Intro></Intro>
      <Intr></Intr>

      <div as='Flex' >
      <Heading  p='40px' mt='40px'>Machine Learning</Heading>
      <Carousel
        images={images}
      ></Carousel>
       <Heading bg='pink.200' pl='30px' pt='70px' mt='40px'>Reviews</Heading>
      <HStack bg='pink.200' pb='100px'>
      
      <Cards
        a="public/Images/Intro.jpeg"
        b="lorem dkasmsamklmadkfmadklsnfkldanfkldankldsnfkldsnaklfndsvnfsjlvn fslnl"
      ></Cards>

      <Cards
        a="public/Images/Intro.jpeg"
        b="lorem dkasmsamklmadkfmadklsnfkldanfkldankldsnfkldsnaklfndsvnfsjlvn fslnl"
      ></Cards>

      <Cards
        a="public/Images/Intro.jpeg"
        b="lorem dkasmsamklmadkfmadklsnfkldanfkldankldsnfkldsnaklfndsvnfsjlvn fslnl"
      ></Cards>

      
      
      </HStack>
      </div>

            

     
      <Footer></Footer>
    </ChakraProvider>
  )
}
export default App