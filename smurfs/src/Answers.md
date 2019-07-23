1. Actions are the source of information to the store. and Reducers decide what to with actions and make changes accordingly. Store hold the application state and can be updated with reducers but itself will never mutate.
2. The Application state is global and it is the store. Component state is local and unless you pass it down as props it it can only be updated within the component.
3. Redux-thunk is a middleware that lets you call action creaters instead of action objects and handles asynchronous actions.
