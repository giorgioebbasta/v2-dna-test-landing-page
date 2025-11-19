import { ReactNode } from 'react';

interface FigureCaptionProps {
  number: number;
  children: ReactNode;
  source?: string;
}

export const FigureCaption = ({ number, children, source }: FigureCaptionProps) => {
  return (
    <figure className="my-8">
      {children}
      <figcaption className="mt-3 text-[10px] text-[#768289] italic text-center">
        <span className="font-semibold text-[#2F3F4C]">Figura {number}.</span> {source}
      </figcaption>
    </figure>
  );
};
