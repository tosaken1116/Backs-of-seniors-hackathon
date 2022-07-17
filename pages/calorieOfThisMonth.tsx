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
            calorie: 100,
        },
        {
            date: 2,
            calorie: 100,
        },
        {
            date: 3,
            calorie: 100,
        },
        {
            date: 4,
            calorie: 100,
        },
        {
            date: 5,
            calorie: 100,
        },
        {
            date: 6,
            calorie: 100,
        },
        {
            date: 7,
            calorie: 100,
        },
        {
            date: 8,
            calorie: 100,
        },
        {
            date: 9,
            calorie: 100,
        },
        {
            date: 10,
            calorie: 100,
        },
        {
            date: 11,
            calorie: 100,
        },
        {
            date: 12,
            calorie: 100,
        },
    ];

    const calorieAverage = 100;
    const calorieSum = 20000;

    const datetime = new Date();
    const [KUSAdata, setKUSAdata] = useState([]);

    const generateKUSAArray = () => {
        datetime.setDate(1);
        const dateIndex = datetime.getDay();
        let testKUSAdata = [];

        for (let i: number; i < dateIndex; i++) {
            testKUSAdata.push({
                date: 0,
                calorie: -1,
            });
            console.log("======");
        }
        testKUSAdata.concat(initialKUSA);
        console.log(testKUSAdata);
        return testKUSAdata;
    };

    useEffect(() => {
        setKUSAdata(generateKUSAArray()), [];
    });
    const thisMonth = datetime.getMonth() + 1;
    let caloriteTextString = "";
    KUSAdata.forEach((data, index) => {
        if (index % 7 === 0) {
            caloriteTextString += "%0D%0A";
        }

        caloriteTextString +=
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
    const tweetText =
        "https://twitter.com/share?text=" +
        caloriteTextString +
        "%0D%0A" +
        "平均１日摂取カロリー:" +
        calorieAverage +
        "cal" +
        "%0D%0A" +
        "合計摂取カロリー:" +
        calorieSum +
        "cal" +
        "%0D%0A";
    const openTwitter = () => {
        window.open(
            tweetText,
            "twitter",
            "top=200,left=300,width=600,height=400"
        );
    };
    type rankingUser = {
        userName: string;
        calorie: number;
    };
    type ranking = {
        users: rankingUser[];
    };
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
                <div className=" justify-center mx-auto w-72 mt-12">
                    <div>平均１日摂取カロリー:{calorieAverage}cal</div>
                    <div>
                        <div>合計摂取カロリー:{calorieSum}cal</div>
                        <Link
                            href={tweetText}
                            className="twitter-share-button"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            Tweet
                        </Link>
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
