import { useScrollSpy, ScrollSpySection } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  sections: ScrollSpySection[];
  scrollContainerSelector?: string;
}

export const TableOfContents = ({ sections, scrollContainerSelector }: TableOfContentsProps) => {
  const activeSection = useScrollSpy(sections, scrollContainerSelector);

  const scrollToSection = (id: string) => {
    console.log('[TOC] Attempting to scroll to section:', id);
    const element = document.getElementById(id);
    console.log('[TOC] Found element:', element);
    
    if (!element) {
      console.error('[TOC] Element not found for ID:', id);
      return;
    }

    if (scrollContainerSelector) {
      const container = document.querySelector(scrollContainerSelector);
      console.log('[TOC] Scroll container:', container);
      
      if (container) {
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const relativeTop = elementRect.top - containerRect.top + container.scrollTop;
        const offset = 100;
        
        console.log('[TOC] Scrolling to position:', relativeTop - offset);

        container.scrollTo({
          top: relativeTop - offset,
          behavior: 'smooth'
        });
      }
    } else {
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
                "text-left w-full py-2 px-3 text-sm transition-all duration-200 border-l-2 rounded-r",
                activeSection === section.id
                  ? "border-[#0A121A] text-[#0A121A] font-semibold bg-[#F8FAFA]"
                  : "border-[#EAEAEA] text-[#768289] hover:text-[#0A121A] hover:border-[#0A121A] hover:bg-[#F8FAFA]/50"
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
