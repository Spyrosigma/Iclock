import React, { useState } from 'react';
import Clock from './components/Clock';
import TimeZoneSelector from './components/TimeZoneSelector';
import { Globe2 } from 'lucide-react';

function App() {
  const [leftTimezone, setLeftTimezone] = useState('Asia/Kolkata');
  const [rightTimezone, setRightTimezone] = useState('America/Los_Angeles');

  const getLocationName = (timezone: string) => {
    const cityMap: Record<string, string> = {
      'Asia/Kolkata': 'New Delhi, India',
      'America/Los_Angeles': 'San Francisco, USA',
      'America/New_York': 'New York, USA',
      'Europe/London': 'London, UK',
      'Asia/Tokyo': 'Tokyo, Japan',
      'Asia/Dubai': 'Dubai, UAE',
      'Australia/Sydney': 'Sydney, Australia',
      'Europe/Paris': 'Paris, France',
    };
    return cityMap[timezone] || timezone;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <Globe2 className="w-8 h-8 text-purple-400 mr-3" />
          <h1 className="text-4xl font-bold text-purple-300">Time Zone Tracker</h1>
        </div>
        <p className="text-gray-400">Keep track of time across different cities worldwide</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-64">
            <TimeZoneSelector value={leftTimezone} onChange={setLeftTimezone} />
          </div>
          <Clock timezone={leftTimezone} location={getLocationName(leftTimezone)} />
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="w-64">
            <TimeZoneSelector value={rightTimezone} onChange={setRightTimezone} />
          </div>
          <Clock timezone={rightTimezone} location={getLocationName(rightTimezone)} />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-purple-300 font-medium mb-2">Sleep Time Indicator</p>
        <p className="text-gray-400 text-sm">Purple shaded area indicates sleep time (12 AM - 7 AM)</p>
      </div>
    </div>
  );
}

export default App;