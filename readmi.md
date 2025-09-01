What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

And: getElementsByClassName is used when we need to select many elements that do the same work. We put a specific class name on all elements, and by using getElementsByClassName we can select all of them.

We use querySelector when we want a single element without using id/class directly. querySelector works to find the first element that matches.

querySelectorAll is used to select all elements that match.



How do you create and insert a new element into the DOM?
And: Create the element → use document.createElement("tagName")

Add content or attributes → like innerText, className, etc.

Insert it into the page → use methods like appendChild() or append().


What is Event Bubbling and how does it work?
And: Event Bubbling is how events move through the DOM.
When you click an element, the event first happens on that element, then it “bubbles up” to its parent, then to the parent’s parent, and so on, until it reaches the <body> and <html>.


What is Event Delegation in JavaScript? Why is it useful?
And: Event Delegation is a JavaScript technique where we add one event listener to a parent element instead of adding it to many child elements. The event “bubbles up,” and the parent can check which child was clicked.

What is the difference between preventDefault() and stopPropagation() methods?
And: preventDefault() = stop the default browser action.

stopPropagation() = stop the event from moving up the DOM.