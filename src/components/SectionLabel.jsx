import useInView from '../hooks/useInView';

export default function SectionLabel({ num, title }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`section-label fade-up ${visible ? 'visible' : ''}`}
    >
      <div className="section-label__row">
        <span className="section-label__num">{num}</span>
        <div className="section-label__line" />
        <h2 className="section-label__title">{title}</h2>
      </div>
      <div className="section-label__divider" />
    </div>
  );
}
