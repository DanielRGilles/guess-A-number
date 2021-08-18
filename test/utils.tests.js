import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = '1';
    const valOne = '0';
    const valTwo = '1';

    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = ;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.compareNumbers(valOne, valTwo);
});