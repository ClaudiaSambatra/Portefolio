import React from 'react';

export function StarField() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {[...Array(90)].map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `twinkle ${Math.random() * 3 + 2}s infinite`
          }}
        />
      ))}
    </div>
  );
}