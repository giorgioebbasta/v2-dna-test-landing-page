interface CitationLinkProps {
  number: number;
}

export const CitationLink = ({ number }: CitationLinkProps) => {
  const scrollToCitation = () => {
    const element = document.getElementById(`citation-${number}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('bg-yellow-100');
      setTimeout(() => element.classList.remove('bg-yellow-100'), 2000);
    }
  };

  return (
    <sup>
      <button
        onClick={scrollToCitation}
        className="text-[#0B4650] hover:text-[#2F3F4C] font-medium cursor-pointer transition-colors"
        aria-label={`Vai alla citazione ${number}`}
      >
        [{number}]
      </button>
    </sup>
  );
};
