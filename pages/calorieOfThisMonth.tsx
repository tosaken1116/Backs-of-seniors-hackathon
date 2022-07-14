import CalorieOfKUSA from "./components/calorieKUSA"

export default function CalorieOfThisMonth(){
    const testKUSAdata =[200,100,300,400,55,600.500,400,200,200,100,300,400,55,600.500,400,200,200,100,300,400,55,600.500,400,200,200,100,300,400,55,600.500,400,200]
    const calorieAverage = 100
    return(
        <div className="mx-40 grid grid-cols-7 grid-rows-5">
            {testKUSAdata.map((calorieOfDay,index) =>(
                <CalorieOfKUSA
                    calorieOfDay={calorieOfDay}
                    calorieAverage={calorieAverage}
                ></CalorieOfKUSA>
            ))}
        </div>
    )
}