import { getRandom } from '../app.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = getRandom(10);
    const expected = true;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});