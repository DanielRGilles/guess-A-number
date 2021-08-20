import { getRandom } from '../utils.js';
const test = QUnit.test;
let num1;

test('should take in 1 and return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    num1 = 1;
     
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = getRandom(num1); 
    const expected = 1;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in a number and return true if 1-20 and false if outside of that range', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let actual;
    let rollGen1;
    num1 = 20;
    rollGen1 = getRandom(num1);
    if (0 < rollGen1 && rollGen1 < 21) {
        actual = true;
    } else return false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
   
    
    const expected = true;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in a num1 value and if the roll is oustide of roll gen actual = false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let actual;
    let rollGen;
    num1 = 1;
    rollGen = getRandom(num1);
    if (5 < rollGen && rollGen < 15) {
        actual = true;
    } else actual = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const expected = false;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should take in a num1 value and return true if roll is within rollGen range', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let actual;
    let rollGen;
    num1 = 100;
    rollGen = getRandom(num1);
    if (0 < rollGen && rollGen < 101) {
        actual = true;
    } else actual = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const expected = true;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});