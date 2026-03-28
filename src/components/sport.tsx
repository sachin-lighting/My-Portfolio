'use client';

import React from 'react';
const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Hobbies Beyond the Screen
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          A few things I genuinely enjoy outside coding
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground text-base">
        <p>
          Badminton keeps me active and sharp. I enjoy the pace, quick reactions, and competitive energy that come with the game.
        </p>
        <p>
          Chess is something I enjoy for the strategy. It pushes me to think ahead, stay patient, and make better decisions under pressure.
        </p>
        <p>
          Sudoku is my quiet reset. I like solving patterns, spotting structure, and staying mentally focused, which honestly connects well with debugging too.
        </p>
      </div>
    </div>
  );
};

export default Sports;