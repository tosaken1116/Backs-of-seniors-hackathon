import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();
    return router.pathname != "/" ? (
        <div className="sticky bottom-0 bg-gradient-to-b pb-4 border-fuchsia-200 from-fuchsia-200 via-pink-200 to-white drop-shadow-xl border-4 rounded-full h-20">
            <div className="grid grid-cols-3 mt-4">
                <Link href="/inputCalorie">
                    <div
                        className={
                            " border-4  -mt-2 rounded-full text-center drop-shadow-xl w-28 py-3 text-lg px-2 mx-auto " +
                            (router.pathname == "/inputCalorie"
                                ? "border-green-300 bg-gradient-to-b from-lime-100 via-lime-200 to-lime-500"
                                : "border-orange-300 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400")
                        }
                    >
                        食事を記録
                    </div>
                </Link>
                <Link href="/ranking">
                    <div
                        className={
                            " border-4  -mt-2 rounded-full text-center drop-shadow-xl w-28 py-3 text-lg px-2 mx-auto " +
                            (router.pathname == "/ranking"
                                ? "border-green-300 bg-gradient-to-b from-lime-100 via-lime-200 to-lime-500"
                                : "border-orange-300 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400")
                        }
                    >
                        ランキング
                    </div>
                </Link>
                <Link href="/calorieOfThisMonth">
                    <div
                        className={
                            " border-4  -mt-2 rounded-full text-center drop-shadow-xl w-28 py-3 text-lg px-2 mx-auto " +
                            (router.pathname == "/calorieOfThisMonth"
                                ? "border-green-300 bg-gradient-to-b from-lime-100 via-lime-200 to-lime-500"
                                : "border-orange-300 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400")
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
