import { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState(new Date());
  const [bgColor, setBgColor] = useState('bg-dark-blue');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const hour = time.getHours();
    if (hour >= 6 && hour < 9) {
      setBgColor('bg-beige');
    } else if (hour >= 9 && hour < 12) {
      setBgColor('bg-light-beige');
    } else if (hour >= 12 && hour < 15) {
      setBgColor('bg-soft-white');
    } else if (hour >= 15 && hour < 18) {
      setBgColor('bg-dark-green');
    } else if (hour >= 18 && hour < 21) {
      setBgColor('bg-dark-blue');
    } else if (hour >= 21 && hour < 24) {
      setBgColor('bg-darker-blue');
    } else {
      setBgColor('bg-darkest-blue');
    }

    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    const hourHand = document.querySelector('.hour-hand') as HTMLElement;
    const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
    const secondHand = document.querySelector('.second-hand') as HTMLElement;

    const updateClockHands = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

      if (hourHand) hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      if (minuteHand) minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      if (secondHand) secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    };

    updateClockHands();
    const intervalId = setInterval(updateClockHands, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`relative flex flex-col min-h-screen ${bgColor} text-soft-white`}>
      <Navigation />
      <div className="fixed top-4 right-4 text-sm md:text-xl text-right space-y-1 z-10">
        <div className="clock" role="img" aria-label="Analog clock showing the current time">
          <div className="clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand minute-hand"></div>
            <div className="hand second-hand"></div>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t mt-6 border-dark-green">
        <p className="text-soft-white text-sm md:text-base">&copy; {new Date().getFullYear()} Jus Buckingham</p>
      </footer>
      <style jsx>{`
        .clock {
          width: 40px;
          height: 40px;
          border: 4px solid black;
          border-radius: 50%;
          position: relative;
          padding: 10px;
        }

        @media (min-width: 768px) {
          .clock {
            width: 60px;
            height: 60px;
            border: 6px solid black;
          }
        }

        .clock-face {
          position: relative;
          width: 100%;
          height: 100%;
          transform: translateY(-3px);
        }

        .hand {
          width: 50%;
          background: black;
          position: absolute;
          top: 50%;
          transform-origin: 100%;
          transform: rotate(90deg);
          transition: all 0.05s;
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
        }

        .hour-hand {
          height: 4px;
        }

        .minute-hand {
          height: 3px;
        }

        .second-hand {
          height: 2px;
          background: red;
        }

        @media (min-width: 768px) {
          .hour-hand {
            height: 6px;
          }

          .minute-hand {
            height: 5px;
          }

          .second-hand {
            height: 4px;
          }
        }

        .bg-dark-blue {
          background-color: #0a1f44;
        }

        .bg-beige {
          background-color: #f5f5dc;
        }

        .bg-light-beige {
          background-color: #faf9f0;
        }

        .bg-soft-white {
          background-color: #ffffff;
        }

        .bg-dark-green {
          background-color: #006400;
        }

        .bg-darker-blue {
          background-color: #001f3f;
        }

        .bg-darkest-blue {
          background-color: #000022;
        }
      `}</style>
    </div>
  );
};

export default Layout;
