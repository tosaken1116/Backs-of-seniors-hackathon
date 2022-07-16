import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();
    return router.pathname != "/" ? (
        <div className="sticky bottom-0">
            <div className="grid grid-cols-3">
                <link
                    className=" border border-black rounded px-6 mx-auto"
                    href="/InputCalorie"
                >
                    食事を記録
                </link>
                <link
                    className=" border border-black rounded px-6 mx-auto"
                    href="/"
                >
                    test
                </link>
                <link
                    className=" border border-black rounded px-6 mx-auto"
                    href="/calorieOfThisMonth"
                >
                    カロ草
                </link>
            </div>
        </div>
    ) : (
        <></>
    );
}
