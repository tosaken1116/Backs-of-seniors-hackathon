import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import CalorieOfKUSA from "./components/calorieKUSA";
import Footer from "./components/Footer";
import Header from "./components/Header";
type KUSAdata = {
    date: number;
    calorie: number;
};
export default function CalorieOfThisMonth() {
    const initialKUSA = [
        {
            date: 1,
            calorie: 1500,
        },
        {
            date: 2,
            calorie: 1700,
        },
        {
            date: 3,
            calorie: 1800,
        },
        {
            date: 4,
            calorie: 1300,
        },
        {
            date: 5,
            calorie: 1500,
        },
        {
            date: 6,
            calorie: 1300,
        },
        {
            date: 7,
            calorie: 50000,
        },
        {
            date: 8,
            calorie: 1700,
        },
        {
            date: 9,
            calorie: 1800,
        },
        {
            date: 10,
            calorie: 2000,
        },
        {
            date: 11,
            calorie: 2400,
        },
        {
            date: 12,
            calorie: 3000,
        },
        {
            date: 13,
            calorie: 2300,
        },
        {
            date: 14,
            calorie: 2300,
        },
        {
            date: 15,
            calorie: 1200,
        },
        {
            date: 16,
            calorie: 4300,
        },
        {
            date: 17,
            calorie: 2100,
        },
    ];
    const [calorieSum, setCalorieSum] = useState(42100);

    const [calorieAverage, setCalorieAverage] = useState(2400);
    const [KUSAdata, setKUSAdata] = useState([]);
    const [tweetText, settweetText] = useState("");
    const [thisMonth, setthisMonth] = useState("");
    const [caloKUSAText, setcaloKUSAText] = useState("");
    const generateTweetText = async () => {
        let caloryTextString = "";
        await KUSAdata.forEach((data, index) => {
            if (index % 7 === 0) {
                caloryTextString += "%0D%0A";
            }

            caloryTextString +=
                data.date == -1
                    ? "      "
                    : data.date == 0
                    ? "⬜️"
                    : data.date > calorieAverage + calorieAverage / 3
                    ? "🟥"
                    : data.date > calorieAverage
                    ? "🟧"
                    : data.date > calorieAverage - calorieAverage / 3
                    ? "🟨"
                    : "🟩";
        });
        console.log(caloryTextString);
        await setcaloKUSAText(caloryTextString);
    };
    const generateTweet = async () => {
        console.log(caloKUSAText);
        settweetText(
            "https://twitter.com/share?text=" +
                caloKUSAText +
                "%0D%0A" +
                "平均１日摂取カロリー:" +
                calorieAverage +
                "cal" +
                "%0D%0A" +
                "合計摂取カロリー:" +
                calorieSum +
                "cal" +
                "%0D%0A"
        );
        console.log(tweetText);
    };
    const test = async () => {
        const datetime = new Date();
        datetime.setDate(1);
        setthisMonth((datetime.getMonth() + 1).toString());
        const dateIndex = Number(datetime.getDay());
        const testKUSAdata = {
            calorie: -1,
            date: 0,
        };

        for (let i = 0; i < dateIndex; i++) {
            initialKUSA.unshift(testKUSAdata);
        }
        await setKUSAdata(initialKUSA);
        await generateTweetText();
        await generateTweet();
    };
    useEffect(() => {
        generateTweet();
    }, [caloKUSAText]);
    useEffect(() => {
        test();
    }, [tweetText]);
    // setKUSA();

    const BaseURL = "";
    const openTwitter = () => {
        window.open(
            tweetText,
            "twitter",
            "top=200,left=300,width=600,height=400"
        );
    };
    const getcalorieOfThisMonth = () => {
        axios
            .get<[]>(BaseURL)
            .then((res) => {
                setKUSAdata(res.data["detailOfDate"]);
                setCalorieAverage(res.data["calorieAverage"]);
                setCalorieSum(res.data["calorieSum"]);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    type rankingUser = {
        userName: string;
        calorie: number;
    };
    type ranking = {
        users: rankingUser[];
    };
    // getcalorieOfThisMonth();
    return (
        <div className="flex flex-col h-screen">
            <Header></Header>
            <div className="flex-grow">
                <div className="text-center text-4xl mt-4">
                    カロリー日記[{thisMonth}月]
                </div>
                <div className="  grid grid-cols-7 grid-rows-5 w-72 mt-12 mx-auto">
                    {KUSAdata.map((calorieOfDay, index) => (
                        <CalorieOfKUSA
                            key={index}
                            calorieOfDay={calorieOfDay.calorie}
                            calorieAverage={calorieAverage}
                            date={calorieOfDay.date}
                        ></CalorieOfKUSA>
                    ))}
                </div>
                <div className="box-border h-auto p-2 w-80 border-2 box-decoration-slice bg-amber-100 border-amber-200 mb-1 mx-auto">
                    <div className="index-0 text-center justify-center mx-auto ">
                        <div className="underline underline-offset-4 decoration-dashed decoration-green-300">
                            <div>平均１日摂取カロリー:{calorieAverage}cal</div>
                            <div>合計摂取カロリー:{calorieSum}cal</div>
                        </div>
                        <div
                            className="box-border py-1 px-auto mx-auto mt-2 w-40 border-2 border-orange-600 bg-orange-500 rounded-2xl
                        hover:bg-orange-600 hover:border-orange-700 active:orange-700 focus:outline-none focus:ring focus:ring-orange-300 text-white"
                        >
                            <Link
                                href={tweetText}
                                className="twitter-share-button"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                みんなに知らせる
                            </Link>
                        </div>
                        <script
                            async
                            src="https://platform.twitter.com/widgets.js"
                            charSet="utf-8"
                        ></script>
                        {/* <iframe onClick={() => openTwitter()} title="tweet"src="https://platform.twitter.com/widgets/tweet_button.f39f39d5e1aec76c12af50a9a19e4fee.en.html#dnt=false&id=twitter-widget-0&lang=en&original_referer=http%3A%2F%2Flocalhost%3A3000%2FcalorieOfThisMonth&size=m&text=%E5%B9%B3%E5%9D%87%EF%BC%91%E6%97%A5%E6%91%82%E5%8F%96%E3%82%AB%E3%83%AD%E3%83%AA%E3%83%BC%3A100cal%0D%0A%E5%90%88%E8%A8%88%E6%91%82%E5%8F%96%E3%82%AB%E3%83%AD%E3%83%AA%E3%83%BC%3A20000cal%0D%0A&time=1657935435852&type=share&url=http%3A%2F%2Flocalhost%3A3000%2FcalorieOfThisMonth">
                Tweet
            </iframe>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
