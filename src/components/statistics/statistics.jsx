import healthReport from "@/data/healthStats";
import { Card, CardAction, CardDescription, CardTitle } from "../ui/card";
import humanHeart from '@/assets/healthstats/humanHeart.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LineChart, lineElementClasses  } from "@mui/x-charts";
import { Badge } from "../ui/badge";


const margin = { right: 24 };
const uData = [2000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

function Statistics(){
    const percentage = 66;
    const date = new Date()

    return(
        <div className="h-[160vh] flex justify-between">
            <div className="w-2/3 h-full bg-white px-4 py-4 flex flex-col" style={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                <h1 className="text-3xl text-cyan-500 overflow-hidden">Health Statistics</h1>
                <div className="overflow-hidden">
                            <div className="grid grid-cols-4 px-2 py-2" >
                                {healthReport[0].metrics.map(el=>(
                                    <Card className='overflow-hidden mt-4 border-transparent text-indigo-950 w-48 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:bg-blue-700/50 hover:text-white cursor-pointer'>
                                        <CardTitle className='p-0 flex flex-col'>
                                            <CardDescription className='flex items-center ml-8'>
                                                <CardDescription className={el.label == 'Heart Rate'? 'text-xl' : 'text-xl'}>{el.label}</CardDescription>
                                                <span className="m-0 ml-8">{el.image? el.image : null}</span>
                                            </CardDescription>
                                            <CardDescription className={`${el.label == 'Heart Rate'? 'text-xl':'text-lg'} mt-2 ml-10`}> 
                                                {el.value} 
                                            </CardDescription>
                                            <CardDescription className='flex justify-center'>
                                                    <LineChart
                                                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                                        series={[
                                                            {
                                                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                                                            color: '#fdb462'
                                                            },
                                                        ]}
                                                        grid={{horizontal:true}}
                                                        className="mr-10 mt-5"
                                                        height={150}
                                                        />
                                            </CardDescription>
                                        </CardTitle>
                                    </Card>
                                ))}
                                    <div>
                                        <div className="w-48 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 rounded-lg h-1/3 mt-4 hover:bg-blue-700/50 hover:text-white cursor-pointer">
                                            <h1 className="text-2xl">Blood Pressure</h1>
                                            <h1 className="text-2xl">79</h1>
                                        </div>
                                        <div className="w-48 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 rounded-lg h-[22vh] mt-4 hover:bg-blue-700/50 hover:text-white cursor-pointer">
                                            <h1 className="text-2xl">Bill Due</h1>
                                            <h1 className="text-2xl">79</h1>
                                        </div>
                                    </div>
                                    <div className="w-48 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 rounded-lg mt-4 flex flex-col gap-2 hover:bg-blue-700/50 hover:text-white cursor-pointer">
                                        <h1 className="text-2xl text-gray-800">Fever History</h1>
                                        <h1 className="text-gray-700">{date.toLocaleDateString()}</h1>
                                        <h1 className="text-7xl overflow-hidden text-center mt-5">94</h1>
                                        <h1 className="text-center mt-2 text-xl">Normal</h1>
                                    </div>
                            </div>

                </div>

                <div className="w-full h-[60vh] mt-20">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-3xl text-blue-900">Heart Ecg</h1>
                            <h1 className="text-gray-600">{date.toLocaleDateString()}</h1>
                        </div>
                        <div>
                            <Badge className="rounded-lg px-4 py-1 font-medium border-current bg-orange-100 border-0 text-orange-600 w-25 h-8 mt-2 mr-40 text-lg">72 bpm</Badge>
                        </div>
                    </div>
                    <div>
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                            ]}
                            grid={{horizontal:true}}
                            className="mr-50 mt-5"
                            height={300}
                            width={700}
                        />
                    </div>
                </div>

                <div className="flex p-2 gap-2">
                    {
                        healthReport[1].metrics.map(el=>(
                            <Card className='w-56 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 rounded-lg mt-4 border-transparent'>
                                <CardTitle className='flex flex-col gap-2'>
                                    <CardDescription className='w-10 h-10'><img src={el.image} className="w-full h-full object-cover"/></CardDescription>
                                    <CardDescription className='text-lg text-gray-600'>{el.label}</CardDescription>
                                    <CardDescription>{el.value}</CardDescription>
                                </CardTitle>
                            </Card>
                        ))
                    }
                </div>
            </div>

            <div className="px-4 w-1/3 h-full">
              <div className="w-full px-4 py-4">
                    <h1 className="text-3xl text-red-500">Heart</h1>
                    <div className="w-full h-full py-5">
                        <img src={humanHeart} className="object-cover w-full h-full"/>
                    </div>
              </div>
            </div>
        </div>
    )
}

export default Statistics