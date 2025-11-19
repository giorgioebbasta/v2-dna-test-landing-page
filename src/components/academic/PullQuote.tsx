import { ReactNode } from 'react';

interface PullQuoteProps {
  children: ReactNode;
}

export const PullQuote = ({ children }: PullQuoteProps) => {
  return (
    <div className="my-12 text-center">
      <p className="text-2xl md:text-3xl font-semibold text-[#0A121A] leading-tight px-4">
        "{children}"
      </p>
    </div>
  );
};
