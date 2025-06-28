import lungs from '../assets/healthindicators/lungs.png'
import teeth from '../assets/healthindicators/tooth.png'
import bone from '../assets/healthindicators/zeroa.png'

const date = new Date()
const options = {day: '2-digit', month: 'short', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);

export const healthstatusData = [
    {
        title: 'Lungs',
        image: lungs,
        date: formattedDate,
        progress: '70%',
        progresscolor: '#B24A44',
    },
    {
        title: 'Teeth',
        image: teeth,
        date: formattedDate,
        progress: '80%',
        progresscolor: '#76D1C3'
    },
    {
        title: 'Bone',
        image: bone,
        date: formattedDate,
        progress: '90%',
        progresscolor: '#FF7755'
    }
]