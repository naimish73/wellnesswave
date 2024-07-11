import {Text, HStack, Flex,Box,Image,Input} from '@chakra-ui/react'
import {SearchIcon}  from '@chakra-ui/icons'
import { Link, useNavigation } from 'react-router-dom';


export default function Footer(){

        return(
            <Box bg='blue.100' color='' pt='20px'>
             <Text 
            bgGradient='linear(to-l,black, black)'
            bgClip='text'
            fontSize='3xl'
            fontWeight='extrabold'
            pt='20px'
            pl='40px'
            pb='0px'
            >
            Wellness Wave
            </Text> 
           <Flex as='b'  pl='80px' pt='0px'  >
            
               
            <Box  p='40px' m='30px'>
                    <Text fontSize='2xl' py='20px'>Links</Text>
                    <Text  py='10px'><Link to='/'>Home</Link></Text>
                    <Text  py='10px'><Link to='/blog'>About</Link></Text>
                    <Text py='10px'><Link to='/Contact'>Contact</Link></Text>
                    <Text py='10px' pb='100px'><Link to='/FAQ'>FAQs</Link></Text>
            </Box>

            <Box  p='40px' m='  50px' > 
                    <Text  fontSize='2xl' as='b' pb='20px '>ML Models</Text>
                    <Text py='10px' pt='30px' >Ask Virtual Assistant</Text>
                    <Text py='10px' ><Link to='/blog'>Heart Related Diseases </Link></Text>
                    <Text py='10px'><Link to='/blog'>Breast Cancer</Link></Text>
                    <Text py='10px' pb='100px'><Link to='/dia'>Diabites</Link></Text>
            </Box>
           

            <Box  ml='300px' p='30px' m='30px'>
                    <br />
                    <Box  py='20px'><Image width='20px' src='public/Social/facebook.svg'></Image></Box>
                    <Box py='20px'><Image width='20px'src='public/Social/instagram (1).svg'></Image></Box>
                    <Box  py='20px'><Image width='20px' src='public/Social/linkedin.svg'></Image></Box>
                    <Box py='20px'><Image width='20px' src='public/Social/twitter-x.svg'></Image></Box>
            </Box>
                    

            <br/>
        
            </Flex>
             <Text px='400px' bg='gray.700' color='white'>© {new Date().getFullYear()} Wellness Wave . All Rights Reserved by Mavericks</Text>
             </Box>
        );

}