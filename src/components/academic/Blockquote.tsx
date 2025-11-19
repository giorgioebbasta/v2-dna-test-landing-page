import { ReactNode } from 'react';

interface BlockquoteProps {
  children: ReactNode;
  source?: string;
}

export const Blockquote = ({ children, source }: BlockquoteProps) => {
  return (
    <blockquote className="my-8 p-6 bg-[#F8FAFA] border-l-4 border-[#0A121A] italic">
      <p className="text-base text-[#2F3F4C] leading-relaxed mb-2">
        "{children}"
      </p>
      {source && (
        <cite className="text-sm text-[#768289] not-italic block mt-3">
          — {source}
        </cite>
      )}
    </blockquote>
  );
};
