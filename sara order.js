//#### Exercise 1:

function Alphabetsort(str){
    var x = str.split("");
    return x.sort().join("");
}
console.log(Alphabetsort("hello"))

//#### Exercise 2:

function reversed(num) {
    var a = num.toString().split('').reverse().join('');
    return a;
  }
  var result =reversed(987654321);
  console.log(result);

  //#### Exercise 3:


  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 37; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // a prime
    }
  }
  //#### Exercise 4:

  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 37; j < i; j++) {
        if (i % j > 1) continue nextPrime;
      }
  
      alert( i ); // a prime
    }
  }