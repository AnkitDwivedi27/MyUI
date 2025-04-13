import React from 'react';

const spacings = [
  { className: 'm-1', label: 'Margin 1' },
  { className: 'm-2', label: 'Margin 2' },
  { className: 'p-1', label: 'Padding 1' },
  { className: 'p-2', label: 'Padding 2' },
  { className: 'p-3', label: 'Padding 3' },
];

export default function SpacingDemo() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Spacing</h2>
      <div className="space-y-2">
        {spacings.map((item, i) => (
          <div key={i} className={`bg-accent text-dark rounded ${item.className}`}>
            {item.label} — <code>{item.className}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
