import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function Header() {
    const router = useRouter();
    const testbool = router.pathname != "/";
    const goalUserCalories = 100;
    const { data: session } = useSession();
    console.log(session);
    return (
        <div className="bg-red-300 py-8 text-2xl sticky top-0">
            <div className=" text-3xl">アプリ名を入力</div>
            {testbool && (
                <div className="">目標カロリー摂取量{goalUserCalories}cal</div>
            )}
        </div>
    );
}
