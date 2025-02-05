# Next.js 15 App Router: Dynamic Route Segment Resolution Bug in Server Components

This repository demonstrates a bug encountered in Next.js 15's app directory when using server components with edge runtime and dynamic route segments. The bug manifests when fetching data with dynamic segments in the URL, leading to incorrect data retrieval or errors.

## Bug Description
The issue occurs when a server component attempts to fetch data using a URL containing dynamic segments. The dynamic segments might not be correctly resolved within the edge runtime environment of the server component, resulting in unexpected behavior or failures to fetch the correct data.

## Reproduction Steps
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the incorrect data displayed due to the resolution problem.

## Solution
The solution involves ensuring the dynamic segments are correctly handled within the server component's context and data-fetching logic.  See `bugSolution.js` for the fix.