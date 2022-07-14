export default function Header(){
    const testbool = true
    const goalUserCalories =100
    return(
        <div className="bg-red-300 text-2xl sticky top-0">
            <div className=" text-3xl">
                アプリ名を入力
            </div>
            {testbool &&
                <div className="">
                    目標カロリー摂取量{goalUserCalories}cal
                </div>
            }
        </div>
    )
}