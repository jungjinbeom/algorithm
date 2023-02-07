function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    for(let i =0; cities.length>i;i++){
        const city = cities[i].toUpperCase();
        const findCache = cache.find((item)=>city===item);
        if(findCache){
            cache = cache.filter((item)=> item!==city);
            cache.push(city)
            time+=1 //hit
        }else{
            cache.push(city);
            if(cache.length>cacheSize){
                cache.shift();
            }
            time+=5 // miss   
        }
    }
        
       
    return time;
}