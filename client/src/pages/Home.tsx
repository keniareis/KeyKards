import React from 'react';
import '../styles/Home.css';

const App: React.FC = () => {
  const generateContributions = (weeks: number) => {
    const contributions = [];
    const today = new Date();
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    for (let i = 0; i < weeks; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (weeks * 7 - (i * 7 + j)));
        const count = Math.floor(Math.random() * 7);

        if (i === weeks - 1 && date > currentDate) {
          break;
        }

        week.push({ date: date.toISOString().split('T')[0], count });
      }
      contributions.push(week);
    }
    

    return contributions;
  };

  const contributions = generateContributions(17);

  const getColor = (count: number) => {
    if (count === 0) return '#4B0049';
    return '#8D00AD';
  };

  const daysOfWeek = ['Seg', 'Qua', 'Sex', 'Dom'];
  const uniqueMonths = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className='name-logo'>
            <img src="/src/assets/logo.svg" alt="logo" />
            <h1>KeyKards</h1>
        </div>
        <div>
          <input type="text" placeholder="Pesquise seus flashcards" className="search-bar" />
        </div>
        <div className="nav-icons">
          <button><img src="/src/assets/home.svg" alt="HomeIcon"/>Home</button>
          <button><img src="/src/assets/baralho.svg" alt="baralhoIcon" />Baralhos</button>
          <button><img src="/src/assets/person.svg" alt="person" /></button>
        </div>
      </header>

      <main className="main-content">
        <div className="flashcard-container">
          <div className='top-name-flashcards'>
            <img src="/src/assets/mdi_cards.svg" alt="mdi_cards" />
            <h1>Baralho</h1>
          </div>
          <div className="card-stack">
            <div className="card smaller-card01"></div>
            <div className="card main-card">
              <img src="/src/assets/gear.svg" alt="gear" />
              <h2>Java</h2>
              <p>20 cartões</p>
              <button className='study-btn'>Estudar</button>
            </div>
            <div className="card smaller-card02"></div>
          </div>
          <div className='slider'>
            <p>Ver tudo <img src="/src/assets/arrow.svg" alt="arrow-see" /></p>
            <div className="flashcard-slider-container">
              <button className='arrow-left' onClick={scrollLeft}>
                <img src="/src/assets/arrow.svg" alt="arrow-left" />
              </button>
              <div className="flashcard-slider" ref={scrollRef}>
                <button>Javascript</button>
                <button>Nodejs</button>
                <button>Springboot</button>
                <button>Flutter</button>
                <button>React</button>
                <button>Vue.js</button>
              </div>
              <button className='arrow-right' onClick={scrollRight}>
                <img src="/src/assets/arrow.svg" alt="arrow-right" />
              </button>
            </div>
          </div>
          <button className="new-deck-button">Novo baralho</button>
        </div>

        {/* Seção Ofensiva */}
        <div className='daily-offensive'>
          <div className='offensive-name'>
            <img src="/src/assets/fire.svg" alt="offensive-fire"/>
            <h2>Ofensiva</h2>
          </div>
          <div className="offensive-container">
              <div className="calendar-header">
                {uniqueMonths.map((month, index) => (
                  <div key={index} className="month">{month}</div>
                ))}
              </div>
            <div className="calendar">
              <div className="days-of-week">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="day-name">{day}</div>
                ))}
              </div>
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="week">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="day"
                      style={{ backgroundColor: getColor(day.count) }}
                      title={`${day.date}: ${day.count} contribuições`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Seção Hoje */}
          <div className='today-info'>
            <div className='today-name'>
              <img src="/src/assets/stats.svg" alt="" />
              <h2>Hoje</h2>
            </div>
            <div className="today-container">
              <div className='first-column'>
                <div className='info-first-column'>
                  <p>Estudados:</p>
                  <p className='value'>30 Cartões</p>
                </div>
                <div className='info-first-column'>
                  <p>Tempo gasto:</p>
                  <p className='value'>10 min (15s/cartão)</p>
                </div>
              </div>
              <div className='second-column'>
                <div className='second-column-parts'>
                  <div className='info-second-column01' id='first'>
                    <p>Revisados:</p>
                    <p className='value'>19</p>
                  </div>
                  <div className='info-second-column01'>
                    <p>Aprendidos:</p>
                    <p  className='value'>8</p>
                  </div>
                </div>
                <div className='second-column-parts'>
                  <div className='info-second-column02' id='second'>
                    <p>Reaprendidos:</p>
                    <p className='value'>3</p>
                  </div>
                  <div className='info-second-column02'>
                    <p>Filtrados:</p>
                    <p className='value'>0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
