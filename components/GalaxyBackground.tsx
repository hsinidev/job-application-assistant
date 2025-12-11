import React from 'react';

export const GalaxyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a1a]">
      <style>{`
        @keyframes move-twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes nebula-pulse {
          0% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
          100% { opacity: 0.4; transform: scale(1); }
        }
        @keyframes drift {
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: move-twinkle 4s infinite ease-in-out;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
        .nebula {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
                radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.3), transparent 70%),
                radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.2), transparent 60%),
                radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.25), transparent 60%);
            filter: blur(80px);
            animation: float 45s infinite ease-in-out alternate;
            opacity: 0.8;
        }
        .nebula-layer-2 {
            position: absolute;
            top: -20%;
            left: -20%;
            width: 140%;
            height: 140%;
            background: radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.25), transparent 50%);
            filter: blur(60px);
            animation: nebula-pulse 15s infinite ease-in-out;
            mix-blend-mode: screen;
        }
        .nebula-layer-3 {
            position: absolute;
            bottom: -30%;
            right: -30%;
            width: 150%;
            height: 150%;
            background: radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.15), transparent 50%);
            filter: blur(70px);
            animation: float 60s infinite ease-in-out reverse;
            mix-blend-mode: screen;
        }
      `}</style>
      
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0f0c29] to-[#050510]"></div>
      
      {/* Nebula Layers for Multi-Colored Effect */}
      <div className="nebula"></div>
      <div className="nebula-layer-2"></div>
      <div className="nebula-layer-3"></div>

      {/* Stars */}
      {Array.from({ length: 150 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2.5 + 0.5}px`,
            height: `${Math.random() * 2.5 + 0.5}px`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
    </div>
  );
};