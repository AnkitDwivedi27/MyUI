import './Library/Spacing.css';
import './Library/Flexbox.css';
import './Library/Typography.css';
import './Library/Color.css';
import React, { useState } from 'react';

import ColorDemo from './Components/ColorDemo';
import SpacingDemo from './Components/SpacingDemo';
import TypographyDemo from './Components/TypographyDemo';
import FlexboxDemo from './Components/FlexboxDemo';
import ButtonDemo from './Components/ButtonDemo';
import Searchbar from './Components/Searchbar';

export default function App() {
  const [view, setView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = ['colors', 'spacing', 'typography', 'flexbox', 'buttons'];

  const handleSearch = (term) => {
    setSearchTerm(term);
    const match = menuItems.find(item => item.includes(term.toLowerCase()));
    if (match) setView(match);
  };

  const renderComponent = () => {
    switch (view) {
      case 'colors': return <ColorDemo />;
      case 'spacing': return <SpacingDemo />;
      case 'typography': return <TypographyDemo />;
      case 'flexbox': return <FlexboxDemo />;
      case 'buttons': return <ButtonDemo />;
      default:
        return (
          <div className="text-center p-4">
            <h1 className="text-xl font-bold mb-4">🎨 My Custom CSS Framework</h1>
            <p className="mb-4">Build fast and responsive UIs with simple class-based utilities!</p>

            <div className="flex justify-center gap-4 flex-wrap mt-6">
              <div className="p-3 bg-primary text-light rounded hover:scale-105 transition-all cursor-pointer">Primary</div>
              <div className="p-3 bg-secondary text-light rounded hover:scale-105 transition-all cursor-pointer">Secondary</div>
              <div className="p-3 bg-accent text-dark rounded hover:scale-105 transition-all cursor-pointer">Accent</div>
              <button className="bg-primary text-light p-2 rounded hover:bg-primary-dark transition-all">Button</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
  {/* Navigation Bar */}
  <nav className="flex items-center justify-between px-6 py-4 bg-light text-dark shadow-md sticky top-0 z-50 flex-wrap gap-4">
  {/* Brand */}
  <div className="text-lg font-bold text-primary flex items-center gap-2">
    <span role="img" aria-label="palette">🎨</span>
    <span>CSS Framework</span>
  </div>

  {/* Menu + Search (wrapped in a flex-grow container) */}
  <div className="flex flex-1 justify-between items-center flex-wrap gap-4">
    {/* Menu Items */}
    <div className="flex gap-3 flex-wrap">
      <button 
        className="hover:bg-primary hover:text-light px-3 py-1 rounded transition-all duration-200"
        onClick={() => setView('home')}
      >
        Home
      </button>
      {menuItems.map(item => (
        <button
          key={item}
          onClick={() => setView(item)}
          className="hover:bg-primary hover:text-light px-3 py-1 rounded transition-all duration-200 capitalize"
        >
          {item}
        </button>
      ))}
    </div>

    {/* Search bar aligned right */}
    <div className="ml-auto">
      <Searchbar onSearch={handleSearch} />
    </div>
  </div>
</nav>

  {/* Main Content */}
  <main className="px-4 py-6">
    {renderComponent()}
  </main>
</div>


  );
}
