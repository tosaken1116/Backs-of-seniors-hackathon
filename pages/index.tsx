import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
export default function TopPage() {
    const customStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0.3)",
        },

        content: {
            top: "50%",
            left: "50%",
            right: "50%",
            bottom: "50%",
            marginRight: "-50%",
            width: "500px",
            height: "300px",
            transform: "translate(-50%,-50%)",
        },
    };
    const { data: session } = useSession();
    console.log(session);
    const router = useRouter();
    const [modalIsopen, setIsOpen] = useState(false);
    const [modalElemntName, setModalName] = useState("");

    const openModal = (outputModal: string) => {
        setIsOpen(true);
        setModalName(outputModal);
    };

    const afterOpenModal = () => {};
    const closeModal = () => {
        setIsOpen(false);
    };
    const isShow = true;
    if (typeof window !== "undefined" && session !== null) {
        router.replace("/InputCalorie");
    } else {
        return (
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen">
                    <Header></Header>
                    <Modal
                        isOpen={modalIsopen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                    >
                        {modalElemntName == "SI" && <SignInModal></SignInModal>}
                        {modalElemntName == "SU" && <SignUpModal></SignUpModal>}
                    </Modal>
                    <div className="flex-grow">
                        <div className="justify-center text-2xl text-center mt-36">
                            アプリ名を入力
                        </div>
                        <div className="flex mt-64 justify-center px-auto">
                            <div className="border mx-auto rounded-xl text-center border-black px-12 py-6 text-2xl">
                                Sign In
                            </div>
                            <div className="border mx-auto rounded-xl text-center border-black px-12 py-6 text-2xl">
                                Sign Up
                            </div>
                        </div>
                        {session === null ? (
                            <div className="mt-12 flex justify-center mx-auto px-auto">
                                <button
                                    onClick={() => signIn()}
                                    className=" border mx-auto rounded-xl text-center border-black px-12 py-6 text-2xl"
                                >
                                    他のアカウントでログイン
                                </button>
                            </div>
                        ) : null}
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
