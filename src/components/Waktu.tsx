import React, { useState, useEffect } from "react";

// Tipe untuk props 'timeLeft'
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface WaktuProps {
  timeLeft: TimeLeft;
}

const Waktu: React.FC<WaktuProps> = ({ timeLeft }) => {
  const weddingDate = new Date("2025-07-20T08:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +weddingDate - +new Date();
    const timeLeft: TimeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const [timeLeftState, setTimeLeftState] = useState<TimeLeft>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftState(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      <div className="bg-white p-3 rounded-lg shadow-md">
        <div className="text-2xl font-bold text-lime-600">
          {timeLeftState.days}
        </div>
        <div className="text-sm text-gray-600">Hari</div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-md">
        <div className="text-2xl font-bold text-lime-600">
          {timeLeftState.hours}
        </div>
        <div className="text-sm text-gray-600">Jam</div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-md">
        <div className="text-2xl font-bold text-lime-600">
          {timeLeftState.minutes}
        </div>
        <div className="text-sm text-gray-600">Menit</div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-md">
        <div className="text-2xl font-bold text-lime-600">
          {timeLeftState.seconds}
        </div>
        <div className="text-sm text-gray-600">Detik</div>
      </div>
    </div>
  );
};

export default Waktu;
