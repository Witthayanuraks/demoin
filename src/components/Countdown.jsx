import { useEffect, useState } from 'react';
import Divider from './Divider';

function Countdown() {
  const targetDate = new Date('2025-06-24T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <section className="py-12 bg-white">
      <Divider text="🔗" />
      <div className="max-w-4xl mx-auto px-4">
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-8">
        </h2> */}
        <div className="flex justify-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold text-gray-800">
                {formatNumber(value)}
              </span>
              <span className="text-sm md:text-base uppercase tracking-wider text-gray-500">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Divider text="🔗" />
    </section>
  );
}

export default Countdown;