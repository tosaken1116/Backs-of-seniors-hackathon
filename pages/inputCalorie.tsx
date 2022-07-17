import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
type mealType = {
    mealName: string;
    mealCalorie: number;
};
export default function InputCalorie() {
    const [meals, setMeals] = useState("");
    const initialMeals = [];
    const [detectMeals, setDetectMeals] = useState<mealType[]>(initialMeals);
    const handleMealsChange = (event) => {
        setMeals(event.target.value);
        console.log(event.target.value);
    };
    const removeMeal = (index: number) => {
        const newMeals = [...detectMeals];
        newMeals.splice(index, 1);
        setDetectMeals(newMeals);
    };
    const registMealToDatabase = (event) => {
        // 入力した食事の内容をバックエンドに送信
    };
    const setDetectCaloriesOfMeals = (event) => {
        event.preventDefault();

        if (meals === "") {
            return;
        }
        const calorie = 100;
        setDetectMeals((detectMeals) => [
            ...detectMeals,
            { mealName: meals, mealCalorie: calorie },
        ]);
        setMeals("");
        console.log(detectMeals);
    };
    return (
        <div className="flex flex-col h-screen">
            <Header></Header>
            <div className="flex-grow">
                <form onSubmit={setDetectCaloriesOfMeals}>
                    <div className="flex mt-12">
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
                                className="border-2 ml-12 border-orange-300 rounded-full px-2 bg-gradient-to-t from-orange-200"
                                onClick={() => registMealToDatabase}
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
                        <button
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

                            <div className="inline ml-4">
                                {detectMeal.mealCalorie}kcal
                            </div>
                        </button>
                    ))}
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
}
