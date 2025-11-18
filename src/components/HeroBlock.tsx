import './HeroBlock.css';
import { HeroSection } from '../lib/types';

export default function HeroBlock({
  title,
  standfirst,
  kicker,
  authorLine,
  backgroundColor,
  textColor,
  titleColor,
  standfirstColor,
  height,
  titleSize,
  standfirstSize,
  alignment = 'center',
}: HeroSection) {
  const heroTitle = title?.trim() || '';
  const heroStandfirst = standfirst?.trim() || '';
  const showHero = heroTitle || heroStandfirst;

  if (!showHero) return null;

  return (
    <section
      className={`hero-block hero-block--${alignment}`}
      style={{
        backgroundColor: backgroundColor || '#0b4635',
        color: textColor || '#ffffff',
        minHeight: height || '320px',
      }}
    >
      <div className="hero-block__inner">
        {heroTitle && (
          <h1
            className="hero-block__title"
            style={{
              fontSize: titleSize || undefined,
              color: titleColor || textColor || undefined,
            }}
          >
            {heroTitle}
          </h1>
        )}
        {heroStandfirst && (
          <p
            className="hero-block__standfirst"
            style={{ fontSize: standfirstSize || undefined, color: standfirstColor || undefined }}
            dangerouslySetInnerHTML={{ __html: heroStandfirst }}
          />
        )}
        {authorLine && <div className="hero-block__meta">{authorLine}</div>}
      </div>
    </section>
  );
}
