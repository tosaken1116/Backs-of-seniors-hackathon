import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Image from "next/image";
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
            <Image
                src="/aHR0cDovL3BuZ2ltZy5jb20vdXBsb2Fkcy9jb25mZXR0aS9jb25mZXR0aV9QTkc4NzA0NS5wbmc=.png"
                className="-z-10"
                layout="fill"
            />
            <div className="flex-grow ">
                {/* <div className="absolute z-40 bg-gradient-to-t from-pink-300 via-pink-200 via-pink-100 via-pink-100 via-pink-50 via-pink-50 via-pink-50 via-pink-50 to-white"></div> */}

                <div className="grid grid-cols-3 mx-50 bg-emerald-300 shadow-lg shadow-emerald-300/50 py-1">
                    <button
                        onClick={() => setRankingTitle("test1")}
                        className={rankingTitle === "test1" ? "border-b-2" : ""}
                    >
                        test1
                    </button>
                    <button
                        onClick={() => setRankingTitle("test2")}
                        className={rankingTitle === "test2" ? "border-b-2" : ""}
                    >
                        test2
                    </button>
                    <button
                        onClick={() => setRankingTitle("test3")}
                        className={rankingTitle === "test3" ? "border-b-2" : ""}
                    >
                        test3
                    </button>
                </div>
                <div
                    className="bg-gradient-to-t <url->https://images.pngpngpng.com/aHR0cDovL3BuZ2ltZy5jb20vdXBsb2Fkcy9jb25mZXR0aS9jb25mZXR0aV9QTkc4NzA0NS5wbmc%3D.png</url->
                               "
                >
                    <ul className="justify-center mx-auto w-64 pt-6">
                        {userDatas.map((user, index) => (
                            <div className="text-2xl border-2 border-yellow-600 my-3 inline-block rounded-2xl bg-yellow-100 text-yellow-600 text-center font-semibold">
                                <div className="text-white box-decoration-clone rounded-t-xl bg-gradient-to-r from-pink-500 to-yellow-500 px-2">
                                    {index + 1}
                                </div>
                                <div className="px-20">
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
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
