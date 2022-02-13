/* Task
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/
let admin;
let name = "John";
admin = name;
alert(admin);

// Numbers are used for float and integers up to 2^53-1
let someNumber = 42/7;

// the "n" at the end means it's a BigInt
const someBigInt = 1234567890123456789012345678901234567890n;

// typeof
alert(`Backquotes allow this: ${typeof someBigInt == "bigint"}, wow`)