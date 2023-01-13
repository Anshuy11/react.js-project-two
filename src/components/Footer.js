import React from 'react';
import {Box,Stack,Heading,VStack, HStack, Button,Input,Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
   <Box bgColor={'blackAlpha.900'} minH={'30'}
   p="4"
   color={'white'}
   >
   <Stack direction={['column','row']}>
<VStack alignItems={'stretch'} width={'full'} py={'4'} px={"2"}>
   <Heading size={'md'} textTransform={'capitalize'} textAlign={'center'} >
    Subscribe for getting updates regularly.
   </Heading>

   <HStack 
   borderBottom={'none'}
   >

   <Input  placeholder='Enter your Email...' border={'none'} outline={'solid'} color='purple'/>
   <Button 
   p={'0'}
   colorScheme={'purple'}
   variant={'ghost'}
   borderRadius={'0 20px 20px 0'}
   >

   <AiOutlineSend />

   </Button>
   </HStack>
   </VStack>

   <VStack w={'full'}
   borderLeft={['none','1px solid white']}
   borderRight={['none','1px solid white']}
   >

   <Heading textTransform={'capitalize'}
     textAlign={'center'} size={'md'}>
     Video Hub
     </Heading>

     <Text> &#169;All rights resevered</Text>
   </VStack>
   
   <VStack w={'full'} >
   
     <Heading size={'md'} textTransform={'capitalize'}>Social Media</Heading>

    <Button variant={'link'} colorScheme={'purple'}> <a target={'blank'} href ='https://youtube.com'>Youtube</a></Button>
   
    <Button variant={'link'} colorScheme={'purple'}> <a target={'blank'} href ='https://vercel.com/anshuy115-gmailcom'>Vercel</a></Button>
  
    <Button variant={'link'} colorScheme={'purple'}> <a target={'blank'} href ='https://vercel.com/anshuy115-gmailcom'>GitHub</a></Button>
   </VStack>
   
   </Stack>
   
   
   </Box>
  )
}

export default Footer
