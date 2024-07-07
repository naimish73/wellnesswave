import {  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box } from '@chakra-ui/react'
export default function Accordian(props) {
    const {a,b,c} = props;
    
    return(
        <Accordion allowToggle ml='30px' px='20px'  width={c}>
  <AccordionItem pb='1'>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          {a}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {b}
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
    );
}
