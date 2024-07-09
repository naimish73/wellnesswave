import React from 'react';
import { Box, Heading, Text, List, ListItem, UnorderedList, Container, Divider } from '@chakra-ui/react';

 export default function  DiabetesPage()  {
  return (
    
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="2xl" mb={4} textAlign="center" color="teal.500">Diabetes</Heading>
      <Divider mb={8} />

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={2} color="teal.700">What is Diabetes?</Heading>
        <Text mb={4}>
          Diabetes is a chronic condition that occurs when the body is unable to regulate blood sugar (glucose) levels effectively. This can be due to the body's inability to produce enough insulin or to use insulin effectively.
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={2} color="teal.700">Types of Diabetes</Heading>
        <UnorderedList mb={4}>
          <ListItem>Type 1 Diabetes</ListItem>
          <ListItem>Type 2 Diabetes</ListItem>
          <ListItem>Gestational Diabetes</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={2} color="teal.700">Symptoms of Diabetes</Heading>
        <UnorderedList mb={4}>
          <ListItem>Increased thirst and hunger</ListItem>
          <ListItem>Frequent urination</ListItem>
          <ListItem>Fatigue</ListItem>
          <ListItem>Blurred vision</ListItem>
          <ListItem>Slow-healing sores</ListItem>
          <ListItem>Unexplained weight loss (Type 1)</ListItem>
          <ListItem>Tingling or numbness in hands or feet (Type 2)</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={2} color="teal.700">Treatment and Management</Heading>
        <UnorderedList mb={4}>
          <ListItem>Lifestyle Changes</ListItem>
          <ListItem>Medications</ListItem>
          <ListItem>Monitoring and Support</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={2} color="teal.300">Prevention</Heading>
        <UnorderedList mb={4}>
          <ListItem>Maintaining a healthy weight</ListItem>
          <ListItem>Eating a balanced diet</ListItem>
          <ListItem>Regular exercise</ListItem>
          <ListItem>Avoiding tobacco use</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
}


