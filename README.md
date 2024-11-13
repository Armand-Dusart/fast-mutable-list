# Fast vs Slow Mutable List Components

This repository demonstrates two different approaches to implementing editable lists in React, highlighting performance differences between optimized and unoptimized implementations.

## Components

### SlowList

Located in `src/app/ui/components/SlowList`

- Demonstrates a basic implementation of an editable list
- Less optimized for frequent updates
- Shows common performance pitfalls

### FastList

Located in `src/app/ui/components/FastList`

- Implements an optimized version of the same functionality
- Uses efficient update patterns
- Demonstrates best practices for React performance

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Start the development server with `npm run dev`
4. Compare the components at `/`.

## Learn More

This example demonstrates key React optimization concepts:

- State management patterns
- Memoization
- Efficient list updates

**But the first rendering is still painful.**
