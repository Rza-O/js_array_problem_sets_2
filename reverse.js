/**
 * # array-looping-tasks

### Task 1

Write a JavaScript code to reverse the array colors `without using the reverse method`.

**Input:**
`const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

**Output:**

`['orange', 'yellow', 'green', 'blue', 'red']`

---
 */

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange'];

const reversed = [];

for(const color of colors){
    // console.log(color);
    reversed.unshift(color);
}
console.log(reversed);



for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    reversed.unshift(color);
}
console.log(reversed)