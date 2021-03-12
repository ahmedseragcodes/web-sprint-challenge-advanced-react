# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional class?

With functional components we're able to make use of react hooks and a more simpler layout for creating components, whereas class components / stateful components take a little more boilerplate to setup but give us access to all the built in react features for managing state and passing props

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentDidMount runs after the constructor and render first run, whereas componentDidUpdate runs following an update to state or props

3. Define stateful logic.

Any code that deals with changing, manipulating, or displaying state. This could be react hooks, event handlers, or axios calls that use their data and helper functions to set state.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, Act, Assert

Arrange - setup your references to necessary elements for running tests

Act - mimick the users actions you're testing 

Assert - test that the expected results match the actual results 