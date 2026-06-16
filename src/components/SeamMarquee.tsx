import React from "react";

interface SeamMarqueeProps {
  text: string;
  /** number of times to repeat the text in one half of the loop */
  repeat?: number;
}

/**
 * Faixa dourada com texto rolando, usada para cobrir a transição
 * entre a área amarela e a área roxa nas landings.
 */
export const SeamMarquee: React.FC<SeamMarqueeProps> = ({ text, repeat = 8 }) => {
  // duplicamos a lista para criar loop infinito perfeito (translateX -50%)
  const items = Array.from({ length: repeat * 2 }, (_, i) => i);
  return (
    <div className="seam-marquee-wrap" aria-hidden="true">
      <div className="seam-marquee">
        <div className="seam-marquee-track">
          {items.map((i) => (
            <span key={i}>★ {text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeamMarquee;