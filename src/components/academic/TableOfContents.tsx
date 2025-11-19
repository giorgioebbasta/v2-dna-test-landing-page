import { useScrollSpy, ScrollSpySection } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  sections: ScrollSpySection[];
}

export const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const activeSection = useScrollSpy(sections);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-32 w-64 h-fit">
      <h3 className="text-sm font-semibold text-[#0A121A] mb-4 uppercase tracking-wide">
        Indice
      </h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "text-left w-full py-2 px-3 text-sm transition-all duration-200 border-l-2",
                activeSection === section.id
                  ? "border-[#0A121A] text-[#0A121A] font-semibold bg-[#F8FAFA]"
                  : "border-[#EAEAEA] text-[#768289] hover:text-[#2F3F4C] hover:border-[#BAC0C4]"
              )}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
