function powe(base, exponent) {
    // base 
    if(exponent === 0) return 1
   return base * powe(base, exponent - 1)
}
