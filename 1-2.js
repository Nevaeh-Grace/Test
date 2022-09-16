function solution(a,b,c){
    let answer = "yes";
    let max;
    let sum = a + b + c;

    if (a > b) max = a;
    else max = b;

    if (answer < c) max = c;

    if ((sum - max) <= max) answer = "no";

    return answer;
}

console.log(solution(11,6,7));