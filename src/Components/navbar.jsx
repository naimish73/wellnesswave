
import { Flex,Text, Button,HStack, Box , Divider,Image } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>  
           
    <Flex as="nav" boxShadow='dark-xl' bg="" color="" px='10px'  justify="space-between">
            <Flex>
                <a href=""><Image src='./src/assets/logo2.jpg' width='100px' pr=''></Image></a>
                <Text 
                     bgGradient='linear(to-l,blue.300,cyan.400)'
                     bgClip='text'   
                     fontSize='3xl'
                     fontWeight='extrabold'
                     mt='25px'
                >
                Welness Wave
                </Text>
            </Flex>
            


                <HStack as='b' spacing="40px" color="pink.300" fontSize='md' cursor="pointer">
                    <Box  _hover={{color:'pink.600'}}><Link to="/">Home</Link></Box>
                    <Box  _hover={{color:'cyan.600'}}><Link to="/">About</Link></Box>
                    <Box  _hover={{color:'yellow.300'}}><Link to="/Contact">Contact</Link></Box>
                    <Box  _hover={{color:'green.300'}}><Link to="/FAQ">FAQ's</Link></Box>
                </HStack>

                <HStack spacing='20px'>
                    <Button  colorScheme='blue' variant='outline'>LogIn </Button>
                    <Button  colorScheme='blue' variant='outline'>SignUp </Button>
                </HStack>
                
                 

    </Flex>
            <Divider></Divider>
        </>
    );
}
