/*
Title: Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

function sym() {
  const given_arr = [];
  for(const argument of arguments) {
    given_arr.push(argument);
  }

  function uniq(pre_arg, current_arg) {
    const result = [];

    for(const elem of pre_arg) {
      // もう一方の配列に当該要素がない かつ resultに当該要素がない要素をresultにpushする
      if (current_arg.indexOf(elem) < 0 && result.indexOf(elem) < 0) {
        result.push(elem);
      }
    }

    for(const elem of current_arg) {
      // もう一方の配列に当該要素がない かつ resultに当該要素がない要素をresultにpushする
      if (pre_arg.indexOf(elem) < 0 && result.indexOf(elem) < 0) {
        result.push(elem);
      }
    }
    return result
  }

  return given_arr.reduce(uniq)
}

sym([1, 2, 3], [5, 2, 1, 4])
