# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional class?

The major differences between the two involve syntax and control. With class components / statefull classes we have more control over the component and are able to incorporate state natively as well as utilize component lifecycle methods. We also take advantage of the this keyword through the constructor function and super with stateful classes. 

With functional components, state and props can easily be passed between them, but state is not a native part of the functional component itself. Functional components are easier to create, and to many developers, may be clearer to read. But there are certain scenarios where class components give us the advantag by allowing us to exert more control.

It's important to know both as they both represent the current state of affairs and the future state of affairs when it comes to React, and we want to be able to work with all React codebases. 


2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount gets called following the constructor and render functions being ran, as part of the mounting phase in the component life cycle. 


3. Define stateful logic.

Stateful logic is code that creates, uses, or manipulates state. Common examples are constructor functions, useState, API calls, functions that set state. 


4. What are the three step of creating a successful test? What is done in each phase?

With the react testing library the workflow or steps are import, arrange, act, and assert. 

In importing we import the necessary files and libraries, like the component we're testing and the react testing library / user event testing library. 

In arrange we setup the references to the DOM elements we'll be using / testing.

In act we mimick the user actions that we expect users to take on the site or app.

In assert we ensure that the resulting effects are those we expected and needed from the actions we mimicked. 
