import './App.css';
import { scenes } from './scenes';
import { arts } from './art';
import { useEffect, useState } from 'react';

function App() {

  const [overlay, setOverlay] = useState(true);

  const x = 'x';

  const hours = [
    x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x
  ]

  const calculateLeft = (time) => {
    const firstDate = new Date(2022, 6, 29, 16);
    const nextDate = new Date(2022, 6, 28+Number(time.split('.')[0]), time.split('.')[1], time.split('.')[2])
    const diff = nextDate.getTime() - firstDate.getTime();
    const left = diff / 18000;
    return `${left}px`;
  }

  const calculateWidth = (beg, end) => {
    const firstDate = new Date(2022, 6, 28+Number(beg.split('.')[0]), beg.split('.')[1], beg.split('.')[2])
    const nextDate = new Date(2022, 6, 28+Number(end.split('.')[0]), end.split('.')[1], end.split('.')[2])
    const diff = nextDate.getTime() - firstDate.getTime();
    const width = diff / 18000;
    return `${width}px`;
  }

  useEffect(() => {
    document.querySelector('.App').style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <div className="App" onClick={() => setOverlay(false)}>
      <header className="header">♥ ♥ AWAKENINGS TIMETABLE ♥ ♥</header>
      {
        overlay && (
            <div className='overlay'>
              <div className='overlay__header'>
                <div className='overlay__days'>DAYS</div>
                <div className='overlay__hours'>HOURS</div>
              </div>
              <div className='overlay__stages'><p>STAGES</p></div>
              <div className='overlay__artists'>
                <p>Scroll left and right<br/>to see the artists!</p>
                <button>OK</button>
              </div>
            </div>
        )
      }
      <div className="left_col">
        <ul>
          {
            scenes.map((scene) => (
              <li>{scene}</li>
            ))
          }
        </ul>
      </div>
        {/*  style={{width: '12200px'}} */}
        <div className="right_col">
        <div className="days">
            <ul>
              <li className="day--1 day">FRIDAY</li>
              <li className="day--2 day">SATURDAY</li>
              <li className="day--3 day">SUNDAY</li>
            </ul>
          </div>
          <header className="hours">
            {
              hours.map((hour, index) => (
                <li>{index+16 > 23 ? (index+16) % 24 : index+16}</li>
              ))
            }
          </header>
          <ul>
          {
            arts.map((art) => (
              <li className={`art--${art.scene} art`}
                style={{left: calculateLeft(art.beginning), width: calculateWidth(art.beginning, art.end)}}
              >
                {`${art.name}: ${art.beginning.split('.')[1]}:${art.beginning.split('.')[2]} — ${art.end.split('.')[1]}:${art.end.split('.')[2]}`}
              </li>
            ))
          }
        </ul>
      </div>
      <footer>Made by <a href="https://piccolora.de">Laura</a></footer>
    </div>
  );
}

export default App;
