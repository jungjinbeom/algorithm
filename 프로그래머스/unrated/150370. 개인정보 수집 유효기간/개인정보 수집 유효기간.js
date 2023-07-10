
function solution(today, terms, privacies) {
    const answer = [];
    const termType={}
    const current = new Date(today);
    
    terms.forEach((item)=>{
        const [str,num] = item.split(' ');
        termType[str] = Number(num);
    });
    
   privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");   
    const chDate = new Date(date);
    chDate.setMonth(chDate.getMonth() + termType[type]);
    if (chDate <= current) answer.push(idx + 1);
  });
 
    return answer;
}