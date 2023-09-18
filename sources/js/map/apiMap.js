const ConectToApi = async()=>{
    const reqRoute = await fetch('http://127.0.0.1:5500/api/map.json',{
        headers:{
            //HEADERS
        }
    });
    const resData = await reqRoute.json();

    return resData;
}

export default ConectToApi;