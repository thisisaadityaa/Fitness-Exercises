export const exerciseOptions =  {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': process.env.react_app_rapid_api_key,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData = async(url, options) => {

    const response = await fetch(url, options);

    const data = await response.json();

    return data;

}