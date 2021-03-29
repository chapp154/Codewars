// https://www.algoexpert.io/questions/Validate%20Subsequence

export function isValidSubsequence(array, sequence) {
  
    const test = array.filter((curr, i) => sequence.includes(curr) && i >= sequence.indexOf(curr))
    const result = test.length >= sequence.length;
  
    return result;
}