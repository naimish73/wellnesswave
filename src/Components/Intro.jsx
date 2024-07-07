import { Heading, Text , Button, Box, Flex, Image, HStack} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon,ArrowForwardIcon } from '@chakra-ui/icons'



export default function Intro() {
    return (
    <div as="Flex" my='20px' > 
         
          <HStack bg='purple.600' color='white' pb='80px'>
         
         <Text  ml='30px' pt='100px' >
                <Text as='b' fontSize='5xl' color='white' >Make a Try to Fight with every diseases</Text>
                <Text fontSize='lg' pt='20px' >Welcome to Wellness Wave, your trusted source for comprehensive health information and wellness guidance. Our mission is to empower individuals with knowledge about various health conditions, offering insights on prevention, treatment, and management.</Text>
        <Box mt='40px'>  
           <Button size='lg'  colorScheme='gray' mt='24px'>
             Explore  <ArrowForwardIcon/>
            </Button>
        </Box>
         </Text>
        

    {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
         <div>
         <Image src='public/Images/intro2.jpg' maxW='500px'   boxShadow='dark-lg' ml='25px'mt='125px'mr='25px' rounded='2xl' bg='purple.600'></Image>
         {/* <Heading p='0' mb={4}>Modern online and offline </Heading>

            <Text fontSize='xl'>    
             Paystack helps businesses in Africa get paid by anyone, anywhere in the
            world
            </Text> */}
           
    {/* </Box> */}
          
           
            
           </div>
           </HStack> 
           </div>
        
    
    );
}

