import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardAction, CardDescription, CardTitle } from "../ui/card";

const doctors = [
  {
    name: "Dr. Peter Doe",
    qualifications: ["BDS", "MDS"],
    specialties: ["Orthodontist", "Dentofacial Orthopedist"],
    consultationFee: "$58 Consultation Fee at clinic",
    rating: 4.7,
    experience: "13+ Years",
    location: "Boston",
    contact: "+1 (656) 738 1100",
    appointmentAction: "Book Appointment"
  },
  {
    name: "Dr. Sarah William",
    qualifications: ["BDS", "MDS"],
    specialties: ["Orthodontist", "Dentofacial Orthopedist"],
    consultationFee: "$100 Consultation Fee at clinic",
    rating: 4.7,
    experience: "8+ Years",
    location: "Boston",
    contact: "+1 (676) 977 1103",
    appointmentAction: "Book Appointment"
  },
  {
    name: "Dr. Sarah William",
    qualifications: ["BDS", "MDS"],
    specialties: ["Orthodontist", "Dentofacial Orthopedist"],
    consultationFee: "$100 Consultation Fee at clinic",
    rating: 4.7,
    experience: "8+ Years",
    location: "Boston",
    contact: "+1 (676) 977 1103",
    appointmentAction: "Book Appointment"
  },
  {
    name: "Dr. Sarah William",
    qualifications: ["BDS", "MDS"],
    specialties: ["Orthodontist", "Dentofacial Orthopedist"],
    consultationFee: "$100 Consultation Fee at clinic",
    rating: 4.7,
    experience: "8+ Years",
    location: "Boston",
    contact: "+1 (676) 977 1103",
    appointmentAction: "Book Appointment"
  },
  {
    name: "Dr. Sarah William",
    qualifications: ["BDS", "MDS"],
    specialties: ["Orthodontist", "Dentofacial Orthopedist"],
    consultationFee: "$100 Consultation Fee at clinic",
    rating: 4.7,
    experience: "8+ Years",
    location: "Boston",
    contact: "+1 (676) 977 1103",
    appointmentAction: "Book Appointment"
  },
  {
    name: "Dr. Sarah William",
    qualifications: ["BDS", "MDS"],
    specialties: ["Orthodontist", "Dentofacial Orthopedist"],
    consultationFee: "$100 Consultation Fee at clinic",
    rating: 4.7,
    experience: "8+ Years",
    location: "Boston",
    contact: "+1 (676) 977 1103",
    appointmentAction: "Book Appointment"
  },
  {
    name: "Dr. Sarah William",
    qualifications: ["BDS", "MDS"],
    specialties: ["Orthodontist", "Dentofacial Orthopedist"],
    consultationFee: "$100 Consultation Fee at clinic",
    rating: 4.7,
    experience: "8+ Years",
    location: "Boston",
    contact: "+1 (676) 977 1103",
    appointmentAction: "Book Appointment"
  },
];


function DoctorsList(){
  return(
    <div className="grid grid-cols-4">
        {
          doctors.map(el=>(
            <Card className='ml-7 mt-7 w-60 border-transparent shadow-l'>
              <CardTitle  className='flex flex-col items-center gap-4'>
                <CardDescription className='rounded-full overflow-hidden w-24 h-24 shadow-l'>
                  <img src="https://picsum.photos/100" className="object-cover w-full h-full"/>
                </CardDescription>
                <CardDescription className='flex flex-col items-center gap-2'>
                  <CardDescription>{el.name}</CardDescription>
                  <CardDescription>{el.qualifications.map(el=> (<Badge className="rounded-full px-4 py-1 text-xs font-medium border-current bg-blue-100 border-0 text-blue-600 ml-2">{el+' '}</Badge>))}</CardDescription>
                  <CardDescription>{el.consultationFee}</CardDescription>
                </CardDescription>
                <CardAction className='flex justify-between w-full px-1'>
                  <Button className='bg-blue-50'>Make a Call</Button>
                  <Button className='bg-blue-50'>Check Availability</Button>
                </CardAction>
              </CardTitle>
            </Card>
          ))
        }
    </div>
  )
}

export default DoctorsList