import React, { useState } from 'react';

const buttons = [
  { label: 'Primary', className: 'bg-primary text-light' },
  { label: 'Secondary', className: 'bg-secondary text-light' },
  { label: 'Accent', className: 'bg-accent text-dark' },
];

export default function ButtonDemo() {
  const [activeClass, setActiveClass] = useState('');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buttons</h2>
      
      <div className="flex gap-4 flex-wrap mb-4">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`p-3 rounded ${btn.className}`}
            onClick={() => setActiveClass(btn.className)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {activeClass && (
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-700">
          <p className="font-mono text-sm text-gray-800 dark:text-gray-100">
            <strong>Class:</strong> <code>{activeClass}</code>
          </p>
        </div>
      )}
    </div>
  );
}
