import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
type mealType = {
    mealName: string;
    mealCalorie: number;
    mealPerCalorie: number;
    mealNumber: number;
};
export default function useIputCalorie() {
    const calorieTable = {
        りんご: 71,
        みかん: 32,
        ぶどう: 30,
    };
    const [meals, SetMeals] = useState("");
    const initialMeals = [];

    // const [mealCalorie, setMealCalorie] = useState();

    const [detectMeals, SetDetectMeals] = useState<mealType[]>(initialMeals);
    const handleMealsChange = (event) => {
        SetMeals(event.target.value);
        console.log(event.target.value);
    };
    const [sumCalorie, SetSumCalorie] = useState(0);
    const removeMeal = (index: number) => {
        const newMeals = [...detectMeals];
        const newMeal = newMeals[index];
        newMeals.splice(index, 1);
        SetSumCalorie(
            sumCalorie - newMeal["mealPerCalorie"] * newMeal["mealNumber"]
        );
        SetDetectMeals(newMeals);
    };
    const registMealToDatabase = () => {
        SetDetectMeals([]);
        console.log("======================");
        // SetSumCalorie
    };
    const BaseURL = "";
    const upIndex = (index: number) => {
        const newDetectMeals = [...detectMeals];
        const newMeals = newDetectMeals[index];
        newMeals.mealNumber += 1;
        newMeals.mealCalorie += newMeals.mealPerCalorie;
        newDetectMeals.splice(index, 1, newMeals);
        SetSumCalorie(sumCalorie + newMeals.mealPerCalorie);

        SetDetectMeals(newDetectMeals);
        console.log(detectMeals);
    };
    const downIndex = (index: number) => {
        const newDetectMeals = [...detectMeals];
        const newMeals = newDetectMeals[index];
        if (newMeals.mealNumber > 1) {
            newMeals.mealNumber -= 1;
            newMeals.mealCalorie -= newMeals.mealPerCalorie;
            SetSumCalorie(sumCalorie - newMeals.mealPerCalorie);
        }

        newDetectMeals.splice(index, 1, newMeals);
        SetDetectMeals(newDetectMeals);

        console.log(detectMeals);
    };
    const goalUserCalories = 2000;
    const setDetectCaloriesOfMeals = async (event) => {
        event.preventDefault();

        if (meals === "") {
            return;
        }
        let mealCalorie = calorieTable[meals];
        // await axios
        //     .post<[]>(BaseURL + "sighin", {
        //         food: meals,
        //     })
        //     .then((res: AxiosResponse) => {
        //         console.log(res.data);
        //         setMealCalorie(res.data.calorie);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        await SetDetectMeals((detectMeals) => [
            ...detectMeals,
            {
                mealName: meals,
                mealPerCalorie: mealCalorie,
                mealCalorie: mealCalorie,
                mealNumber: 1,
            },
        ]);
        SetSumCalorie(sumCalorie + mealCalorie);

        SetMeals("");
        console.log(detectMeals);
    };
    return (
        <div className="flex flex-col h-screen">
            <Header></Header>
            <div className="flex-grow">
                <form onSubmit={setDetectCaloriesOfMeals}>
                    <div className="mt-12">
                        <div className="inline text-xl">
                            今日の摂取カロリー:
                        </div>
                        <div
                            className={
                                "text-4xl mt-12 inline " +
                                (goalUserCalories * 1.4 < sumCalorie
                                    ? " text-red-700"
                                    : goalUserCalories * 1.3 < sumCalorie
                                    ? "text-red-600"
                                    : goalUserCalories * 1.2 < sumCalorie
                                    ? "text-red-500"
                                    : goalUserCalories * 1.1 < sumCalorie
                                    ? "text-green-400"
                                    : goalUserCalories < sumCalorie
                                    ? " text-blue-600"
                                    : goalUserCalories * 0.9 < sumCalorie
                                    ? "text-green-400"
                                    : goalUserCalories * 0.8 < sumCalorie
                                    ? "text-red-400"
                                    : goalUserCalories * 0.7 < sumCalorie
                                    ? "text-red-300"
                                    : goalUserCalories * 0.6 < sumCalorie
                                    ? "text-red-200"
                                    : "text-red-100")
                            }
                        >
                            {sumCalorie}
                        </div>
                        <div className="inline text-2xl">kcal</div>
                    </div>

                    <div className="flex mt-2">
                        <div>
                            <div className="inline">今日は</div>
                            <input
                                value={meals}
                                type={"text"}
                                onChange={handleMealsChange}
                                className="inline border-b-2 border-dotted border-slay-300"
                            ></input>
                            <div className="inline">を食べた</div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="border-2 ml-12 border-orange-300 rounded-full px-2 bg-gradient-to-t from-orange-200"
                                onClick={() => registMealToDatabase()}
                            >
                                日記をつける
                            </button>
                        </div>
                    </div>
                </form>
                <div className="mt-6 text-2xl ml-4 border-b-4 rounded-xl border-slate-400 inline-block">
                    　今日のご飯　　　
                </div>
                <ul>
                    {detectMeals.map((detectMeal, index) => (
                        <div
                            key={index}
                            className=" border-2 ml-4 p-1 rounded-2xl inline-block w-auto border-orange-200 mx-auto mt-2  border-full bg-gradient-to-b from-pink-300"
                        >
                            <button
                                onClick={() => removeMeal(index)}
                                className=" inline bg-slate-600 rounded-full  w-5 h-5 text-white border-2 border-t-2 border-slay-300"
                            >
                                <div className="-mt-1">×</div>
                            </button>
                            <div className="inline ml-2">
                                {detectMeal.mealName}
                            </div>
                            <div className="inline ml-2">
                                ×{detectMeal.mealNumber}
                            </div>
                            <button
                                onClick={() => upIndex(index)}
                                className=" ml-4 -mt-4 inline bg-slate-600 rounded-full  w-7 h-7 text-white border-2 border-t-2 border-slay-300"
                            >
                                +
                            </button>

                            <div className="inline">
                                {detectMeal.mealCalorie}kcal
                            </div>
                            <button
                                onClick={() => downIndex(index)}
                                className=" inline bg-slate-600 rounded-full  w-7 h-7 text-white border-2 border-t-2 border-slay-300"
                            >
                                -
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
}
