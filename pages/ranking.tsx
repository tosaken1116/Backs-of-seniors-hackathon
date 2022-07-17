import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
type userDataType = {
    userName: string;
    sumCalorie: number;
    differenceCalorie: number;
};

export default function Ranking() {
    const [rankingTitle, setRankingTitle] = useState("test1");
    const userDatas: userDataType[] = [
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
        {
            userName: "test",
            sumCalorie: 100,
            differenceCalorie: 200,
        },
    ];
    return (
        <div className="flex flex-col h-screen">
            <Header></Header>
            <div className="flex-grow">
                <div className="grid grid-cols-3 mx-36">
                    <button
                        onClick={() => setRankingTitle("test1")}
                        className={rankingTitle == "test1" ? "border-b-2" : ""}
                    >
                        test1
                    </button>
                    <button
                        onClick={() => setRankingTitle("test2")}
                        className={rankingTitle == "test2" ? "border-b-2" : ""}
                    >
                        test2
                    </button>
                    <button
                        onClick={() => setRankingTitle("test3")}
                        className={rankingTitle == "test3" ? "border-b-2" : ""}
                    >
                        test3
                    </button>
                </div>
                <ul className="justify-center mx-auto w-64">
                    {userDatas.map((user, index) => (
                        <div className=" px-24 py-8 border border-black my-3 inline-block">
                            {user.userName}さん
                            {rankingTitle == "test1"
                                ? user.differenceCalorie
                                : rankingTitle == "test2"
                                ? user.sumCalorie
                                : rankingTitle == "test3"
                                ? user.differenceCalorie
                                : user.sumCalorie}
                            cal
                        </div>
                    ))}
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
}
