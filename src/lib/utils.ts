import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Get header height for offset (different for mobile and desktop)
  const isMobile = window.innerWidth < 768;
  const headerOffset = isMobile ? 97 : 108;
  
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  // Update URL with hash (optional)
  if (history.pushState) {
    history.pushState(null, '', `#${sectionId}`);
  }
}
