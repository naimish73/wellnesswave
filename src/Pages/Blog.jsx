import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../Components/navbar"
    export default function Blog() {
        return (
           <ChakraProvider>
             
            
            <Navbar></Navbar>
            <h1>Blog</h1>
        
           </ChakraProvider>
        )
    }