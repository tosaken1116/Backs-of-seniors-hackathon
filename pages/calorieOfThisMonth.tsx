import Link from "next/link";
import axios from "axios";
import CalorieOfKUSA from "./components/calorieKUSA";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function CalorieOfThisMonth() {
    const BaseURL = "";

    const testKUSAdata = [
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
    const thisMonth = "１月";
    let caloriteTextString = "";
    testKUSAdata.forEach((data, index) => {
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
                <div className="text-center text-4xl font-black mt-4 box-content h-10 w-50 px-auto py-2 bg-gradient-to-r from-white via-pink-200 to-white">
                    カロリー日記[{thisMonth}]
                </div>
                <div className="  grid grid-cols-7 grid-rows-5 w-72 mt-12 mx-auto">
                    {testKUSAdata.map((calorieOfDay, index) => (
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
