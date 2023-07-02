const sortAscending = (a,b)=>a-b
function solution(wallpaper) {
    var answer = [];
    const x = [];
    const y = [];
    for(let i=0;wallpaper.length>i;i++){
        for(let j = 0;wallpaper[i].length>j;j++){
            if(wallpaper[i][j]==='#'){
                x.push(i);
                y.push(j)
            } 
        }
    }
    
    x.sort(sortAscending);
    y.sort(sortAscending);
    
    return [x[0],y[0],x[x.length-1]+1,y[y.length-1]+1]
}