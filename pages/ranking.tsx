import axios from "axios";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
type userDataType = {
    userName: string;
    sumCalorie: number;
    differenceCalorie: number;
};

export default function Ranking() {
    const [rankingTitle, setRankingTitle] = useState("合計カロリー");
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
    const baseURL = "http://127.0.0.1:8000/";

    const getRanking = () => {
        axios
            .get<[]>(baseURL + "getCalorieRanking", {})
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    getRanking();
    return (
        <div className="flex flex-col h-screen">
            <Header></Header>
            {/* <Image
                src="/aHR0cDovL3BuZ2ltZy5jb20vdXBsb2Fkcy9jb25mZXR0aS9jb25mZXR0aV9QTkc4NzA0NS5wbmc=.png"
                className="-z-10"
                layout="fill"
            /> */}
            <div className="flex-grow ">
                {/* <div className="absolute z-40 bg-gradient-to-t from-pink-300 via-pink-200 via-pink-100 via-pink-100 via-pink-50 via-pink-50 via-pink-50 via-pink-50 to-white"></div> */}

                <div className="grid py-2 grid-cols-3 mx-50 mt-6 bg-emerald-300 shadow-lg shadow-emerald-300/50 py-1">
                    <button
                        onClick={() => setRankingTitle("合計カロリー")}
                        className={
                            rankingTitle === "合計カロリー" ? "border-b-2" : ""
                        }
                    >
                        合計カロリー
                    </button>
                    <button
                        onClick={() => setRankingTitle("誤差順")}
                        className={rankingTitle == "誤差順" ? "border-b-2" : ""}
                    >
                        誤差順
                    </button>
                    <button
                        onClick={() => setRankingTitle("かたより")}
                        className={
                            rankingTitle == "かたより" ? "border-b-2" : ""
                        }
                    >
                        かたより
                    </button>
                </div>
                <div
                    className="bg-gradient-to-t <url->https://images.pngpngpng.com/aHR0cDovL3BuZ2ltZy5jb20vdXBsb2Fkcy9jb25mZXR0aS9jb25mZXR0aV9QTkc4NzA0NS5wbmc%3D.png</url->
                               "
                >
                    <ul className="justify-center mx-auto w-64 pt-6">
                        {userDatas.map((user, index) => (
                            <div
                                key={index}
                                className="text-2xl border-2 border-yellow-600 my-3 inline-block rounded-2xl bg-yellow-100 text-yellow-600 text-center font-semibold"
                            >
                                <div className="text-white box-decoration-clone rounded-t-xl bg-gradient-to-r from-pink-500 to-yellow-500 px-2">
                                    {index + 1}
                                </div>
                                <div className="px-20">
                                    {user.userName}さん
                                    {rankingTitle == "合計カロリー"
                                        ? user.differenceCalorie
                                        : rankingTitle == "誤差順"
                                        ? user.sumCalorie
                                        : rankingTitle == "かたより"
                                        ? user.differenceCalorie
                                        : user.sumCalorie}
                                    cal
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
