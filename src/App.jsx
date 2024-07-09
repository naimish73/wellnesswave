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
        a="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1720456136~exp=1720459736~hmac=407a5d4fa491e9d878e1283204174a332df76a89d84a7df476d812ff96b7250a&w=740"
        b="The reviews of articles found on your website provide insightful perspectives on health, wellness, and treatment options, empowering readers with evidence-based information to make informed decisions about the   well-being"
      ></Cards>

      

      <Cards
        a="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?t=st=1720456079~exp=1720459679~hmac=895dbb4a56a3f85e433d5f99ba70c30a3cf06616ae13a910c5ddfb3ca27411ac&w=740"
        b="comprehensive article reviews delve deep into various health topics, offering expert perspectives and evidence-based insights that empower readers to prioritize informed health decisions and holistic well-being. "
      ></Cards>

      <Cards
      
      a="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1720455586~exp=1720456186~hmac=439f48e985d2c3981730b42e5c680a81cc033620a1c65de5a926d8deace468c6"
      b="Website's article reviews offer in-depth analysis and expert insights into diverse health topics, guiding readers towards informed choices and holistic wellness strategies"
    ></Cards>
      
      </HStack>
      
      </div>

            

     
      <Footer></Footer>
    </ChakraProvider>
  )
}
export default App