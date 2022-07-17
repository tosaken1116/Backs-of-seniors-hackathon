import Link from "next/link";
import CalorieOfKUSA from "./components/calorieKUSA";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function CalorieOfThisMonth() {
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
            calorie: 700,
        },
        {
            date: 10,
            calorie: 500,
        },
        {
            date: 11,
            calorie: 100,
        },
        {
            date: 12,
            calorie: 200,
        },
        {
            date: 13,
            calorie: 300,
        },
        {
            date: 14,
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
                <div className="text-center text-4xl font-mono font-black mt-4">
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
                <div className="font-mono shadow-xl justify-center mx-auto rounded-xl w-80 mt-12 box-border p-4 border-2 box-decoration-slice bg-amber-100">
                    <div>
                        <div className="inline border-b-2 border-dashed">
                            平均１日摂取カロリー:
                        </div>
                        <div className="inline text-xl">{calorieAverage}</div>
                        <div className="inline">cal</div>
                    </div>
                    <div>
                        <div className="inline border-b-2 border-dashed">
                            合計摂取カロリー:
                        </div>
                        <div className="inline text-xl">{calorieSum}</div>
                        <div className="inline">cal</div>
                    </div>

                    {/* <iframe onClick={() => openTwitter()} title="tweet"src="https://platform.twitter.com/widgets/tweet_button.f39f39d5e1aec76c12af50a9a19e4fee.en.html#dnt=false&id=twitter-widget-0&lang=en&original_referer=http%3A%2F%2Flocalhost%3A3000%2FcalorieOfThisMonth&size=m&text=%E5%B9%B3%E5%9D%87%EF%BC%91%E6%97%A5%E6%91%82%E5%8F%96%E3%82%AB%E3%83%AD%E3%83%AA%E3%83%BC%3A100cal%0D%0A%E5%90%88%E8%A8%88%E6%91%82%E5%8F%96%E3%82%AB%E3%83%AD%E3%83%AA%E3%83%BC%3A20000cal%0D%0A&time=1657935435852&type=share&url=http%3A%2F%2Flocalhost%3A3000%2FcalorieOfThisMonth">
                Tweet
            </iframe>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
                    <div className="flex mx-auto bg-gradient-to-t justify-center from-orange-400 to-orange-200  border-orange-500 text-green-700 shadow-xl border-2 w-36 text-center rounded-full px-2">
                        <Link
                            href={tweetText}
                            className=" border-2 border-black"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            みんなに見せる
                        </Link>
                    </div>

                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    ></script>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
