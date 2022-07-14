import Header from "./components/Header"
import Footer from "./components/Footer"
import { useRouter } from "next/router"
export default function TopPage(){
    return (
        <div className="flex flex-col h-screen">
            <Header></Header>
            <div className="flex-grow">
                <div className="justify-center text-2xl text-center mt-36">アプリ名を入力</div>
                <div className="flex mt-64 justify-center px-auto">
                    <div className="border mx-auto rounded-xl text-center border-black px-12 py-6 text-2xl">
                        Sign In
                    </div>
                    <div className="border mx-auto rounded-xl text-center border-black px-12 py-6 text-2xl">
                        Sign Up
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}