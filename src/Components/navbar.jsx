import { Flex, Text, Button, HStack, Box, Divider, Image } from '@chakra-ui/react';
import { Link, useNavigation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import authService from '../appwrite/auth';
// const [username, setUsername] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const username = await authService.getCurrentUser();
//       setUsername(username?.name || null);
//     };
//     fetchUser();
//   }, []);

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleSignup = () => {
//     navigate('/signup');
//   };

//   const handleLogout = async () => {
//     await authService.logout();
//     setUsername(null);
//     navigate('/login');
//   };

export default function Navbar() {
    const [username, setUsername] = useState(null);
    const navigate = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
        const username = await authService.getCurrentUser();
        console.log(username);
        setUsername(username?.name || null);
        };
        fetchUser();
    }, []);


    const handleLogout = async () => {
        await authService.logout();
        setUsername(null);
        navigate('/login');
    };

    return (
        <>  
            <Flex as="nav" boxShadow='dark-xl' bg="" color="" px='10px' justify="space-between">
                <Flex>
                    <a href=""><Image src='./src/assets/logo2.jpg' width='100px' pr=''></Image></a>
                    <Text 
                        bgGradient='linear(to-l, blue.300, cyan.400)'
                        bgClip='text'   
                        fontSize='3xl'
                        fontWeight='extrabold'
                        mt='25px'
                    >
                        Wellness Wave
                    </Text>
                </Flex>

                <HStack as='b' spacing="40px" color="pink.300" fontSize='md' cursor="pointer">
                    <Box _hover={{ color: 'pink.600' }}><Link to="/">Home</Link></Box>
                    <Box _hover={{ color: 'cyan.600' }}><Link to="/">About</Link></Box>
                    <Box _hover={{ color: 'yellow.300' }}><Link to="/Contact">Contact</Link></Box>
                    <Box _hover={{ color: 'green.300' }}><Link to="/FAQ">FAQs</Link></Box>
                </HStack>

                {username ? (

                    <HStack spacing='20px'>
                        <h1>Hello, {username}</h1>
                        <Button colorScheme='blue' variant='outline' onClick={handleLogout}>Logout</Button>
                    </HStack>
                    ) : (
                    <>
                    
                        <HStack spacing='20px'>
                            <Button colorScheme='blue' variant='outline'><Link to="/login">Login</Link></Button>
                            <Button colorScheme='blue' variant='outline'><Link to="/signup">Sign Up</Link></Button>
                        </HStack>
                    </>
                    )}
            </Flex>
            <Divider />
        </>
    );
}
