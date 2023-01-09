function solution(array, commands) {
    return commands.map((command,idx)=>{
        const [i,j,k] = command;
        const result = array.slice(i-1,j).sort((a,b)=>a-b);
        return result[k-1];
    });
}