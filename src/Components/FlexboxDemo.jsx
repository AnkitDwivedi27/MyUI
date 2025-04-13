import React from 'react';

export default function FlexboxDemo() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Flex Utilities</h2>

      <div className="flex gap-2 bg-secondary p-2 rounded text-light">
        <div className="bg-primary p-2 rounded">Flex 1</div>
        <div className="bg-primary p-2 rounded">Flex 2</div>
        <div className="bg-primary p-2 rounded">Flex 3</div>
      </div>

      <div className="flex justify-center mt-4 bg-accent text-dark p-2 rounded">
        Centered Box
      </div>
    </div>
  );
}
