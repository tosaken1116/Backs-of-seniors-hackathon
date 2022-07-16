import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();
    return router.pathname != "/" ? (
        <div className="sticky bottom-0">
            <div className="grid grid-cols-3">
                <Link href="/InputCalorie">
                    <div className=" border border-black rounded px-6 mx-auto">
                        食事を記録
                    </div>
                </Link>
                <Link href="/ranking">
                    <div className=" border border-black rounded px-6 mx-auto">
                        ランキング
                    </div>
                </Link>
                <Link href="/calorieOfThisMonth">
                    <div className=" border border-black rounded px-6 mx-auto">
                        カロ草
                    </div>
                </Link>
            </div>
        </div>
    ) : (
        <></>
    );
}
