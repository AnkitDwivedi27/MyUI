import React from 'react';

const colors = [
  { className: 'bg-primary text-light', label: 'Primary' },
  { className: 'bg-secondary text-light', label: 'Secondary' },
  { className: 'bg-accent text-dark', label: 'Accent' },
];

export default function ColorDemo() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Colors</h2>
      <div className="space-y-4">
        {colors.map((color, i) => (
          <div key={i} className={`p-3 rounded ${color.className}`}>
            {color.label} — <code>{color.className}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
