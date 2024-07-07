import Accordian from "../Components/Accordian"
import Navbar from "../Components/navbar"
import { ChakraProvider,HStack,Heading ,Image,Text,Flex } from '@chakra-ui/react'
import Footer from "../Components/Footer"

    export default function FAQ() {

        return (
           <ChakraProvider>
              <Navbar></Navbar>
                {/* <Image width="100%" height="350px" src="./public/Images/FAQ.jpeg"></Image> */}
                <Heading p='40px' mt='40px'>Frequently Asked Question</Heading>
            <Flex position="relative" bg='blackAlpha.700'> 
            <Text m='0' p='0' color="white" bg='purple.500'   width='50%'   >
                    <br />
                    <Heading p='20px'>About</Heading>
                <Accordian
                    a='What is Welness Wave?'
                    b='Welness Wave is a platform that provides you with the best wellness services and products to help you lead a healthy life.'
                  
                />
                <Accordian
                    a='How can I contact you?'
                    b='You can contact us by visiting our contact page and filling out the form. We will get back to you as soon as possible.'
                   
                />

                <Accordian
                a='What is the goal of ensuring healthy lives and promoting well-being?'
                b='The goal is to help everyone live healthier, longer lives. This includes preventing diseases, providing good healthcare, and promoting healthy habits and environments.

'
                
                />
                    
                    <Accordian
                    a='Why is promoting well-being important?'
                    b='Well-being is essential because it affects our overall quality of life. When people are healthy and feel good mentally and emotionally, they can work better, learn more, and contribute positively to their communities.'                   
                />
                <Accordian
                    a='How can we prevent diseases?'
                    b='Diseases can be prevented by practicing good hygiene, getting vaccinated, eating a balanced diet, exercising regularly, avoiding harmful habits like smoking, and having regular health check-ups.'                     
                />

                <Accordian
                a='What are some healthy habits we should adopt?'
                b='Some healthy habits include eating nutritious foods, staying active, getting enough sleep, drinking plenty of water, and managing stress through relaxation techniques.   '
                  
                />
                <Accordian
                a='How does vaccination help in promoting health?'
                b='Vaccinations protect us from many dangerous diseases by building immunity. They are a safe and effective way to prevent illnesses and their spread in the community.   '
                  
                />
                <Accordian
                a='What role does mental health play in overall well-being?'
                b='We can support mental health by reducing stigma, providing access to mental health services, encouraging open conversations about feelings, and promoting activities that reduce stress. health is crucial because it affects how we think, feel, and act. Good mental health helps us handle stress, make decisions, and relate to others effectively.You   '
                  
                />
                <Accordian
                a='What is the importance of clean water and sanitation for health?'
                b='Clean water and good sanitation prevent many diseases, including diarrhea and cholera. Access to clean water and proper sanitation facilities is essential for maintaining health and hygiene.'
                  
                />
                <Accordian
                a='How does regular exercise contribute to well-being?'
                b='Regular exercise keeps our bodies fit and strong, reduces the risk of chronic diseases, boosts our mood, and improves sleep. It is essential for both physical and mental health.

'
                  
                />
                   
                </Text >


                <Text m='0' color="white"   width='50%' bg='green.500'>
                    <br />
                    <Heading p='20px'>Healthy Lifestyle</Heading>
                <Accordian
                    a='What are the benefits of a balanced diet? '
                    b='A balanced diet provides all the necessary nutrients our body needs to function correctly. It helps maintain a healthy weight, supports growth and development, and prevents nutrition-related diseases.'
                />
                <Accordian
                    a='How can we reduce health inequalities?'
                    b='Reducing health inequalities involves ensuring everyone has access to quality healthcare, education, and resources, regardless of their socio-economic status, location, or background.

'
                />

                <Accordian
                    a='What impact does pollution have on health?'
                    b='Pollution can cause respiratory problems, heart diseases, and other health issues. Reducing pollution by using clean energy and promoting sustainable practices is crucial for a healthier environment.'
                />

                <Accordian
                    a='How can we promote health and well-being in schools?'
                    b='Schools can promote health by providing nutritious meals, encouraging physical activity, teaching about hygiene and healthy habits, and offering mental health support.'
                />

                <Accordian
                    a='Why is early childhood development important for health?'
                    b='Early childhood is a critical period for growth and development. Proper nutrition, healthcare, and a stimulating environment during this time can lead to better health and well-being throughout life.'
                />      
                <Accordian
                    a='What are some ways to manage stress effectively?'
                    b='Managing stress can be done through regular exercise, practicing mindfulness or meditation, maintaining a healthy lifestyle, seeking support from friends and family, and taking breaks when needed.'
                />
               
               <Accordian
                    a='How can workplaces contribute to the well-being of employees?'
                    b='Workplaces can promote well-being by providing a safe and healthy work environment, encouraging regular breaks, offering health and wellness programs, and supporting work-life balance.'
                />

                <Accordian
                    a='What is the role of technology in promoting health?'
                    b='Technology can improve health by providing access to information, enabling telemedicine, tracking fitness and health data, and supporting healthcare professionals with advanced tools and resources.'
                />   

                <Accordian
                    a='How can communities promote physical activity?'
                    b='Communities can promote physical activity by creating safe and accessible parks, playgrounds, and sports facilities, organizing community events, and encouraging active transportation like walking and cycling.'
                />

                <Accordian
                    a='What can individuals do to support global health efforts?'
                    b='Individuals can support global health by adopting healthy habits, advocating for better healthcare policies, participating in health-related programs, and spreading awareness about the importance of health and well-being.'


                />

                <Accordian
                    a='How does promoting well-being contribute to sustainable development?'
                    b='Promoting well-being ensures that people are healthy and capable of contributing to society, leading to economic growth, social stability, and a sustainable future for all. Healthy populations are more productive and resilient, which benefits everyone.'
                />  
                

                   
                </Text>
            </Flex>
            
            <Footer></Footer>
                   
                
           </ChakraProvider>

        )
    }