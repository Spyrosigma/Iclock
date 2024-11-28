import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ClockProps {
  timezone: string;
  location: string;
}

const Clock: React.FC<ClockProps> = ({ timezone, location }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(time);
  };

  const formatDate = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(time);
  };

  const isSleepTime = () => {
    const hour = new Date(time.toLocaleString('en-US', { timeZone: timezone })).getHours();
    return hour >= 0 && hour < 7;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-80 h-80">
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full border-4 border-purple-500 bg-gray-800 shadow-lg shadow-purple-500/20">
          {/* Sleep Time Indicator */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-purple-900/20 rounded-full" 
                 style={{
                   clipPath: 'polygon(50% 50%, 0 0, 30% 0, 50% 50%)',
                   transform: 'rotate(150deg)',
                 }}>
            </div>
          </div>
          
          {/* Clock Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6 bg-gray-800/80 rounded-xl backdrop-blur-sm">
              <h2 className="text-xl font-bold text-purple-300 mb-2">{location}</h2>
              <p className="text-3xl font-mono text-white mb-2">{formatTime()}</p>
              <p className="text-sm text-gray-400 mb-3">{formatDate()}</p>
              <div className="flex items-center justify-center text-purple-300">
                {isSleepTime() ? (
                  <>
                    <Moon className="w-5 h-5 mr-1" />
                    <span className="text-sm">Sleep Time</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5 mr-1" />
                    <span className="text-sm">Active Time</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;