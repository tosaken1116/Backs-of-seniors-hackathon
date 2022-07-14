type propsType ={
    calorieOfDay:number,
    calorieAverage:number,
}

export default function CalorieOfKUSA(props:propsType){
    const cellColor=(props.calorieOfDay>props.calorieAverage)?" bg-green-300 p-2 m-2":"bg-green-500 p-2 m-2"
    return(
        <div className={cellColor}></div>
    )
}