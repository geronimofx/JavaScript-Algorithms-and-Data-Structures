# Handle a Rejected Promise with catch

**catch** is the method used when your promise has been rejected. It is executed immediately after a promise's **reject** method is called. Here’s the syntax:

~~~
myPromise.catch(error => {
  
});
~~~

**error** is the argument passed in to the **reject** method.

Add the **catch** method to your promise. Use **error** as the parameter of its callback function and log **error** to the console.