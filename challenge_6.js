/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */

exports.SumOfASquare = class SumOfASquare {
  constructor(naturalNumbers) {
    this.naturalNumbers = naturalNumbers;
  }

  sumOfSquares() {
    let sum = 0;
    
    for (let i = 1; i <= this.naturalNumbers; i++) {
      sum += Math.pow(i, 2);      
    }
  
    return sum;
  }

  squareOfTheSums() {
    let sum = 0;
    let square = 0;

    for (let j = 1; j <= this.naturalNumbers; j++) {
      sum += j;
    }

    square = Math.pow(sum, 2);
    return square;
  }
}

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
