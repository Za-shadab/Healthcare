import heartIcon from '@/assets/healthstats/heart (1).png';
import bloodCellsIcon from '@/assets/healthstats/red-blood-cells.png'
import bloodPressure from '@/assets/healthstats/blood-pressure.png'
import { Heart } from 'lucide-react';

const healthReport = [
  {
    section: 'Heart Status',
    metrics: [
      { label: 'Heart Rate', value: '74 bpm', image: <Heart size={18}/> },
      { label: 'Blood Count', value: '80-90', image: <Heart size={18}/> },
      // { label: 'Cholesterol', value: '225 mg/dL', image: <Heart size={18}/> },
    ],
  },
  {
    section: 'Blood Status',
    metrics: [
      { label: 'Glucose Level', value: '126 mg/dL', recorded: '2 days ago', recordedAt: '2025-07-01T10:00:00Z', image: heartIcon},
      { label: 'Blood Pressure', value: '120/80 mmHg', image: bloodPressure},
      { label: 'Body Temperature', value: '36.6°C', image: bloodPressure},
      { label: 'Oxygen Saturation', value: '97%', image:  bloodCellsIcon},
    ],
  },
];

export default healthReport