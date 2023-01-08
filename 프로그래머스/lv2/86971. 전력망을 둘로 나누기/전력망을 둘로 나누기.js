function solution(n, wires) { 
    var answer = 100;
    const links = {}
    // 너비우선탐색을 위한 그래프 형 자료구조
    for(let i =0; wires.length>i;i++){
        const [v1,v2] = wires[i];
        if(!links[v1]) links[v1] = [];
        if(!links[v2]) links[v2] = [];
          links[v1].push(v2)
          links[v2].push(v1) 
    }
    
    const bfs =(graph, startNode)=>{
        let count = 0 
        const queue =[graph];
        const visited=[];  
        visited[graph]=true
        while(queue.length){
            const node = queue.pop();
            links[node].map(next=>{
                if(next !==startNode && !visited[next]){
                    visited[next]=true;
                    queue.push(next)
                }
            })
            count ++ 
        }
        return count
    }
    
    wires.map((w,i)=>{
        const [v1,v2] = w
        const diff=Math.abs(bfs(v1,v2)-bfs(v2,v1));
        answer = answer > diff ?  diff: answer ; 
    })
    return answer;
}