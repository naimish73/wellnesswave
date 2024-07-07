import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup,Divider,Image,Stack,Heading,Text, } from '@chakra-ui/react'

export default function Cards(props) {
  const {a,b} = props;
    return (
      
      
        
        <Card maxW='sm' m='40px'>
            
  <CardBody>
    <Image
      src={a}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      w='450px'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        {b}
      </Text>
     
    </Stack>
  </CardBody>
</Card>

    
    );
}



