import { site } from "@/data/site";

export default function Social() {
  return (
    <div className="social">
      <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" suppressHydrationWarning><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.2 5.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
      </a>
      <a href={site.x} target="_blank" rel="noopener noreferrer" aria-label="X">
        <svg viewBox="0 0 24 24" suppressHydrationWarning><path d="M18.2 2.5h3.3l-7.2 8.3 8.5 11.2h-6.7l-5.2-6.8-6 6.8H1.6l7.7-8.9L1.2 2.5H8l4.7 6.2 5.5-6.2zm-1.2 17.5h1.8L7 4.4H5.1L17 20z" /></svg>
      </a>
      <a href={`mailto:${site.email}`} aria-label="Email">
        <svg viewBox="0 0 24 24" suppressHydrationWarning><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.5l8 5.2 8-5.2V6H4zm16 3l-8 5.2L4 9v9h16V9z" /></svg>
      </a>
    </div>
  );
}
