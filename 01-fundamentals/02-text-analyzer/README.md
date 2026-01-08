# Text Analyzer
A simple interactive application that analyzes user-provided text and provides metrics such as word count, character count, sentence count, and contextual feedback.

---

## Phase / Category
Phase 1 — Core JavaScript & Phase 2 — DOM & Events

---

## Purpose / Learning Goals
- Primary focus: Practice string manipulation, conditional logic, and user input handling in JavaScript.  
- Secondary exposure: Gain hands-on experience with DOM selection and updates.  
- Outcome: Understand how state (user input) drives UI updates and feedback, forming the foundation for interactive web applications.

---

## Features
- Accepts text input via a textarea.  
- Calculates word count, character count, and sentence count.  
- Provides contextual feedback based on word count:
  - Empty input → warning message  
  - Short text (<5 words) → "Short text"  
  - Long text (>50 words) → "Long text"  
- Button-triggered analysis via the “Analyze Text” button.  
- Clear button resets input and displayed metrics.

---

## Implementation Notes
- State source: Text is read from the textarea input.  
- Logic function: `analyzeText()` processes the text and returns counts + status.  
- UI update function: `updateUI()` updates the DOM elements with the calculated metrics.  
- Event listeners:
  - Analyze button → triggers text analysis and updates the UI  
  - Clear button → resets textarea and metrics  
- Error handling: Gracefully handles empty input and prevents crashes on unusual text.

---

## Challenges / Brain Fog Moments
- Figuring out the **function logic**: how to structure `analyzeText()` to compute counts and feedback correctly.  
- Understanding **string manipulation methods** like `trim()`, splitting text into words and sentences, and filtering out empty values.  
- Ensuring that all logic works correctly before updating the DOM, so results reflect the user input accurately.  
- Maintaining clean separation between computation (logic) and rendering (UI updates).

