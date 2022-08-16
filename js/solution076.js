function findShort(s){

 let result = s.split(' ').map(word => word.length).sort((a,b)=>a-b)
 return result[0]
}
console.log(findShort('eye of the tiger'))//2
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))//3
console.log(findShort("Waves ProofOfStake Bitcoin Ripple Monero Steem DarkCoin Dash Lisk LiteCoin Mine BTC Monero"))//3
// take in a string of words
//return the length of shortest word

/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */