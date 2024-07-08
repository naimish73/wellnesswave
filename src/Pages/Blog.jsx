import {Box,Text, Stack,ChakraProvider,Container, Heading, Flex, Image, } from '@chakra-ui/react'
import Navbar from "../Components/navbar.jsx"
import Footer from "../Components/Footer.jsx"

export default function Blog() {
        return (
           <ChakraProvider >
             
            
            <Navbar></Navbar>   
            <Stack bg='purple.500' fontFamily='Times-new-roman'>
                
            <Text as='b' fontSize='5xl' p='30px' fontFamily='Montserrat' color='white'>Wellness Blog</Text>
                <Box pt='40px'>
            <Text as='b' p='30px' m='0px' fontSize='4xl' color='white' fontFamily='Montserrat'>Educational Articles: Disease Information</Text>
          <br />
          <br />
          <br />
            <Container maxW="auto" centerContent>
            <Box p="6" mb="8" boxShadow="base" borderRadius="md" bg="pink.200">
                <Flex align="center" justify="space-between">
                    <Box flex="1" mr="4">
                        <Heading as="h2" size="lg" mb="4" fontFamily='Montserrat'>
                            Understanding Common Health Concerns: Breast Cancer
                        </Heading>
                        <Text fontSize="lg">
                            Breast cancer is one of the most common types of cancer that affects millions of women worldwide.
                            It occurs when there is an abnormal growth of cells in the breast tissue, forming a lump or mass.
                            Symptoms of breast cancer may include a lump in the breast or armpit, changes in breast size or shape,
                            nipple discharge, or skin changes on the breast.
                        </Text>
                        <Text mt="4">
                            <strong>Treatment options:</strong> Surgery, chemotherapy, radiation therapy, hormone therapy, and targeted therapy.
                            Early detection through regular screenings such as mammograms is crucial for successful treatment outcomes.
                        </Text>
                        <Text mt="4">
                            <strong>Preventive measures:</strong> Maintain a healthy lifestyle, avoid tobacco use, limit alcohol consumption,
                            maintain a healthy weight, and stay physically active. Regular exercise and a balanced diet can help reduce the risk of developing breast cancer.
                        </Text>
                    </Box>
                    <Box flex="1">
                        <Image
                            src="https://img.freepik.com/free-vector/breast-cancer-awareness-concept_23-2148641276.jpg?t=st=1720457442~exp=1720461042~hmac=f6455b4c5361d58dbe31f3e67494c68c04181a161e710ca1097e35753dfaee7a&w=740"
                            alt="Breast Cancer"
                            maxW="100%"
                            borderRadius="md"
                        />
                    </Box>
                </Flex>
            </Box>

            <Box p="6" mb="8" boxShadow="base" borderRadius="md" bg="yellow.100">
                <Flex align="center" justify="space-between">
                    <Box flex="1" mr="4">
                        <Heading as="h2" size="lg" mb="4" fontFamily='Montserrat'>
                            Diabetes
                        </Heading>
                        <Text fontSize="lg">
                            Diabetes is a chronic condition that affects how your body uses blood sugar (glucose).
                            There are different types of diabetes, including type 1 diabetes, type 2 diabetes, and gestational diabetes.
                            Symptoms of diabetes may include frequent urination, excessive thirst, unexplained weight loss, fatigue,
                            blurred vision, and slow healing of wounds.
                        </Text>
                        <Text mt="4">
                            <strong>Treatment options:</strong> Lifestyle changes such as dietary modifications, regular exercise,
                            monitoring blood sugar levels, and medication. Insulin therapy may be necessary for individuals with type 1 diabetes,
                            while oral medications may be prescribed for individuals with type 2 diabetes.
                        </Text>
                        <Text mt="4">
                            <strong>Preventive measures:</strong> Maintain a healthy weight, eat a balanced diet, stay physically active,
                            monitor blood sugar levels, and avoid tobacco use. Regular medical check-ups and screening tests can help detect
                            diabetes early and prevent complications.
                        </Text>
                    </Box>
                    <Box flex="1">
                        <Image
                            src="https://www.howard-finley.co.uk/wp-content/uploads/2020/06/dreamstime_l_180162487-scaled.jpg"
                            alt="Diabetes"
                            maxW="100%"
                            borderRadius="md"
                        />
                    </Box>
                </Flex>
            </Box>

            <Box p="6" mb="8" boxShadow="base" borderRadius="md" bg="green.400" color='white'>
                <Flex align="center" justify="space-between">
                    <Box flex="1" mr="4">
                        <Heading as="h2" size="lg" mb="4" fontFamily='Montserrat'>
                            Heart Diseases
                        </Heading>
                        <Text fontSize="lg">
                            Heart diseases refer to a range of conditions that affect the heart and blood vessels,
                            including coronary artery disease, heart attack, heart failure, and arrhythmias.
                            Symptoms of heart diseases may include chest pain or discomfort, shortness of breath, fatigue, dizziness,
                            and irregular heartbeat.
                        </Text>
                        <Text mt="4">
                            <strong>Treatment options:</strong> Lifestyle changes such as dietary modifications, regular exercise,
                            quitting smoking, and medication. In some cases, surgical procedures such as angioplasty or bypass surgery
                            may be necessary to improve blood flow to the heart.
                        </Text>
                        <Text mt="4">
                            <strong>Preventive measures:</strong> Maintain a healthy weight, eat a heart-healthy diet, stay physically active,
                            manage stress, and avoid tobacco use. Regular cardiovascular screenings and medical check-ups can help assess
                            the risk of developing heart diseases and prevent complications.
                        </Text>
                    </Box>
                    <Box flex="1">
                        <Image
                            src="https://www.findatopdoc.com/var/fatd/storage/images/_aliases/article_main/media/images/heartdisease/409477-1-eng-US/heartdisease.jpg"
                            alt="Heart Diseases"
                            maxW="100%"
                            borderRadius="md"
                        />
                    </Box>
                </Flex>
            </Box>
        </Container>
         </Box>

            </Stack>

            <Footer></Footer>
           </ChakraProvider>
        );
    }