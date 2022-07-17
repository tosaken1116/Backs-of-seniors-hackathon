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
                    <div className="grid grid-cols-2">
                        <input
                            placeholder="今日食べたものを入力"
                            value={meals}
                            type={"text"}
                            onChange={handleMealsChange}
                            className="text-sm border border-black"
                        ></input>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="border  border-black"
                            >
                                入力
                            </button>
                            <button
                                className="border border-black"
                                onClick={() => registMealToDatabase}
                            >
                                登録
                            </button>
                        </div>
                    </div>
                </form>
                <div className="text-sm">今日のごはん</div>
                <ul>
                    {detectMeals.map((detectMeal, index) => (
                        <div key={index}>
                            {detectMeal.mealName}:{detectMeal.mealCalorie}cal
                        </div>
                    ))}
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
}
