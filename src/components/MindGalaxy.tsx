import { useState } from 'react';

interface Factor {
  name: string;
  korean: string;
  description: string;
}

interface Orbit {
  id: string;
  radius: number;
  color: string;
  factors: Factor[];
}

const MindGalaxy = () => {
  const [hoveredElement, setHoveredElement] = useState<Factor | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedOrbit, setSelectedOrbit] = useState<string | null>(null);

  // 핵심 요소들 정의
  const coreFactors: Factor[] = [
    { name: "Wisdom", korean: "지혜", description: "깊은 통찰력과 올바른 판단력" },
    { name: "Compassion", korean: "자비", description: "타인에 대한 깊은 이해와 사랑" },
    { name: "Courage", korean: "용기", description: "옳은 일을 행하는 담대함" },
    { name: "Justice", korean: "정의", description: "공정함과 도덕적 원칙" },
    { name: "Temperance", korean: "절제", description: "균형과 자제력" },
    { name: "Faith", korean: "신앙", description: "영적 믿음과 확신" },
    { name: "Hope", korean: "희망", description: "미래에 대한 긍정적 기대" },
    { name: "Love", korean: "사랑", description: "무조건적인 애정과 헌신" }
  ];

  const secondOrbitFactors: Factor[] = [
    { name: "Honesty", korean: "정직", description: "진실함과 투명성" },
    { name: "Humility", korean: "겸손", description: "자신을 낮추는 마음" },
    { name: "Patience", korean: "인내", description: "끈기와 참을성" },
    { name: "Kindness", korean: "친절", description: "따뜻한 마음과 배려" },
    { name: "Forgiveness", korean: "용서", description: "관대함과 화해" },
    { name: "Gratitude", korean: "감사", description: "고마워하는 마음" },
    { name: "Perseverance", korean: "인내", description: "끝까지 견디는 힘" },
    { name: "Loyalty", korean: "충성", description: "변함없는 신의" },
    { name: "Generosity", korean: "관대", description: "베푸는 마음" },
    { name: "Responsibility", korean: "책임", description: "의무를 다하는 자세" }
  ];

  const thirdOrbitFactors: Factor[] = [
    { name: "Diligence", korean: "근면", description: "성실하고 부지런함" },
    { name: "Prudence", korean: "신중", description: "깊이 생각하고 판단함" },
    { name: "Discipline", korean: "규율", description: "자기 통제와 질서" },
    { name: "Empathy", korean: "공감", description: "타인의 감정을 이해함" },
    { name: "Sincerity", korean: "성실", description: "진심과 정성" },
    { name: "Respect", korean: "존중", description: "타인을 귀히 여김" },
    { name: "Mindfulness", korean: "주의깊음", description: "현재에 집중하는 의식" },
    { name: "Acceptance", korean: "수용", description: "있는 그대로 받아들임" },
    { name: "Serenity", korean: "평온", description: "마음의 고요함" },
    { name: "Contentment", korean: "만족", description: "현재에 만족하는 마음" },
    { name: "Mindfulness", korean: "마음챙김", description: "의식적 주의와 인식" },
    { name: "Balance", korean: "균형", description: "조화로운 상태" }
  ];

  const fourthOrbitFactors: Factor[] = [
    { name: "Creativity", korean: "창의성", description: "새로운 것을 만드는 능력" },
    { name: "Innovation", korean: "혁신", description: "기존의 틀을 벗어난 사고" },
    { name: "Curiosity", korean: "호기심", description: "알고자 하는 강한 욕구" },
    { name: "Adaptability", korean: "적응력", description: "변화에 유연하게 대응" },
    { name: "Resilience", korean: "회복력", description: "어려움을 극복하는 힘" },
    { name: "Optimism", korean: "낙관", description: "긍정적인 관점" },
    { name: "Enthusiasm", korean: "열정", description: "강한 의욕과 에너지" },
    { name: "Determination", korean: "결단력", description: "확고한 의지" },
    { name: "Focus", korean: "집중", description: "한 가지에 몰두하는 능력" },
    { name: "Excellence", korean: "탁월함", description: "뛰어난 품질과 성과" },
    { name: "Leadership", korean: "리더십", description: "타인을 이끄는 능력" },
    { name: "Communication", korean: "소통", description: "효과적인 의사전달" },
    { name: "Collaboration", korean: "협력", description: "함께 일하는 능력" },
    { name: "Learning", korean: "학습", description: "지속적인 성장" },
    { name: "Growth", korean: "성장", description: "발전과 진보" }
  ];

  const orbits: Orbit[] = [
    { id: 'core', radius: 120, color: '#ffd700', factors: coreFactors },
    { id: 'second', radius: 200, color: '#87ceeb', factors: secondOrbitFactors },
    { id: 'third', radius: 280, color: '#98fb98', factors: thirdOrbitFactors },
    { id: 'fourth', radius: 360, color: '#dda0dd', factors: fourthOrbitFactors }
  ];

  const renderOrbitElements = (elements: Factor[], orbitRadius: number, color: string, orbitId: string) => {
    return elements.map((element: Factor, index: number) => {
      const angle = (index / elements.length) * 2 * Math.PI;
      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);
      
      return (
        <div
          key={`${orbitId}-${index}`}
          style={{
            position: 'absolute' as const,
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)',
            width: orbitId === 'core' ? '80px' : orbitId === 'second' ? '70px' : orbitId === 'third' ? '60px' : '50px',
            height: orbitId === 'core' ? '80px' : orbitId === 'second' ? '70px' : orbitId === 'third' ? '60px' : '50px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color}, ${color}99)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: `2px solid ${color}`,
            boxShadow: `0 0 20px ${color}66`,
            fontSize: orbitId === 'core' ? '10px' : orbitId === 'second' ? '9px' : '8px',
            fontWeight: 'bold',
            textAlign: 'center' as const,
            color: '#000',
            zIndex: 10,
            animation: `float-${orbitId} ${15 + index}s ease-in-out infinite`,
          }}
          onMouseEnter={() => setHoveredElement(element)}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div style={{ lineHeight: '1.1' }}>
            <div>{element.korean}</div>
            <div style={{ fontSize: '7px', opacity: 0.8 }}>{element.name}</div>
          </div>
        </div>
      );
    });
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at center, #1a202c 0%, #000000 100%)',
    padding: '20px',
    position: 'relative' as const,
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  };

  const nebulaStyle: React.CSSProperties = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none' as const,
  };

  return (
    <div style={containerStyle}>
      {/* 배경 성운 효과 */}
      <div style={nebulaStyle}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute' as const,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* 메인 제목 */}
      <div style={{ textAlign: 'center' as const, marginBottom: '30px', zIndex: 20, position: 'relative' as const }}>
        <h1 style={{ 
          fontSize: '3rem', 
          background: 'linear-gradient(45deg, #ffd700, #87ceeb, #98fb98)', 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '10px',
          textShadow: '0 0 30px rgba(255, 215, 0, 0.5)'
        }}>
          마음 은하계 아키텍처
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#b0c4de', marginBottom: '20px' }}>
          Mind Galaxy Architecture
        </p>
      </div>

      {/* 선악 분류 패널 */}
      <div style={{ 
        position: 'absolute' as const, 
        top: '20px', 
        left: '20px', 
        right: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        zIndex: 30
      }}>
        {/* 선한 요소들 */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '2px solid #10b981',
          borderRadius: '15px',
          padding: '15px',
          minWidth: '200px',
          backdropFilter: 'blur(10px)'
        }}>
          <div 
            style={{
              fontWeight: 'bold',
              fontSize: '1.1rem',
              marginBottom: '10px',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '5px',
              background: '#10b981',
              color: 'white',
              textAlign: 'center' as const
            }}
            onClick={() => setExpandedSection(expandedSection === 'good' ? null : 'good')}
            onMouseOver={(e) => (e.target as HTMLElement).style.background = '#059669'}
            onMouseOut={(e) => (e.target as HTMLElement).style.background = '#10b981'}
          >
            선한 요소들 (Good Elements) {expandedSection === 'good' ? '▼' : '▶'}
          </div>
          {expandedSection === 'good' && (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
              <strong>핵심 덕목:</strong> 지혜, 자비, 용기, 정의, 절제, 신앙, 희망, 사랑<br/>
              <strong>실천 덕목:</strong> 정직, 겸손, 인내, 친절, 용서, 감사, 충성, 관대<br/>
              <strong>성장 덕목:</strong> 근면, 신중, 규율, 공감, 성실, 존중, 평온, 만족<br/>
              <strong>혁신 덕목:</strong> 창의성, 호기심, 적응력, 회복력, 낙관, 열정, 리더십
            </div>
          )}
        </div>

        {/* 궤도 선택 패널 */}
        <div style={{
          background: 'rgba(139, 69, 19, 0.1)',
          border: '2px solid #8b4513',
          borderRadius: '15px',
          padding: '15px',
          minWidth: '200px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            color: '#8b4513',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            marginBottom: '10px',
            textAlign: 'center' as const
          }}>
            궤도 선택 (Orbit Selection)
          </div>
          {orbits.map((orbit) => (
            <div 
              key={orbit.id}
              style={{
                padding: '8px',
                margin: '5px 0',
                border: `1px solid ${orbit.color}`,
                borderRadius: '5px',
                cursor: 'pointer',
                background: selectedOrbit === orbit.id ? `${orbit.color}33` : 'transparent',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
              onClick={() => setSelectedOrbit(selectedOrbit === orbit.id ? null : orbit.id)}
            >
              <span style={{ color: orbit.color }}>●</span> {orbit.id} 궤도 ({orbit.factors.length}개 요소)
            </div>
          ))}
        </div>
      </div>

      {/* 중앙 은하계 영역 */}
      <div style={{
        position: 'relative' as const,
        width: '100%',
        height: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '150px'
      }}>
        {/* 중앙 코어 */}
        <div style={{
          position: 'absolute' as const,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffffff, #ffd700)',
          boxShadow: '0 0 50px #ffd700, 0 0 100px #ffd700aa',
          zIndex: 15,
          animation: 'pulse 3s ease-in-out infinite'
        }}>
          <div style={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center' as const
          }}>
            CORE<br/>핵심
          </div>
        </div>

        {/* 궤도 렌더링 */}
        {orbits.map((orbit) => (
          <div key={orbit.id}>
            {/* 궤도 선 */}
            <div
              style={{
                position: 'absolute' as const,
                width: `${orbit.radius * 2}px`,
                height: `${orbit.radius * 2}px`,
                border: `1px solid ${orbit.color}44`,
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: selectedOrbit === null || selectedOrbit === orbit.id ? 1 : 0.3,
                transition: 'opacity 0.3s ease'
              }}
            />
            {/* 궤도 요소들 */}
            <div style={{ 
              opacity: selectedOrbit === null || selectedOrbit === orbit.id ? 1 : 0.3,
              transition: 'opacity 0.3s ease'
            }}>
              {renderOrbitElements(orbit.factors, orbit.radius, orbit.color, orbit.id)}
            </div>
          </div>
        ))}

        {/* 악한 요소들 패널 */}
        <div style={{ 
          position: 'absolute' as const, 
          bottom: '-100px', 
          left: '20px', 
          right: '20px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '2px solid #ef4444',
            borderRadius: '15px',
            padding: '15px',
            minWidth: '400px',
            backdropFilter: 'blur(10px)'
          }}>
            <div 
              style={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
                marginBottom: '10px',
                cursor: 'pointer',
                padding: '5px',
                borderRadius: '5px',
                background: '#ef4444',
                color: 'white',
                textAlign: 'center' as const
              }}
              onClick={() => setExpandedSection(expandedSection === 'evil' ? null : 'evil')}
              onMouseOver={(e) => (e.target as HTMLElement).style.background = '#dc2626'}
              onMouseOut={(e) => (e.target as HTMLElement).style.background = '#ef4444'}
            >
              악한 요소들 (Evil Elements) {expandedSection === 'evil' ? '▼' : '▶'}
            </div>
            {expandedSection === 'evil' && (
              <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                <strong>중앙 파괴력:</strong> 증오, 탐욕, 분노, 교만, 질투, 게으름, 폭식<br/>
                <strong>확산 요소:</strong> 거짓말, 배신, 복수, 잔혹, 무관심, 절망, 공포<br/>
                <strong>부패 요소:</strong> 부정, 편견, 고집, 냉담, 이기심, 불신, 혼란<br/>
                <strong>파괴 요소:</strong> 파괴욕, 허무주의, 극단주의, 맹신, 광신, 독선
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 정보 패널 */}
      <div style={{
        position: 'absolute' as const,
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        border: '1px solid #444',
        borderRadius: '10px',
        padding: '15px',
        minWidth: '300px',
        backdropFilter: 'blur(10px)',
        textAlign: 'center' as const
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#ffd700' }}>마음 은하계 설명</h3>
        <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.4' }}>
          중앙 코어를 중심으로 선한 요소들이 궤도를 그리며 순환합니다. 
          각 궤도는 서로 다른 차원의 덕목들을 나타내며, 
          조화롭게 상호작용하여 완전한 인격을 형성합니다.
        </p>
      </div>

      {/* 호버 시 상세 정보 */}
      {hoveredElement && (
        <div style={{
          position: 'absolute' as const,
          top: '50%',
          right: '50px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.9)',
          border: '2px solid #ffd700',
          borderRadius: '15px',
          padding: '20px',
          maxWidth: '250px',
          zIndex: 50,
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)'
        }}>
          <h3 style={{ 
            margin: '0 0 10px 0', 
            color: '#ffd700',
            fontSize: '1.2rem'
          }}>
            {hoveredElement.name}
          </h3>
          <p style={{ 
            margin: '0 0 10px 0', 
            color: '#87ceeb',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            {hoveredElement.korean}
          </p>
          <p style={{ 
            margin: '0', 
            fontSize: '0.9rem', 
            lineHeight: '1.4',
            color: '#fff'
          }}>
            {hoveredElement.description}
          </p>
        </div>
      )}

      {/* CSS 애니메이션 */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes float-core {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes float-second {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(-50%, -50%) rotate(5deg); }
        }
        @keyframes float-third {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-3px); }
        }
        @keyframes float-fourth {
          0%, 100% { transform: translate(-50%, -50%) translateX(0px); }
          50% { transform: translate(-50%, -50%) translateX(2px); }
        }
      `}</style>
    </div>
  );
};

export default MindGalaxy;