import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {patientHistoryData} from '../../data/history'
import { Badge } from "../ui/badge"
import { Clock, HeartPulse } from "lucide-react"
function History(){
    return(
        <div className="w-full h-full px-10 py-5">
            <h1 className="text-3xl mb-7">History</h1>
            <div className="grid grid-cols-4 gap-3 w-max">
                {
                    patientHistoryData.map(el=>(
                        <Card
                        className={`w-64 rounded-xl shadow-sm border border-transparent ${el.statusColor} p-4 cursor-pointer hover:shadow-2xl`}
                        key={el.id}
                        >
                        <CardHeader className="p-0">
                            <CardTitle className="text-base font-semibold truncate">
                            {el.doctorName}
                            </CardTitle>
                            <CardDescription className="text-sm mt-1 flex gap-2">
                            <HeartPulse size={18} color="red"/>
                            {el.diagnosis}
                            </CardDescription>
                            <CardDescription className="text-xs text-muted-foreground flex items-center gap-2">
                            <Clock size={18}/>
                            {el.visitDate}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="p-0 mt-3">
                            <Badge
                            className={`rounded-full px-4 py-1 text-xs font-medium border-current bg-white border-0`}
                            >
                            {el.status}
                            </Badge>
                        </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
export default History