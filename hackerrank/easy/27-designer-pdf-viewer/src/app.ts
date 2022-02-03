/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 * 
 * create a map with A to Z with indexes and given heights from input
 * convert given word to array
 * find max letter value with given word from map
 * do calculation:
 *  lenght of the word * 1 * heighestIndexOfLetter
 * return result
 * 
 */
function validate(stringIndexHeights: number[], word: string): boolean {
  let res = true;
  if (word.length > 10) return false;
  if (!word) return false;
  stringIndexHeights.forEach(element => {
    if (element < 1 && element > 7) return false;
  })
  return res;
}

function designerPdfViewer(stringIndexHeights: number[], word: string): number {
  // validate inputs
  if (!validate) return 0;

  // create indexed abecede
  let abecedeIndexed = new Map<string, number>();
  stringIndexHeights.forEach((height, index) => {
    abecedeIndexed.set(String.fromCharCode(index + 65).toLowerCase(), +height);
  });
  
  let wordArray = word.split('');
  let wordHeights: number[] = [];
  wordArray.forEach(letter => {
    wordHeights.push(abecedeIndexed.get(letter)!);
  });

  return word.length * 1 * Math.max(...wordHeights)
}

const a = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const b = 'abc';
console.log(designerPdfViewer(a, b));