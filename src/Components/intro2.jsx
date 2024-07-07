  import {Text,Button,Box,Image,Flex,HStack} from '@chakra-ui/react'

  export default function Intr(){

    return(
        <div>
            <Box bg='green.300' pb='100px'>
            <Text as='b'  fontSize='5xl' py='150px' px='20px' display='center'>"We are Predicting the diseases by Machine Learning Model to test it's presence with just the input's of your blood report sample" </Text>
            <Button boxShadow='dark-lg'  colorScheme='purple' mb='50px'  ml='900px' px='25px' py='30px'><Text as='b' color='white' > Test Now</Text></Button>
            </Box>

        <Box pt='40px'>
            <Text as='b' p='30px' mr='30px' fontSize='4xl'>How Does It Work's</Text>
          
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