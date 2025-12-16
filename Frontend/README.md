# Handle Multiple Checkbox

checked={data.product_color.includes("red")}
🧠 What does checked mean?
In React, for a checkbox:

checked={true} → checkbox is checked

checked={false} → checkbox is unchecked

So React needs true / false value.

🧩 What is data.product_color?
From your code:

js
Copy code
product_color: []
This means product_color is an array that stores selected colors.

Example:

js
Copy code
data.product_color = ["red", "blue"];
🔎 What does .includes("red") do?
JavaScript array method:

js
Copy code
array.includes(value)
returns true if value exists

returns false if value does NOT exist

Example
js
Copy code
["red", "blue"].includes("red")   // true
["red", "blue"].includes("black") // false
✅ So the full meaning becomes
jsx
Copy code
checked={data.product_color.includes("red")}
👉 Plain English:

“If red exists in product_color array, then check this checkbox, otherwise uncheck it.”

📦 Real-time Example
Case 1: User selects Red
js
Copy code
data.product_color = ["red"];
js
Copy code
data.product_color.includes("red") // true
✔️ Checkbox becomes checked

Case 2: User unchecks Red
js
Copy code
data.product_color = [];
js
Copy code
data.product_color.includes("red") // false

# Handle Images