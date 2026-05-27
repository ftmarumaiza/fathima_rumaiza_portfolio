import React from 'react';

export default function ProjectVisual({ type }) {
  if (type === 'traffic') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 420 132" role="img">
          <path className="route-line" d="M22 105 C82 32 145 112 204 58 C265 3 320 86 398 28" fill="none" stroke="#0b6b5f" strokeWidth="4" strokeLinecap="round" />
          <line x1="78" y1="32" x2="122" y2="96" stroke="#b64d2f" strokeWidth="2" />
          <line x1="204" y1="58" x2="270" y2="88" stroke="#b64d2f" strokeWidth="2" />
          <line x1="270" y1="88" x2="338" y2="54" stroke="#0b6b5f" strokeWidth="2" />
          {[22, 78, 122, 204, 270, 338, 398].map((x, index) => (
            <circle className="pulse-dot" key={x} cx={x} cy={[105, 32, 96, 58, 88, 54, 28][index]} r="5" fill={index % 2 ? '#b64d2f' : '#0b6b5f'} />
          ))}
        </svg>
      </div>
    );
  }

  if (type === 'medical') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 420 132" role="img">
          <rect x="118" y="18" width="184" height="96" rx="8" fill="#181a1b" />
          <circle cx="210" cy="66" r="36" fill="none" stroke="#f7f1e7" strokeWidth="2" opacity="0.72" />
          <path d="M184 72 C198 38 228 42 238 72 C226 62 198 96 184 72Z" fill="#0b6b5f" opacity="0.9" />
          <path d="M176 31 H244 M176 101 H244" stroke="#c89d38" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line className="scan-line" x1="130" y1="36" x2="290" y2="36" stroke="#b64d2f" strokeWidth="3" opacity="0.78" />
          <circle className="pulse-dot" cx="238" cy="70" r="5" fill="#c89d38" />
        </svg>
      </div>
    );
  }

  if (type === 'search') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 420 132" role="img">
          <path className="route-line" d="M48 100 C90 34 134 40 168 84 C205 131 250 11 298 46 C326 67 350 78 384 30" fill="none" stroke="#b64d2f" strokeWidth="4" strokeLinecap="round" />
          {[48, 116, 168, 230, 298, 384].map((x, index) => (
            <g key={x}>
              <circle cx={x} cy={[100, 38, 84, 86, 46, 30][index]} r="13" fill="#fff" stroke="#0b6b5f" strokeWidth="2" />
              <circle className="pulse-dot" cx={x} cy={[100, 38, 84, 86, 46, 30][index]} r="4" fill="#0b6b5f" />
            </g>
          ))}
          <rect x="250" y="82" width="82" height="28" rx="6" fill="#181a1b" />
          <path d="M267 96 H315" stroke="#f7f1e7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="project-visual" aria-hidden="true">
      <svg viewBox="0 0 420 132" role="img">
        <g className="course-card-mini">
          <rect x="44" y="30" width="102" height="72" rx="8" fill="#fff" stroke="#0b6b5f" strokeWidth="2" />
          <path d="M64 52 H126 M64 70 H112 M64 88 H100" stroke="#0b6b5f" strokeWidth="4" strokeLinecap="round" />
        </g>
        <g className="course-card-mini">
          <rect x="160" y="18" width="102" height="96" rx="8" fill="#181a1b" />
          <path d="M182 42 H238 M182 62 H224 M182 82 H240" stroke="#f7f1e7" strokeWidth="4" strokeLinecap="round" />
          <circle className="pulse-dot" cx="238" cy="98" r="5" fill="#c89d38" />
        </g>
        <g className="course-card-mini">
          <rect x="276" y="30" width="102" height="72" rx="8" fill="#fff" stroke="#b64d2f" strokeWidth="2" />
          <path d="M296 52 H358 M296 70 H344 M296 88 H330" stroke="#b64d2f" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
