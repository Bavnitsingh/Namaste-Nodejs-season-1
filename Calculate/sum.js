// Modules protect their variables and functions from leaking.
 function calculate_sum(a, b) {
  const sum = a + b;
  console.log(sum);
}
 console.log("Sum module is called");
module.exports = {
  calculate_sum
  
};
