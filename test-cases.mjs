import { expect } from 'chai';

export default [
  {
    description: 'Addition of 2 + 3 should be 5',
    test: (add) => {
      const result = add(2, 3);
      const expected = 5;
      expect(result).to.equal(expected);
    }
  },
  {
    description: 'Addition of -1 + 1 should be 0',
    test: (add) => {
      const result = add(-1, 1);
      const expected = 0;
      expect(result).to.equal(expected);
    }
  },
  {
    description: 'Addition of 50000+20000 should be 70000',
    test:(add)=>{
      const result=add(50000,20000)
      const expected=70000;
      expect(result).to.equal(expected);
    }
  }
];
