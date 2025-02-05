// bugSolution.js

'use server';

import {params} from 'next/navigation';

// Correctly using params to access dynamic segment
export default async function ProductDetails() {
  const productId = params.productId;

  const res = await fetch(`https://api.example.com/products/${productId}`);
  const data = await res.json();

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
    </div>
  );
}