import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    // destructiure data from response
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9e6aae4324msh5c1c60b9389dde1p12ee25jsn860fd9ba9a4c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}