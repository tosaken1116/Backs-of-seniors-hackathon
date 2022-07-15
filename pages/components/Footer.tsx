import { useRouter } from "next/router"

export default function Footer(){
    const router =  useRouter()
    return(
        (router.pathname != '/')?
        <div className="sticky bottom-0">
            <div className="grid grid-cols-3">
                <a className=" border border-black rounded px-6 mx-auto" href='/'>
                    test
                </a>
                <a className=" border border-black rounded px-6 mx-auto" href='/'>
                    test
                </a>
                <a className=" border border-black rounded px-6 mx-auto" href='/'>
                    test
                </a>
            </div>
        </div>:
        <></>
    )
}