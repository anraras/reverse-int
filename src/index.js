module.exports = function reverse (n) {
    n=n.toString().split('').reverse().join('').replace("-", '')
    
    for (let i =0; n[0] === '0';) {
        n=n.slice(1)

    }
    return n
  
}


