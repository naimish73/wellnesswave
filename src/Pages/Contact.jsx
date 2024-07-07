// import App from '../App.jsx'
import { ChakraProvider,Heading,Box,Text,Stack,Link } from '@chakra-ui/react'
import Navbar from '../Components/navbar.jsx'
import './contact.css'
import Footer from '../Components/Footer.jsx'


    export default function Contact() {
        const companyDetails = {
            name: 'Wealth & Health Organization',
            email: 'contact@who.com',
            phone: '(123) 456-7890',
            address: {
              street: '123 Elm Street',
              city: 'Springfield',
              state: 'IL',
              zipCode: '62704',
              country: 'USA'
            },
            website: 'www.wellnesswave.com',
            linkedIn: 'linkedin.com/company/who',
            twitter: '@wellnesswave',
            supportEmail: 'support@wellnesswave.com',
            salesEmail: 'sales@wellnesswave.com',
            fax: '(123) 456-7891'
          };
        return (
              
                <ChakraProvider >
                   
                    <Navbar></Navbar>
                    <div className='contact'>
                    <br />
                        {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
                    <Text as='b' fontSize='6xl' px='100px' color='white' >Contact Us</Text>
                  
                    <Box bg='white' mt='50px' mx='auto' boxShadow='2xl' rounded='3xl' px='50px' py='50px' p={5} maxW="650px"  borderWidth="2px" borderRadius="lg" overflow="hidden">
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        {companyDetails.name}
      </Heading>
      <Stack spacing={3}>
        <Text>
          <strong>Email:</strong> <Link  color='cyan.600' href={`mailto:${companyDetails.email}`}>{companyDetails.email}</Link>
        </Text>
        <Text>
          <strong>Phone:</strong> {companyDetails.phone}
        </Text>
        <Text>
          <strong>Address:</strong> {companyDetails.address.street}, {companyDetails.address.city}, {companyDetails.address.state} {companyDetails.address.zipCode}, {companyDetails.address.country}
        </Text>
        <Text >
          <strong>Website:</strong> <Link color='cyan.600' href={`https://${companyDetails.website}`} isExternal>{companyDetails.website}</Link>
        </Text>
        <Text>
          <strong>LinkedIn:</strong> <Link color='cyan.600' href={`https://${companyDetails.linkedIn}`} isExternal>{companyDetails.linkedIn}</Link>
        </Text>
        <Text>
          <strong>Twitter:</strong> <Link color='cyan.600' href={`https://twitter.com/${companyDetails.twitter}`} isExternal>{companyDetails.twitter}</Link>
        </Text>
        <Text>
          <strong>Customer Support Email:</strong> <Link href={`mailto:${companyDetails.supportEmail}`}>{companyDetails.supportEmail}</Link>
        </Text>
        <Text>
          <strong>Sales Email:</strong> <Link href={`mailto:${companyDetails.salesEmail}`}>{companyDetails.salesEmail}</Link>
        </Text>
        <Text>
          <strong>Fax:</strong> {companyDetails.fax}
        </Text>
      </Stack>
    </Box>
            <br />
            <br />
            <br />
                    
</div>  
    <Footer></Footer>
                </ChakraProvider>
              
            
        )
    }