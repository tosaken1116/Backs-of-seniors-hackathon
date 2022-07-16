import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();
    return router.pathname != "/" ? (
        <div className="sticky bottom-0 bg-pink-200 border-pink-300 drop-shadow-xl border-4 rounded-full h-20">
            <div className="grid grid-cols-3 mt-4">
                <Link href="/inputCalorie">
                    <div
                        className={
                            " border-4 border-orange-300 -mt-2 rounded-full text-center drop-shadow-xl w-28 py-3 text-lg px-2 mx-auto " +
                            (router.pathname == "/inputCalorie"
                                ? "bg-green-300"
                                : "bg-orange-200")
                        }
                    >
                        食事を記録
                    </div>
                </Link>
                <Link href="/ranking">
                    <div
                        className={
                            " border-4 border-orange-300 -mt-2 rounded-full text-center drop-shadow-xl w-28 py-3 text-lg px-2 mx-auto " +
                            (router.pathname == "/ranking"
                                ? "bg-green-300"
                                : "bg-orange-200")
                        }
                    >
                        ランキング
                    </div>
                </Link>
                <Link href="/calorieOfThisMonth">
                    <div
                        className={
                            " border-4 border-orange-300 -mt-2 rounded-full text-center drop-shadow-xl w-28 py-3 text-lg px-2 mx-auto " +
                            (router.pathname == "/calorieOfThisMonth"
                                ? "bg-green-300"
                                : "bg-orange-200")
                        }
                    >
                        カロ草
                    </div>
                </Link>
            </div>
        </div>
    ) : (
        <></>
    );
}
