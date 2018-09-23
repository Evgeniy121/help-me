module.exports = function count(s, pairs) {
  // your implementation
    let j;
  let mas = [];
 
  let a = 0;
  for (let i = 0; i < pairs.length; i++){
      
      a = (pairs[i][0] ** pairs[i][1])
      mas.push(a)
  }
  let N = 1;
  if(pairs.length == 1){
    N = mas[0]
  }else{
    
    for (let i = 0; i < mas.length; i++){
      N *= mas[i];
    }
  }
  N=N% 1000000007;
  if ( N > Math.pow(10,8)){
    return 0;
  }
let kk=0;
  let result = [];
  for (let k = 1; k <= N; k++){
    let bl = false;
    
    for (let j = 0; j < s.length; j++){
      if((countNod(k+j, N) == 1 && s[j] == 0) || (countNod(k+j, N) != 1 && s[j] == 1)){
        bl = true;
        break;
      }
      }
      if(bl == false){
      kk++;
      }
    }
    
return (kk % 1000000007)


function countNod(n, m) {
  if(m > 0) { 
    let k = n%m;
    return countNod(m, k); 
  } 
  else { 
    return n;  
  }
}

}
