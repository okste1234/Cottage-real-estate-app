import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

import defaultImage from '../assets/house.jpg'



const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap='wrap' justifyContent="space-between" paddingTop='0' cursor='pointer' w='310px' p='5'>
        
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt='house' width='300' height='200' />
            </Box>

            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center' >
                        <Box paddingRight='3' color='blue.400'>{isVerified && <GoVerified />} </Box>
                        <Text fontWeight='bold' fontSize='sm'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>

                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url} />

                    </Box>
                </Flex>
                <Flex alignItems='center' padding='1' justifyContent='space-between' w='250px' color='#f09d51'>
                    {rooms}<FaBed /> | {baths} <FaBath />  | {millify(area)} sqft <BsGridFill />
                </Flex>

                <Text fontSize='sm'>
                    {title.length > 30 ? `${title.substring(0, 30)} ...` : title}
                </Text>

            </Box>
        </Flex>
    </Link>
)

export default Property;