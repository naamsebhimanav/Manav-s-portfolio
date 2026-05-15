"use client";

interface ActDividerProps {
  act: string;
  title: string;
}

export default function ActDivider({ act, title }: ActDividerProps) {
  return (
    <div className="relative flex items-center justify-center py-10 bg-void overflow-hidden">
      {/* Full-width dim line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Centre badge */}
      <div className="relative flex items-center gap-5 bg-void px-8">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
        <div className="text-center">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/50 mb-0.5">{act}</p>
          <p className="font-serif text-sm italic text-ivory/30 tracking-wide">{title}</p>
        </div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
      </div>

      {/* Corner diamonds */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold/20 rotate-45" />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold/20 rotate-45" />
    </div>
  );
}
