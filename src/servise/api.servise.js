import axios  from 'axios'

const BaseUrl = `https://youtube-v31.p.rapidapi.com`

const options = {
    url: 'https://youtube-v31.p.rapidapi.com/captions',
   
    params: {
      maxResults: "50"
    },
    headers: {
      'X-RapidAPI-Key': '8221b0865fmsh1e5a6e1eed1e1f6p115c3ajsndc22c790a0a9',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
  };
  
// async bolsa await
export const ApiServise ={
    async fetching(url) {
        const response = await axios.get(`${BaseUrl}/${url}`, options)
        return response.data.items
    }
}