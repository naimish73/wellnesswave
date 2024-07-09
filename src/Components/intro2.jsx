  import {Text,Button,Box,Image,Flex,HStack} from '@chakra-ui/react'
  import { Link, useNavigation } from 'react-router-dom';
  export default function Intr(){
    const innerBoxStyles = {
        
        background:
      'url(https://img.freepik.com/free-photo/flat-lay-medical-mask-with-stethoscope-pills_23-2148533512.jpg?t=st=1720430582~exp=1720434182~hmac=2e10e809d455725e78f312a18963599dd392caf65b68ea4e0ac428ddb48a18d9&w=1060) center/cover no-repeat',
      }
    return(
        <div>
             
            <Box bg='purple.100' pb='0px'>
            <Box sx={innerBoxStyles} backdropFilter='auto' backdropBlur='8px' width='100%' pt='100px'>
            <Text as='b'  fontSize='3xl' py='0px' pl='600px' pr='20px' display='center'>"We are Predicting the diseases by Machine Learning Model to test it's presence with just the input's of your blood report sample" </Text>
            <Button as={Link} boxShadow='dark-lg'  colorScheme='purple' mb='30px' my='80px'  ml='1000px' px='25px' p='30px' to='/test'><Text as='b' color='white' > Test Now</Text></Button>
        </Box>
            
            </Box>

        <Box p='40px' pt='60px' bg='blue.700' color='white'>
            <Text as='b' p='80px' mr='30px' fontSize='45px' fontFamily='Times-new-roman'  >How Does It Work ?</Text>
          
            <HStack fontSize='xl' my='40px' ml='30px' spacing='' >
               
                <Text width='100%'mt='20px' ml='70px' mr='15px'>
                <ol >
    <li><b>Data Collection:</b> Gather both internal and external data sources. Ensure the data is relevant and of high quality for the training process.</li>
        <br />
    
    <li><b>Data Preprocessing:</b> Clean, audit, and validate the data to ensure accuracy. Transform the data into a suitable format for model training.</li>
        <br />
    <li><b>Model Training:</b> Feed the preprocessed data into the ML model. Use algorithms to discover patterns and relationships within the data.</li>
        <br />  
    <li><b>Model Evaluation and Refinement:</b> Validate the model's performance using various metrics. Continuously audit and refine the model to maintain and improve its accuracy and reliability.</li>
  </ol>
                </Text>
            </HStack>
         </Box>
        </div>
           
    );

  }