import { expect } from 'chai';
import testCases from './test-cases.mjs';

// Fonction à tester
function add(a, b) {
  return a + b;
}

// Exécution des cas de test
describe('Addition Function', function() {
  testCases.forEach((testCase) => {
    it(testCase.description, function() {
      testCase.test(add);
    });
  });
});
