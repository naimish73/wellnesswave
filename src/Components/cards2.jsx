import { Card,CardBody,Button,Image,Stack,Heading,Text} from '@chakra-ui/react'
import PropTypes from 'prop-types';

export default function HorCard(props) {
    const {a,b,c,d} = props;
    return(

        <Card maxW='sm'  m='40px'>
            
  <CardBody>
    <Image
      src={a}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      w='450px'
      h='200px'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{b}</Heading>
      <Text>
        {c}
      </Text>
      <Button colorScheme='blue' variant='outline'>
      {d}
      </Button>
     
    </Stack>
  </CardBody>
</Card>


    );
}

HorCard.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  c: PropTypes.string.isRequired,
  d: PropTypes.string.isRequired,
};



