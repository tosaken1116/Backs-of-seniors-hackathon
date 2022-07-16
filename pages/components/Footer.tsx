import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();
    return router.pathname != "/" ? (
        <div className="sticky bottom-0">
            <div className="grid grid-cols-3">
                <Link href="/InputCalorie">
                    <a className=" border border-black rounded px-6 mx-auto">
                        食事を記録
                    </a>
                </Link>
                <Link href="/ranking">
                    <a className=" border border-black rounded px-6 mx-auto">
                        ランキング
                    </a>
                </Link>
                <Link href="/calorieOfThisMonth">
                    <a className=" border border-black rounded px-6 mx-auto">
                        カロ草
                    </a>
                </Link>
            </div>
        </div>
    ) : (
        <></>
    );
}
