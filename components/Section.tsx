
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500 inline-block">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};
