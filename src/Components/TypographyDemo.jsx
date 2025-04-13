import React from 'react';

export default function TypographyDemo() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Typography</h2>

      <p className="text-xs">Text XS</p>
      <p className="text-sm">Text SM</p>
      <p className="text-base">Text Base</p>
      <p className="text-lg">Text LG</p>
      <p className="text-xl">Text XL</p>

      <p className="font-light">Font Light</p>
      <p className="font-normal">Font Normal</p>
      <p className="font-bold">Font Bold</p>
      <p className="text-center">Text Center</p>
    </div>
  );
}
