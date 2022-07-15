import Header from "./components/Header"
import Footer from "./components/Footer"
import CalorieOfKUSA from "./components/calorieKUSA"
import Head from "next/head"

export default function CalorieOfThisMonth(){
    const testKUSAdata =[200,100,300,400,55,600.500,400,200,200,100,300,400,55,600.500,400,200,200,100,300,400,55,600.500,400,200,200,100,300,400,55,600.500,400,200]
    const calorieAverage = 100
    const thisMonth = "１月"
    return(
        <div  className="flex flex-col h-screen">
            <Header></Header>
            <div  className="flex-grow">
                <div className="text-center text-4xl mt-4">
                    カロリー日記[{thisMonth}]
                </div>
                <div className=" grid grid-cols-7 grid-rows-5 w-52 mt-12 mx-auto">
                    {testKUSAdata.map((calorieOfDay,index) =>(
                        <CalorieOfKUSA
                            calorieOfDay={calorieOfDay}
                            calorieAverage={calorieAverage}
                        ></CalorieOfKUSA>
                    ))}
                </div>
            </div>
            
            <Footer></Footer>
        </div>
        
    )
}