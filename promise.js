const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let promise1 = await promiseTheaterIXX();
  let promise2 = await promiseTheaterVGC();
  let all = promise1.concat(promise2);
  let result = 0;
  all.map((promise1) => promise1.hasil === emosi && (result += 1));
  return result;
};

module.exports = {
  promiseOutput,
};
