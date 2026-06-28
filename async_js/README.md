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

Examples:
- `setTimeout()`
- `fetch()`
- Reading files (Node.js)
- Database queries

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

## ◆ Common Asynchronous APIs

- `setTimeout()`
- `setInterval()`
- `fetch()`
- File System (`fs`) in Node.js
- Database operations
- HTTP requests

---

## ◆ Comparison

| Synchronous | Asynchronous |
|-------------|--------------|
| Runs one after another | Doesn't wait for long tasks |
| Blocking | Non-blocking |
| Simpler flow | Better performance for I/O tasks |
| Long tasks freeze execution | Other code continues running |

---