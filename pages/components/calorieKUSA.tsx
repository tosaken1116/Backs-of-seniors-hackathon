type propsType = {
    calorieOfDay: number;
    calorieAverage: number;
    date: number;
};

export default function CalorieOfKUSA(props: propsType) {
    const cellColor =
        props.calorieOfDay == -1
            ? " rounded p-3 m-2"
            : props.calorieOfDay == 0
            ? " rounded shadow-xl bg-gradient-to-t to-sky-100 from-slay-300  p-3 m-2"
            : props.calorieOfDay >
              props.calorieAverage + props.calorieAverage / 2
            ? " rounded shadow-xl bg-gradient-to-t to-sky-100 from-green-500  p-3 m-2"
            : props.calorieOfDay > props.calorieAverage
            ? "rounded shadow-xl bg-gradient-to-t to-sky-100 from-green-400 p-3 m-2"
            : props.calorieOfDay >
              props.calorieAverage - props.calorieAverage / 2
            ? "rounded shadow-xl bg-gradient-to-t to-sky-100 from-green-300 p-3 m-2"
            : "shadow-xl bg-gradient-to-t to-sky-100 from-green-200 p-3 m-2";
    return (
        <div className={cellColor}>
            <div className="text-xs -ml-3 -mt-3">
                {props.date > 0 && props.date < 32 ? props.date : ""}
            </div>
        </div>
    );
}
