// Patient's Medical History Data (Patient-centric view)
const patientHistoryData = [
  {
    id: 1,
    doctorName: "Dr. Sarah Johnson",
    department: "Cardiology",
    appointmentTime: "09:30:00",
    visitCost: 200,
    visitDate: "2024-03-15",
    diagnosis: "Blood Pressure Checkup",
    status: "Normal",
    statusColor: "bg-emerald-100/50"
  },
  {
    id: 2,
    doctorName: "Dr. Mark Wilson",
    department: "Dentistry",
    appointmentTime: "14:15:30",
    visitCost: 150,
    visitDate: "2024-03-10",
    diagnosis: "Dental Cleaning",
    status: "Completed",
    statusColor: "bg-emerald-100/50"
  },
  {
    id: 3,
    doctorName: "Dr. Emily Chen",
    department: "Dermatology",
    appointmentTime: "11:00:45",
    visitCost: 180,
    visitDate: "2024-03-05",
    diagnosis: "Skin Allergy Treatment",
    status: "Follow-up Required",
    statusColor: "bg-amber-100/50"
  },
  {
    id: 4,
    doctorName: "Dr. Kevin Djones",
    department: "Physiotherapy",
    appointmentTime: "16:45:20",
    visitCost: 120,
    visitDate: "2024-02-28",
    diagnosis: "Knee Pain Therapy",
    status: "Ongoing",
    statusColor: "bg-pink-200/50"
  },
  {
    id: 5,
    doctorName: "Dr. Sarah Johnson",
    department: "Cardiology",
    appointmentTime: "08:20:15",
    visitCost: 250,
    visitDate: "2024-02-20",
    diagnosis: "ECG Test",
    status: "Normal",
    statusColor: "bg-emerald-100/50"
  },
  {
    id: 6,
    doctorName: "Dr. Michael Roberts",
    department: "Ophthalmology",
    appointmentTime: "13:30:00",
    visitCost: 175,
    visitDate: "2024-02-15",
    diagnosis: "Eye Examination",
    status: "Prescription Updated",
    statusColor: "bg-emerald-100/50"
  },
  {
    id: 7,
    doctorName: "Dr. Lisa Anderson",
    department: "Neurology",
    appointmentTime: "10:15:30",
    visitCost: 300,
    visitDate: "2024-02-10",
    diagnosis: "Headache Assessment",
    status: "Under Observation",
    statusColor: "bg-amber-100/50"
  },
  {
    id: 8,
    doctorName: "Dr. James Cooper",
    department: "Orthopedics",
    appointmentTime: "15:50:45",
    visitCost: 220,
    visitDate: "2024-02-05",
    diagnosis: "Back Pain Consultation",
    status: "Treatment Ongoing",
    statusColor: "bg-pink-200/50"
  },
  {
    id: 9,
    doctorName: "Dr. Mark Wilson",
    department: "Dentistry",
    appointmentTime: "12:05:20",
    visitCost: 95,
    visitDate: "2024-01-25",
    diagnosis: "Tooth Filling",
    status: "Completed",
    statusColor: "bg-emerald-100/50"
  },
  {
    id: 10,
    doctorName: "Dr. Amanda Foster",
    department: "General Medicine",
    appointmentTime: "17:30:15",
    visitCost: 100,
    visitDate: "2024-01-20",
    diagnosis: "Annual Health Checkup",
    status: "Healthy",
    statusColor: "bg-emerald-100/50"
  },
  {
    id: 11,
    doctorName: "Dr. Kevin Djones",
    department: "Physiotherapy",
    appointmentTime: "09:45:00",
    visitCost: 120,
    visitDate: "2024-01-15",
    diagnosis: "Knee Pain Initial Assessment",
    status: "Treatment Plan Created",
    statusColor: "bg-pink-200/50"
  },
  {
    id: 12,
    doctorName: "Dr. Rebecca Martinez",
    department: "Gastroenterology",
    appointmentTime: "14:20:30",
    visitCost: 185,
    visitDate: "2024-01-10",
    diagnosis: "Digestive Health Consultation",
    status: "Dietary Changes Recommended",
    statusColor: "bg-amber-100/50"
  }
];

// Status color mapping for patient-centric statuses
const statusColorMap = {
  "Normal": "green",
  "Healthy": "green", 
  "Completed": "green",
  "Prescription Updated": "green",
  "Follow-up Required": "orange",
  "Under Observation": "orange",
  "Dietary Changes Recommended": "orange",
  "Ongoing": "blue",
  "Treatment Ongoing": "blue",
  "Treatment Plan Created": "blue"
};



export { patientHistoryData, statusColorMap };