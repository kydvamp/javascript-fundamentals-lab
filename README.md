# Counter 
A simple interactive counter allowing users to increment, decrement, and reset a numeric value.


---

## Phase / Category
Phase 1 — Core JavaScript & Phase 2 — DOM & Events

---

## Purpose / Learning Goals
- Primary focus: Practice logic, state management, and flow control in a simple interactive application.
- Secondary exposure: Hands-on experience with DOM selection and manipulation.
- Develop an understanding of how state changes drive UI updates, a foundation for larger, interactive projects.

---

## Features
- Increment button increases counter by 1.
- Decrement button decreases counter by 1; automatically hides at 0.
- Reset button returns counter to 0.
- Real-time counter display updates reflecting state changes.

---

## Implementation Notes
- State variable: counterNumber stores current count.
- Event listeners:
- Increment → incrementCounter()
- Decrement → decrementCounter()
- Reset → resetCounter()
- UI update function: updateDisplay() manages counter display and hides decrement button when needed.
- Ensures counter cannot go below 0.

---

## Challenges / Brain Fog Moments
- Preventing negative counter values while keeping the decrement button hidden.
- Syncing UI updates correctly with every state change.
- Understanding how event triggers and functions interact.


