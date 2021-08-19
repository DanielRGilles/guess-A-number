import { getRandom } from '../utils.js';
const test = QUnit.test;
let num1;
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    num1 = '2';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = getRandom(num1); 
    const expected = '1' || '2';
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});