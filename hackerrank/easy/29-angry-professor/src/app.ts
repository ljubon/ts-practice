/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 * 
 * k = number of students we need to have in class before its begins
 * n = a.lenght
 * result = YES | NO
 * 
 * count negative and 0 from given array
 * compare that result with k and return 
 * YES if it's equal or less
 * NO if it's more then the thresold
 * 
 */
function validateInputs(k: number, a: number[]): boolean {
  let result = true;
  if (a.length < 1 || a.length > 1000) result = false;
  if (k < 1 || k > a.length) result = false;

  a.forEach( (x, i) => {
    if (x < -100 || x > 100 || i > a.length - 1) result = false;
  });

  return result;
}

function angryProfessor(k: number, a: number[]): string {
  type ResultType = "YES" | "NO";
  let result: ResultType;

  if (!validateInputs(k, a)) return "Not valid inputs";
  let arrivedOnTime = a.filter(x => x <= 0).length;
  (arrivedOnTime <= k) ? result = "YES" : result = "NO";
  return result;
}
