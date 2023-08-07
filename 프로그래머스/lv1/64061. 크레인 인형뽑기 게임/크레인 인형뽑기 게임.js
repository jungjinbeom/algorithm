function solution(board, moves) {
    let answer = 0;
    const newBoard = [];
    
    moves.forEach((move,idx)=>{
        let current = 0;
        for(let i=0;board.length>i;i++){
            if(board[i][move-1]){
                current=board[i][move-1];
                board[i][move-1] = 0;
                break;
            }
            
        }
        
        if(current){
            const lastNum = newBoard[newBoard.length-1];
            if(current === lastNum){
                newBoard.pop();
                answer += 2
            }else{
                newBoard.push(current);
            }   
        }
    })
    return answer;
}