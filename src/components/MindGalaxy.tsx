import { useState, useMemo } from 'react';

interface Factor {
  name: string;
  korean: string;
  description: string;
}

interface OrbitData {
  id: string;
  name: string;
  description: string;
  items: Factor[];
  color: string;
  count: number;
}

interface NebulaElement {
  id: number;
  factor: Factor;
  size: number;
  opacity: number;
  color: string;
  x: number;
  y: number;
  animationDelay: number;
}

const CompleteMindGalaxy = () => {
  const [selectedOrbit, setSelectedOrbit] = useState<string | null>(null);
  const [hoveredElement, setHoveredElement] = useState<Factor | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // 전체 데이터 (원래 버전과 동일)
  const unwholesomeFactors: Factor[] = [
    { name: "Moha", korean: "무명", description: "어리석음과 무지" },
    { name: "Ahirika", korean: "무참", description: "부끄러움이 없음" },
    { name: "Anottappa", korean: "무외", description: "양심이 없음" },
    { name: "Uddhacca", korean: "들뜸", description: "마음의 들뜸" },
    { name: "Lobha", korean: "탐욕", description: "욕심과 집착" },
    { name: "Diṭṭhi", korean: "삿된견해", description: "잘못된 이해" },
    { name: "Māna", korean: "자만", description: "오만함" },
    { name: "Dosa", korean: "성냄", description: "분노와 미움" },
    { name: "Issā", korean: "질투", description: "시기와 질투" },
    { name: "Macchariya", korean: "인색함", description: "아까워함" },
    { name: "Kukkucca", korean: "후회", description: "걱정과 후회" },
    { name: "Thīna", korean: "게으름", description: "정신적 둔함" },
    { name: "Middha", korean: "혼침", description: "혼미함" },
    { name: "Vicikicchā", korean: "의심", description: "의심과 회의" }
  ];

  const universalFactors: Factor[] = [
    { name: "Phassa", korean: "접촉", description: "감각기관과 대상의 만남" },
    { name: "Vedana", korean: "느낌", description: "즐거움, 괴로움, 중성의 느낌" },
    { name: "Saññā", korean: "인식", description: "대상을 알아차림" },
    { name: "Cetanā", korean: "의도", description: "마음의 의지작용" },
    { name: "Ekaggatā", korean: "한마음", description: "마음의 집중" },
    { name: "Jīvitindriya", korean: "생명력", description: "정신적 생명력" },
    { name: "Manasikāra", korean: "마음기울임", description: "주의집중" }
  ];

  const particularFactors: Factor[] = [
    { name: "Vitakka", korean: "시작적용", description: "대상으로 마음을 향함" },
    { name: "Vicāra", korean: "지속숙고", description: "대상에 마음을 머물게 함" },
    { name: "Adhimokkha", korean: "결심", description: "확고한 결정" },
    { name: "Vīriya", korean: "정진", description: "노력하는 에너지" },
    { name: "Pīti", korean: "희열", description: "기쁨과 환희" },
    { name: "Chanda", korean: "욕구", description: "선한 의욕" }
  ];

  const beautifulFactors: Factor[] = [
    { name: "Saddhā", korean: "믿음", description: "청정한 신뢰" },
    { name: "Sati", korean: "염", description: "마음챙김" },
    { name: "Hirī", korean: "부끄러움", description: "도덕적 부끄러움" },
    { name: "Ottappa", korean: "양심", description: "도덕적 두려움" },
    { name: "Alobha", korean: "무탐", description: "탐욕이 없음" },
    { name: "Adosa", korean: "무진", description: "성냄이 없음" },
    { name: "Tatramajjhattatā", korean: "평정", description: "마음의 균형" },
    { name: "Kāya-passaddhi", korean: "몸고요함", description: "정신적 요소의 고요함" },
    { name: "Citta-passaddhi", korean: "마음고요함", description: "마음의 고요함" },
    { name: "Kāya-lahutā", korean: "몸가벼움", description: "정신적 요소의 가벼움" },
    { name: "Citta-lahutā", korean: "마음가벼움", description: "마음의 가벼움" },
    { name: "Kāya-mudutā", korean: "몸유연함", description: "정신적 요소의 유연함" },
    { name: "Citta-mudutā", korean: "마음유연함", description: "마음의 유연함" },
    { name: "Kāya-kammaññatā", korean: "몸적응성", description: "정신적 요소의 적응성" },
    { name: "Citta-kammaññatā", korean: "마음적응성", description: "마음의 적응성" },
    { name: "Kāya-pāguññatā", korean: "몸숙련성", description: "정신적 요소의 숙련성" },
    { name: "Citta-pāguññatā", korean: "마음숙련성", description: "마음의 숙련성" },
    { name: "Kāya-ujukatā", korean: "몸정직함", description: "정신적 요소의 정직함" }
  ];

  const wisdomFactor: Factor[] = [
    { name: "Paññā", korean: "지혜", description: "사성제를 꿰뚫는 통찰지혜" }
  ];

  const orbitData: OrbitData[] = [
    { id: 'S', name: 'S 궤도', description: '보편적 마음상태', items: universalFactors, color: '#3b82f6', count: 7 },
    { id: 'P', name: 'P 궤도', description: '특별한 마음상태', items: particularFactors, color: '#10b981', count: 6 },
    { id: 'D', name: 'D 궤도', description: '아름다운 마음상태', items: beautifulFactors, color: '#8b5cf6', count: 18 },
    { id: 'F', name: 'F 궤도', description: '지혜', items: wisdomFactor, color: '#f59e0b', count: 1 }
  ];

  const allGoodFactors = [...universalFactors, ...particularFactors, ...beautifulFactors, ...wisdomFactor];

  // 성운 요소들 (위치 고정)
  const nebulaElements: NebulaElement[] = useMemo(() => {
    return [...Array(70)].map((_, i) => {
      const factor = unwholesomeFactors[i % unwholesomeFactors.length];
      const size = Math.random() * 6 + 8;
      const opacity = Math.random() * 0.4 + 0.6;
      const colors = ['#ef4444', '#f97316', '#8b5cf6', '#ec4899', '#f59e0b'];
      const color = colors[i % colors.length];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      return {
        id: i,
        factor,
        size,
        opacity,
        color,
        x,
        y,
        animationDelay: Math.random() * 4
      };
    });
  }, [unwholesomeFactors]);

  const renderOrbitElements = (elements: Factor[], orbitRadius: number, color: string, orbitId: string) => {
    return elements.map((element: Factor, index: number) => {
      const angle = (index * 360) / elements.length;
      const radian = (angle * Math.PI) / 180;
      const x = Math.cos(radian) * orbitRadius;
      const y = Math.sin(radian) * orbitRadius;
      
      return (
        <div
          key={`${orbitId}-${index}`}
          style={{
            position: 'absolute' as const,
            left: `calc(50% + ${x}px - 24px)`,
            top: `calc(50% + ${y}px - 24px)`,
            width: '48px',
            height: '48px',
            background: `linear-gradient(135deg, ${color}, ${color}dd)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '8px',
            fontWeight: '500',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            border: '2px solid white',
            textAlign: 'center' as const,
            lineHeight: '1.1'
          }}
          onMouseEnter={() => setHoveredElement(element)}
          onMouseLeave={() => setHoveredElement(null)}
          onMouseOver={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1.25)'}
          onMouseOut={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
        >
          {element.korean}
        </div>
      );
    });
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)',
    padding: '1rem',
    position: 'relative' as const,
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    color: 'white'
  };

  const nebulaStyle: React.CSSProperties = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none' as const
  };

  return (
    <div style={containerStyle}>
      {/* 어둠의 성운 배경 */}
      <div style={nebulaStyle}>
        {nebulaElements.map((element) => (
          <div
            key={element.id}
            style={{
              position: 'absolute' as const,
              left: `${element.x}%`,
              top: `${element.y}%`,
              zIndex: 30,
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredElement(element.factor)}
            onMouseLeave={() => setHoveredElement(null)}
          >
            {/* 성운 가스 효과 */}
            <div style={{
              position: 'absolute' as const,
              width: `${element.size * 4}px`,
              height: `${element.size * 4}px`,
              left: `${-element.size * 2}px`,
              top: `${-element.size * 2}px`,
              background: element.color,
              borderRadius: '50%',
              filter: 'blur(8px)',
              opacity: 0.2,
              animation: `pulse 3s ease-in-out infinite`,
              animationDelay: `${element.animationDelay}s`
            }} />
            
            {/* 메인 점 */}
            <div style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              background: `linear-gradient(135deg, ${element.color}cc, ${element.color})`,
              borderRadius: '50%',
              opacity: element.opacity,
              boxShadow: `0 0 10px ${element.color}`,
              position: 'relative' as const,
              zIndex: 10,
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(2)'}
            onMouseOut={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
            />
            
            {/* 라벨 */}
            <div style={{
              position: 'absolute' as const,
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginBottom: '4px',
              opacity: 0.7,
              pointerEvents: 'none' as const
            }}>
              <div style={{
                background: 'rgba(0,0,0,0.9)',
                color: 'white',
                fontSize: '10px',
                padding: '2px 4px',
                borderRadius: '4px',
                whiteSpace: 'nowrap' as const,
                border: '1px solid #666'
              }}>
                {element.factor.korean}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' as const, zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center' as const, marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #fbbf24, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            마음의 은하계
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '0.5rem' }}>
            Abhidhamma Mind Universe
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            불교 아비담마의 완전한 정신우주 시각화
          </p>
        </div>

        {/* 상단 3열 레이아웃 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* 좌측 - 선한 마음 상태 */}
          <div>
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '2px solid #10b981'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981', margin: 0 }}>
                  선한 마음 은하계
                </h2>
                <div style={{
                  background: '#10b981',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  32개
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1rem' }}>
                중심 태양 주위를 도는 4개 궤도의 선한 정신요소들
              </p>
              
              <button
                style={{
                  width: '100%',
                  background: '#10b981',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'background 0.3s ease'
                }}
                onClick={() => setExpandedSection(expandedSection === 'good' ? null : 'good')}
                onMouseOver={(e) => (e.target as HTMLElement).style.background = '#059669'}
                onMouseOut={(e) => (e.target as HTMLElement).style.background = '#10b981'}
              >
                {expandedSection === 'good' ? '목록 접기' : '전체 목록 보기'}
              </button>
              
              {expandedSection === 'good' && (
                <div style={{
                  marginTop: '1rem',
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  {allGoodFactors.map((factor, index) => (
                    <div key={index} style={{
                      background: 'rgba(16, 185, 129, 0.2)',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{ fontWeight: 'bold', color: '#10b981', fontSize: '0.8rem' }}>
                        {factor.name}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#34d399' }}>
                        {factor.korean} - {factor.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 궤도 정보 */}
            <div style={{ marginTop: '1rem' }}>
              {orbitData.map((orbit) => (
                <div
                  key={orbit.id}
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    marginBottom: '0.75rem',
                    border: `1px solid ${orbit.color}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setSelectedOrbit(selectedOrbit === orbit.id ? null : orbit.id)}
                  onMouseOver={(e) => (e.currentTarget as HTMLElement).style.borderColor = orbit.color + 'cc'}
                  onMouseOut={(e) => (e.currentTarget as HTMLElement).style.borderColor = orbit.color}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontWeight: 'bold', color: orbit.color, margin: 0, fontSize: '0.9rem' }}>
                      {orbit.name}
                    </h3>
                    <div style={{
                      background: orbit.color,
                      color: 'white',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.7rem'
                    }}>
                      {orbit.count}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.7rem', color: '#9ca3af', margin: '0.25rem 0' }}>
                    {orbit.description}
                  </p>
                  
                  {selectedOrbit === orbit.id && (
                    <div style={{ marginTop: '0.75rem', maxHeight: '120px', overflowY: 'auto' }}>
                      {orbit.items.map((item, index) => (
                        <div key={index} style={{ fontSize: '0.7rem', color: '#d1d5db', marginBottom: '0.25rem' }}>
                          <span style={{ fontWeight: 'bold' }}>{item.name}</span> ({item.korean})
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 중앙 - 은하계 */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' as const, width: '500px', height: '500px' }}>
              
              {/* 궤도 원들 */}
              {[
                { radius: 180, color: '#8b5cf6', opacity: 0.3 },
                { radius: 240, color: '#3b82f6', opacity: 0.3 },
                { radius: 300, color: '#10b981', opacity: 0.3 },
                { radius: 360, color: '#8b5cf6', opacity: 0.3 },
                { radius: 420, color: '#f59e0b', opacity: 0.3 }
              ].map((orbit, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute' as const,
                    width: `${orbit.radius}px`,
                    height: `${orbit.radius}px`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: `1px solid ${orbit.color}`,
                    borderRadius: '50%',
                    opacity: orbit.opacity
                  }}
                />
              ))}

              {/* 중심 핵 - Citta */}
              <div style={{
                position: 'absolute' as const,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #f97316, #dc2626)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)',
                border: '4px solid #fbbf24',
                zIndex: 20,
                fontWeight: 'bold',
                fontSize: '12px',
                textAlign: 'center' as const
              }}>
                <div>
                  <div>Citta</div>
                  <div style={{ fontSize: '8px' }}>마음</div>
                </div>
              </div>

              {/* 궤도별 요소들 */}
              {renderOrbitElements(universalFactors, 90, '#3b82f6', 'S')}
              {renderOrbitElements(particularFactors, 120, '#10b981', 'P')}
              {renderOrbitElements(beautifulFactors, 150, '#8b5cf6', 'D')}
              {renderOrbitElements(wisdomFactor, 180, '#f59e0b', 'F')}

              {/* 궤도 레이블 */}
              <div style={{ position: 'absolute' as const, left: '58%', top: '35%', color: '#3b82f6', fontWeight: 'bold' }}>S</div>
              <div style={{ position: 'absolute' as const, left: '62%', top: '30%', color: '#10b981', fontWeight: 'bold' }}>P</div>
              <div style={{ position: 'absolute' as const, left: '66%', top: '25%', color: '#8b5cf6', fontWeight: 'bold' }}>D</div>
              <div style={{ position: 'absolute' as const, left: '70%', top: '20%', color: '#f59e0b', fontWeight: 'bold' }}>F</div>
            </div>
          </div>

          {/* 우측 - 어둠의 성운 정보 */}
          <div>
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '2px solid #ef4444'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
                  어둠의 성운
                </h2>
                <div style={{
                  background: '#ef4444',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  14개
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1rem' }}>
                우주 전체에 퍼진 붉은 성운 가스들
              </p>
              
              <button
                style={{
                  width: '100%',
                  background: '#ef4444',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'background 0.3s ease'
                }}
                onClick={() => setExpandedSection(expandedSection === 'evil' ? null : 'evil')}
                onMouseOver={(e) => (e.target as HTMLElement).style.background = '#dc2626'}
                onMouseOut={(e) => (e.target as HTMLElement).style.background = '#ef4444'}
              >
                {expandedSection === 'evil' ? '목록 접기' : '전체 목록 보기'}
              </button>
              
              {expandedSection === 'evil' && (
                <div style={{
                  marginTop: '1rem',
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  {unwholesomeFactors.map((factor, index) => (
                    <div key={index} style={{
                      background: 'rgba(239, 68, 68, 0.2)',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '0.8rem' }}>
                        {factor.name}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#f87171' }}>
                        {factor.korean} - {factor.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 우주 통계 */}
            <div style={{
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '8px',
              padding: '1rem',
              marginTop: '1rem',
              border: '1px solid #6b7280'
            }}>
              <h3 style={{ fontWeight: 'bold', color: '#d1d5db', marginBottom: '0.75rem', fontSize: '1rem' }}>
                우주 통계
              </h3>
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#9ca3af' }}>총 정신요소</span>
                  <span style={{ color: 'white', fontWeight: 'bold' }}>46개</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#10b981' }}>은하계 내 (선한)</span>
                  <span style={{ color: '#34d399', fontWeight: 'bold' }}>32개 (69.6%)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#ef4444' }}>성운 가스 (불선)</span>
                  <span style={{ color: '#f87171', fontWeight: 'bold' }}>14개 (30.4%)</span>
                </div>
                <div style={{ borderTop: '1px solid #6b7280', paddingTop: '0.75rem' }}>
                  <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>
                    🌌 성운 밀도: 우주 전체에 분산<br />
                    🔴 가스 구름: 70개 지점에 확산<br />
                    📍 라벨: 항상 표시됨
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 - 어둠의 성운 맵핑 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '1.5rem', textAlign: 'center' as const }}>
            어둠의 성운 전체 맵핑
          </h3>
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '2px solid #ef4444'
          }}>
            <p style={{ textAlign: 'center' as const, marginBottom: '1.5rem', color: '#d1d5db' }}>
              우주 전체에 흩어진 색색의 성운 가스들은 14개의 불선한 정신요소들을 나타냅니다.<br />
              각 성운에는 항상 라벨이 표시되며, 호버하면 더 밝게 빛납니다.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1rem'
            }}>
              {unwholesomeFactors.map((factor, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(239, 68, 68, 0.2)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid #dc2626',
                    textAlign: 'center' as const,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={() => setHoveredElement(factor)}
                  onMouseLeave={() => setHoveredElement(null)}
                  onMouseOver={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#ef4444'}
                  onMouseOut={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#dc2626'}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                      borderRadius: '50%',
                      boxShadow: '0 0 8px #ef4444'
                    }} />
                    <div>
                      <div style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '0.7rem' }}>
                        {factor.name}
                      </div>
                      <div style={{ color: '#f87171', fontSize: '0.6rem' }}>
                        {factor.korean}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '1.5rem', textAlign: 'center' as const }}>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
                💫 성운 색상: <span style={{ color: '#ef4444' }}>빨강</span>, <span style={{ color: '#f97316' }}>주황</span>, <span style={{ color: '#8b5cf6' }}>보라</span>, <span style={{ color: '#ec4899' }}>분홍</span>, <span style={{ color: '#f59e0b' }}>황금</span>
              </p>
              <p style={{ fontSize: '0.7rem', color: '#6b7280', marginTop: '0.5rem' }}>
                각 색상은 불선한 요소의 특성과 강도를 나타냅니다
              </p>
            </div>
          </div>
        </div>

        {/* 하단 우주 범례 */}
        <div style={{
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '1px solid #6b7280'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', textAlign: 'center' as const }}>
            우주 구성 요소
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            textAlign: 'center' as const
          }}>
            {[
              { icon: '☀️', title: '중심 태양', desc: 'Citta (마음)', color: '#f97316' },
              { icon: '🪐', title: '행성들', desc: '선한 정신 요소들', color: '#3b82f6' },
              { icon: '🌌', title: '4개 궤도', desc: 'S-P-D-F 시스템', color: '#10b981' },
              { icon: '☁️', title: '어둠의 성운', desc: '우주 전체에 퍼진 불선 요소들', color: '#ef4444' },
              { icon: '✨', title: '성운 가스', desc: '불선 요소 + 라벨 표시', color: '#f59e0b' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <div style={{ color: item.color, fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {item.title}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.7rem' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 호버된 요소 정보 */}
      {hoveredElement && (
        <div style={{
          position: 'fixed' as const,
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '1rem',
          borderRadius: '8px',
          maxWidth: '300px',
          zIndex: 1000,
          border: '1px solid white'
        }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>
            {hoveredElement.name}
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#d1d5db', margin: '0 0 0.5rem 0' }}>
            {hoveredElement.korean}
          </p>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>
            {hoveredElement.description}
          </p>
        </div>
      )}

      {/* CSS 애니메이션 */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default CompleteMindGalaxy;