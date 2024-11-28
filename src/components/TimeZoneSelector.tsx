import React from 'react';
import { Globe } from 'lucide-react';

interface TimeZoneSelectorProps {
  value: string;
  onChange: (timezone: string) => void;
}

const commonTimezones = [
  { value: 'Asia/Kolkata', label: 'New Delhi (IST)' },
  { value: 'America/Los_Angeles', label: 'San Francisco (PT)' },
  { value: 'America/New_York', label: 'New York (ET)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST)' },
  { value: 'Europe/Paris', label: 'Paris (CET)' },
];

const TimeZoneSelector: React.FC<TimeZoneSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Globe className="h-5 w-5 text-purple-400" />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-4 py-2 text-base border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        {commonTimezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimeZoneSelector;