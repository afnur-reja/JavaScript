# ◆ Synchronous and Asynchronous JavaScript

## ◆ Synchronous JavaScript

➜ Executes **one task at a time**, in order. Runs on the JavaScript main thread.

✔ The next line waits until the current line finishes.

```js
console.log("Start");
console.log("Hello");
console.log("End");
```

Output:
```
Start
Hello
End
```

### ✔ Characteristics
- Single-threaded execution
- Runs line by line
- Blocking (long tasks stop the rest of the code)

---

## ◆ Asynchronous JavaScript

➜ Allows **time-consuming tasks** to run without blocking other code. Handles by browser.

Examples of Common Asynchronous APIs :
- `setTimeout()`
- `setInterval()`
- `fetch()`
- File System (`fs`) in Node.js
- Database operations
- HTTP requests

```js
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");
```

Output:
```
Start
End
Hello
```

### ✔ Characteristics
- Non-blocking
- Improves responsiveness
- Uses callbacks, Promises, and `async/await`

---

## ◆ Why Asynchronous?

Without async:

```
Read file (5 sec)
↓
Everything waits
↓
Next code runs
```

With async:

```
Read file (5 sec) ───────►
Continue executing other code
When finished → callback/promise runs
```

---

## ◆ Comparison

| Synchronous | Asynchronous |
|-------------|--------------|
| Runs one after another | Doesn't wait for long tasks |
| Blocking | Non-blocking |
| Simpler flow | Better performance for I/O tasks |
| Long tasks freeze execution | Other code continues running |

---





# ◆ Callback Hell

## ◆ What is Callback Hell?

➜ **Callback Hell** is a situation where **multiple callbacks are nested inside one another**, making the code difficult to read, understand, and maintain.

It is also called the **Pyramid of Doom** because the code keeps shifting to the right.

---

## ◆ Example

```js
loginUser(user, () => {
    getProfile(() => {
        getPosts(() => {
            getComments(() => {
                console.log("Done");
            });
        });
    });
});
```

---

## ◆ Why is it a Problem?

✔ Code becomes hard to read.

✔ Difficult to debug.

✔ Hard to maintain.

✔ Error handling becomes complicated.

---




# ◆ Promises in JavaScript

## ◆ What is a Promise?

➜ A **Promise** is a JavaScript object that represents the **eventual result** (success or failure) of an asynchronous operation.

It helps avoid **callback hell** and makes asynchronous code easier to read.

---

## ◆ Promise States

A Promise has **3 states**:

1. **Pending** ➜ Initial state (operation is still running)
2. **Fulfilled** ➜ Operation completed successfully
3. **Rejected** ➜ Operation failed

```
Pending
   │
   ├──► Fulfilled
   │
   └──► Rejected
```

---

## ◆ Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});
```

- `resolve()` → Marks the promise as **fulfilled**.
- `reject()` → Marks the promise as **rejected**.

---

## ◆ Consuming a Promise

```js
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

- `.then()` → Runs when the promise is fulfilled.
- `.catch()` → Runs when the promise is rejected.
- `.finally()` → Runs whether fulfilled or rejected

> Note: .then(), .catch(), and .finally() always return a new Promise. Its resolved value is based on the callback's return value, enabling Promise chaining.

---

## ◆ Promise Chaining

➜ Multiple asynchronous tasks can be performed in sequence.

```js
doTask1()
    .then(doTask2)
    .then(doTask3)
    .catch(console.error);
```

---

# ◆ Fetch API 

## ◆ What is Fetch?

➜ `fetch()` is used to **make HTTP requests** and returns a **Promise**.

---

## ◆ Syntax

```js
fetch(url, options)
```

- `url` → API endpoint.
- `options` *(optional)* → Request configuration (method, headers, body, etc.).

---

## ◆ Basic Example

```js
fetch("https://api.example.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```

---

## ◆ Common HTTP Methods

- `GET` → Retrieve data.
- `POST` → Create data.
- `PUT` → Update entire data.
- `PATCH` → Update part of data.
- `DELETE` → Delete data.

---

## ◆ Common Response Methods

- `response.json()` → Parse JSON response.
- `response.text()` → Parse text response.
- `response.blob()` → Parse binary data (images/files).

> **ⓘ Note:** `fetch()` resolves successfully even for HTTP errors (e.g., **404**, **500**). Check `response.ok` or `response.status` to handle such errors.

---