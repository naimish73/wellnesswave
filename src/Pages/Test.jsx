import { ChakraProvider,HStack,Stack,Heading ,Text } from '@chakra-ui/react'
import Navbar from '../Components/navbar.jsx'
import Footer from '../Components/Footer.jsx'
import HorCard from '../Components/cards2.jsx'
    export default function Test() {

        return (
           <ChakraProvider>

                <Navbar></Navbar> 
                <Heading   bg='blue.900' color='white' p='30px'>Test Now</Heading>
                <Stack bg='blue.300' >
<HStack bg='blue.600' color='white' py='80px'>
         
         <Text  ml='30px' pt='100px' width='50%' >
                <Text as='b' fontSize='5xl' color='white' >Breast Cancer</Text>
         </Text>
        

    {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
                         <HorCard 
                        a="https://th.bing.com/th/id/OIP.gZX4w9AnZ1Ch8M2BBLs2HAHaHZ?w=196&h=195&c=7&r=0&o=5&dpr=1.2&pid=1.7"
                        b="Check out "
                        c="Breast cancer is one of the most common types of cancer that affects millions of"
                        d="Test Now"
                    />
</HStack> 
          
 <HStack bg='blue.300' color='white' py='80px'>
           <HorCard 
                         a="https://www.howard-finley.co.uk/wp-content/uploads/2020/06/dreamstime_l_180162487-scaled.jpg"

                        b="Check out"
                        c="Diabetes is a chronic condition that affects how your body uses blood sugar (glucose)."
                        d="Test Now"
                    />
         <Text  m='120px' pt='100px' pl='300px' width='50%' >
                <Text as='b' fontSize='5xl' color='white' >Diabetes</Text>
         </Text>
        

    {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
    

 </HStack> 
           
<HStack bg='purple.600' color='white' py='80px'>
         
         <Text  ml='30px' pt='100px' width='50%' >
                <Text as='b' fontSize='5xl' color='white' >Heart Diseases</Text>
         </Text>
        

    {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
                         <HorCard 
                            a="https://www.findatopdoc.com/var/fatd/storage/images/_aliases/article_main/media/images/heartdisease/409477-1-eng-US/heartdisease.jpg"
                            b="Check out "
                        c="Heart disease is a term used to describe a range of conditions that affect the heart."
                        d="Test Now"
         
         />

 </HStack> 
                   
                    
                        
                    </Stack>
                <Footer></Footer>





           </ChakraProvider>      
        
        )
    }