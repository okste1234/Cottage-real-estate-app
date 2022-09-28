import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs


import house from '../assets/housebg.jpg'

import styles from '../styles/Banner.module.css'

import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'


const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })
export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent)
  return (
    <Box >
      <Box style={{
        width: '75%',
        margin: '0 auto'
      }}>
        <div>
          <Flex flexWrap='wrap' justifyContent="space-between" alignItems='center' paddingBottom='40' position='relative'

            className={styles.banner}
          >

            <div style={{ display: 'flex', flexDirection: 'column' }}>


              <Box className={styles.bgBannerLeft}
                style={{
                  backgroundColor: '#fff',
                  zIndex: '2',
                  boxShadow: '2px 3px 4px 2px #eee',
                  borderRadius: '30px',
                  marginLeft: '0',
                  padding: '40px',
                  border: '1px solid #ccc'

                }}>



                <Text
                  fontSize='4xl'
                  fontWeight='semibold'
                  style={{
                    color: '#f09d51'
                  }}
                >
                  Find Your Dream Properties...
                </Text>

                <Text fontWeight='400' marginTop='3'>
                  Building Award winning Properties across Qatar, Dubai and all over the world.
                </Text>
              </Box>


              <Flex style={{
                marginTop: '40px',
                justifyContent: "space-between",
                width: '300px',
                zIndex: '2'
              }}>
                <Button
                  style={{
                    backgroundColor: '#f09d51',
                    color: '#fff'
                  }}
                >
                  Explore Buying
                </Button>

                <Button
                  style={{
                    backgroundColor: '#f09d51',
                    color: '#fff'

                  }}
                >
                  Explore Renting
                </Button>
              </Flex>





            </div>


            <Box position='absolute' right='0' className={styles.bgBanner} >
              <Image alt='house' src={house} width='700' height='500px' style={{ borderRadius: '70px' }} />
            </Box>



          </Flex>



        </div>

        <Flex flexWrap='wrap' justifyContent='center'>
          {
            propertiesForRent.map((property) => <Property property={property} key={property.id} />)
          }
        </Flex>
      </Box>




      <Box style={{
        backgroundColor: '#f09d51',
        margin: '0 auto',
        marginTop: '70px',
        // marginBottom:'10px',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        padding: '40px'

      }}>
        <Text fontSize='3xl' fontWeight='bold' textAlign='center'>Explore Properties For Sale</Text>
      </Box>

      <Box style={{
        width: '80%',
        margin: '0 auto'
      }}>
        <Flex flexWrap='wrap' justifyContent='center'>
          {
            propertiesForSale.map((property) => <Property property={property} key={property.id} />)
          }
        </Flex>
      </Box>




    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}