import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
// import styles from "./../../styles/header.modules.css";
export default function Header() {
    const router = useRouter();
    // const pathBool = router.pathname != "/";
    const pathBool = true;
    const calorieOfToday = 50;
    const goalUserCalories = 100;
    const { data: session } = useSession();
    console.log(session);
    return (
        <div className="bg-lime-200 text-2xl  border-4 border-green-300 shadow-xl min-h-fit sticky h-24 top-0 rounded-bl-3xl rounded-tr-3xl">
            <div className="text-pink-300 text-5xl font-medium text-shadow-lg text-shadow-xl ml-6 mt-4">
                CalLog
            </div>
            {pathBool ? (
                <div className="absolute right-10 bottom-2 border-b-2 border-b-gray-700 border-dashed">
                    <th className=" text-gray-500">目標カロリー摂取量</th>
                    <th className="">:</th>
                    <th
                        className={
                            "text-4xl " +
                            (goalUserCalories * 1.4 < calorieOfToday
                                ? " text-red-700"
                                : goalUserCalories * 1.3 < calorieOfToday
                                ? "text-red-600"
                                : goalUserCalories * 1.2 < calorieOfToday
                                ? "text-red-500"
                                : goalUserCalories * 1.1 < calorieOfToday
                                ? "text-green-400"
                                : goalUserCalories == calorieOfToday
                                ? " bg-blue-600"
                                : goalUserCalories * 0.9 < calorieOfToday
                                ? "text-green-400"
                                : goalUserCalories * 0.8 < calorieOfToday
                                ? "text-red-400"
                                : goalUserCalories * 0.7 < calorieOfToday
                                ? "text-red-300"
                                : goalUserCalories * 0.6 < calorieOfToday
                                ? "text-red-200"
                                : "text-red-100")
                        }
                    >
                        {goalUserCalories}
                    </th>
                    <th className="text-gray-500">kcal</th>
                </div>
            ) : (
                <div className=""></div>
            )}
        </div>
    );
}
