1.Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

* it's important because when you have individual errors to specific api calls you see exactly which calls are causing you errors 

2.How does using custom error classes improve debugging and error identification?

* custom error classes improve debugging because it shows where in your code you have a specific error you have for the api you are trying to call

3.When might a retry mechanism be more effective than an immediate failure response?

* a retry mechanism could be more effective because it gives the api call to have another chance of success than going straight to failure