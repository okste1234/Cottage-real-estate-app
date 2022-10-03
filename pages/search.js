import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters'
import Property from '../components/Property'

import { baseUrl, fetchApi } from '../utils/fetchApi'


const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter();


    return (
        <Box marginTop='70'>
            <Flex
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
            
                justifyContent='center'
                alignItems='center'
                
                onClick={() => setSearchFilters((prev) => !prev)}

            >
                <Text>Search Properties by Filter</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>

            <Box style={{
                width: '75%',
                margin: '0 auto'
            }}>
                {
                    searchFilters && <SearchFilters />
                }

                <Text fontSize='2xl' p='16' fontWeight='bold'>
                    Properties {router.query.purpose}
                </Text>

                <Flex flexWrap='wrap' justifyContent='center'>
                    {
                        properties.map((property) => <Property property={property} key={property.id} />)
                    }
                </Flex>
                {properties.length === 0 && (
                    <Flex flexDirection='column' marginTop='5' alignItems='center' marginBottom='5' flexWrap='wrap' justifyContent='center'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="126.795" height="129.387" viewBox="0 0 126.795 129.387">
                            <g id="Group_146" data-name="Group 146" transform="translate(-64.456)">
                                <circle id="Ellipse_161" data-name="Ellipse 161" cx="47.358" cy="47.358" r="47.358" transform="translate(96.534)" fill="#3f3d56" />
                                <circle id="Ellipse_162" data-name="Ellipse 162" cx="39.096" cy="39.096" r="39.096" transform="translate(104.797 8.262)" opacity="0.05" />
                                <circle id="Ellipse_163" data-name="Ellipse 163" cx="32.042" cy="32.042" r="32.042" transform="translate(111.85 15.316)" opacity="0.05" />
                                <circle id="Ellipse_164" data-name="Ellipse 164" cx="22.974" cy="22.974" r="22.974" transform="translate(120.918 24.384)" opacity="0.05" />
                                <path id="Path_630" data-name="Path 630" d="M385.045,361.232s-3.723,10.48-2.069,14.2a46.238,46.238,0,0,0,4.275,7.309S386.286,361.922,385.045,361.232Z" transform="translate(-317.392 -309.636)" fill="#d0cde1" />
                                <path id="Path_631" data-name="Path 631" d="M385.045,361.232s-3.723,10.48-2.069,14.2a46.238,46.238,0,0,0,4.275,7.309S386.286,361.922,385.045,361.232Z" transform="translate(-317.392 -309.636)" opacity="0.1" />
                                <path id="Path_632" data-name="Path 632" d="M388.381,514.267a22.35,22.35,0,0,1-.414,2.758c-.138.138.138.414,0,.827s-.276.965,0,1.1-1.517,12.273-1.517,12.273-4.413,5.792-2.62,14.893l.552,9.239s4.275.276,4.275-1.241a25.264,25.264,0,0,1-.276-2.62c0-.827.689-.827.276-1.241s-.414-.689-.414-.689.689-.552.552-.69,1.241-9.929,1.241-9.929,1.517-1.517,1.517-2.344v-.827s.689-1.793.689-1.931,3.723-8.55,3.723-8.55l1.517,6.068,1.655,8.688s.827,7.86,2.482,10.894c0,0,2.9,9.929,2.9,9.653s4.826-.965,4.689-2.206-2.9-18.617-2.9-18.617L407,513.991Z" transform="translate(-318.108 -438.4)" fill="#2f2e41" />
                                <path id="Path_633" data-name="Path 633" d="M380.158,764.1s-3.723,7.309-1.241,7.585,3.448.276,4.551-.827a18.354,18.354,0,0,1,2.808-2.022A3.631,3.631,0,0,0,388,765.381c-.073-.675-.325-1.231-.945-1.282a8.47,8.47,0,0,1-3.585-1.655Z" transform="translate(-313.608 -647.827)" fill="#2f2e41" />
                                <path id="Path_634" data-name="Path 634" d="M510.968,798.337s-3.723,7.309-1.241,7.585,3.448.276,4.551-.827a18.356,18.356,0,0,1,2.808-2.022,3.631,3.631,0,0,0,1.723-3.453c-.073-.675-.325-1.231-.945-1.282a8.472,8.472,0,0,1-3.585-1.655Z" transform="translate(-423.871 -676.688)" fill="#2f2e41" />
                                <circle id="Ellipse_165" data-name="Ellipse 165" cx="5.797" cy="5.797" r="5.797" transform="translate(77.365 28.042)" fill="#ffb8b8" />
                                <path id="Path_635" data-name="Path 635" d="M449.378,260.308s-4.141,7.619-4.472,7.619,7.453,2.484,7.453,2.484,2.153-7.287,2.484-7.95Z" transform="translate(-369.942 -224.565)" fill="#ffb8b8" />
                                <path id="Path_636" data-name="Path 636" d="M413.956,289.688s-8.274-4.551-9.1-4.413-9.653,7.86-9.515,11.032a68.162,68.162,0,0,0,1.241,8.412s.414,14.617,1.241,14.755-.138,2.62.138,2.62,19.306,0,19.444-.414S413.956,289.688,413.956,289.688Z" transform="translate(-328.168 -245.607)" fill="#d0cde1" />
                                <path id="Path_637" data-name="Path 637" d="M528.477,521.892s2.62,8,.414,7.722-3.172-6.895-3.172-6.895Z" transform="translate(-438.07 -445.06)" fill="#ffb8b8" />
                                <path id="Path_638" data-name="Path 638" d="M475.076,310.237s-5.1,1.1-4.275,8,2.344,13.79,2.344,13.79l5.1,11.17.552,2.069,3.723-.965-2.758-16s-.965-17.1-2.206-17.651A5.341,5.341,0,0,0,475.076,310.237Z" transform="translate(-391.702 -266.639)" fill="#d0cde1" />
                                <path id="Path_639" data-name="Path 639" d="M277.5,411.7l6.343,11.308L278.5,411.09Z" transform="translate(-197.229 -346.518)" opacity="0.1" />
                                <path id="Path_640" data-name="Path 640" d="M465.1,209.01l.019-.443.881.219a.985.985,0,0,0-.395-.725l.939-.052a10.128,10.128,0,0,0-6.774-4.186,6.47,6.47,0,0,0-5.683,1.638,6.85,6.85,0,0,0-1.4,2.609c-.556,1.746-.669,3.828.49,5.248,1.178,1.443,3.236,1.725,5.09,1.9a4.019,4.019,0,0,0,1.941-.132,4.668,4.668,0,0,0-.26-2.048,1.365,1.365,0,0,1-.138-.652c.082-.552.818-.691,1.371-.616s1.217.189,1.58-.235a1.878,1.878,0,0,0,.269-1.1C463.115,209.4,465.087,209.229,465.1,209.01Z" transform="translate(-376.163 -176.878)" fill="#2f2e41" />
                            </g>
                        </svg>

                        <Text marginTop='5' fontSize='2xl'>No Result Found</Text>
                    </Flex>
                )}
            </Box>
        </Box>
    )

}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {
            properties: data?.hits,
        },
    };
}

export default Search
