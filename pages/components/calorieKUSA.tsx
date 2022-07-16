type propsType ={
    calorieOfDay:number,
    calorieAverage:number,
    date:number,
}

export default function CalorieOfKUSA(props:propsType){
    const cellColor=
    (props.calorieOfDay == -1)?" rounded p-3 m-2":
    (props.calorieOfDay == 0)?" rounded bg-slate-300 p-3 m-2":
    (props.calorieOfDay>props.calorieAverage+props.calorieAverage/2)?" rounded bg-green-500 p-3 m-2":
    (props.calorieOfDay>props.calorieAverage)?"rounded bg-green-400 p-3 m-2":
    (props.calorieOfDay>props.calorieAverage-props.calorieAverage/2)?"rounded bg-green-300 p-3 m-2":
    "bg-green-200 p-3 m-2"
    return(
        <div className={cellColor}>
            <div className="text-xs -ml-2 -mt-3">
                {(props.date>0&&props.date<32)?props.date:""}
            </div>
        </div>
    )
}