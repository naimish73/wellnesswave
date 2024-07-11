import { ChakraProvider, HStack, Stack, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/navbar.jsx";
import Footer from "../Components/Footer.jsx";
import HorCard from "../Components/cards2.jsx";
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Heading bg="blue.900" color="white" p="30px">
        Test Now
      </Heading>
      <Stack bg="blue.300">
        <HStack bg="blue.600" color="white" py="80px">
          <Text ml="30px" pt="100px" width="50%">
            <Text as="b" fontSize="5xl" color="white">
              Breast Cancer
            </Text>
          </Text>

          {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
          <Link to='/breastcancer'>
            <HorCard
                a="https://img.freepik.com/free-vector/breast-cancer-awareness-concept_23-2148641276.jpg?t=st=1720457442~exp=1720461042~hmac=f6455b4c5361d58dbe31f3e67494c68c04181a161e710ca1097e35753dfaee7a&w=740"
                b="Check out "
                c="Breast cancer is one of the most common types of cancer that affects millions of"
                d="Test Now"
            />
          </Link>
        </HStack>

        <HStack bg="blue.300" color="white" py="80px">
          <Link to='/diabetes'>
            <HorCard
                a="https://img.freepik.com/free-photo/diabetic-person-checking-their-glucose-level_52683-135690.jpg?t=st=1720458418~exp=1720462018~hmac=bbc901eeacc6ec9d90b2c948826b5c62943061d9d67d13d7dec6f897eb5834db&w=900"                
                b="Check out"
                c="Diabetes is a chronic condition that affects how your body uses blood sugar (glucose)."
                d="Test Now"
            />
          </Link>
          <Text m="120px" pt="100px" pl="300px" width="50%">
            <Text as="b" fontSize="5xl" color="white">
              Diabetes
            </Text>
          </Text>

          {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
        </HStack>

        <HStack bg="purple.600" color="white" py="80px">
          <Text ml="30px" pt="100px" width="50%">
            <Text as="b" fontSize="5xl" color="white">
              Heart Diseases
            </Text>
          </Text>

          {/* <Box maxW='32rem' pt="50px" pl="30px" pb='50px'pr='150px' boxShadow='2xl' ml='25px'mt='30px'mr='20px' rounded='md' bg='blue.100'> */}
          <Link to='/heartdisease'>
            
            <HorCard
                a="https://img.freepik.com/free-photo/top-view-tensiometer-checking-blood-pressure_23-2150456071.jpg?t=st=1720458536~exp=1720462136~hmac=546a49b05dd7f47ef24aca0aa4c45f12cd6c5dd6e3602fc0d25e8e80ec9a3f8e&w=900"               
                b="Check out "
                c="Heart disease is a term used to describe a range of conditions that affect the heart."
                d="Test Now"
            />
          </Link>
        </HStack>
      </Stack>
      <Footer></Footer>
    </ChakraProvider>
  );
}
