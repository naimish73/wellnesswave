import { Flex, Text, Button, HStack, Box, Divider, Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';
import { account } from '../appwriteConfig';

export default function Navbar() {
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();
    const {user, logoutUser} = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            const accountDetails = await account.get();
            
            setUsername(accountDetails? accountDetails.name : null);
        };
        fetchUser();
    }, []);


    const handleLogout = async () => {
        const result = await logoutUser();
        if(result.success) {
            setUsername(null);
            navigate('/login');
        } else {
            alert(result.error.message);
        }
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
                    <Box _hover={{ color: 'cyan.600' }}><Link to="/blog">Blog</Link></Box>
                    <Box _hover={{ color: 'yellow.300' }}><Link to="/test">Test</Link></Box>
                    <Box _hover={{ color: 'yellow.300' }}><Link to="/Contact">Contact</Link></Box>
                    <Box _hover={{ color: 'green.300' }}><Link to="/FAQ">FAQs</Link></Box>
                </HStack>

                {username ? (
                    <>
                        <h1>Hello, {username}</h1>
                        <HStack spacing='20px'>
                            <Button colorScheme='blue' variant='outline' onClick={handleLogout}>Logout</Button>
                        </HStack>
                    </>

                ) : (
                    <>

                        <HStack spacing='20px'>
                            <Link to="/login"><Button colorScheme='blue' variant='outline'>Login</Button></Link>
                            <Link to="/signup"><Button colorScheme='blue' variant='outline'>Sign Up</Button></Link>
                        </HStack>
                    </>
                )}
            </Flex>
            <Divider />
        </>
    );
}
