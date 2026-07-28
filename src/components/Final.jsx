import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import glitter from "../assets/glitter.png";
import Petals from "./Petals";

export default function Final({ restart }) {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            setShowButton(true);

        }, 4000);

        return () => clearTimeout(timer);

    }, []);

    const finish = () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "#FFFDFB";
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 1s ease";
        overlay.style.zIndex = "9999";

        document.body.appendChild(overlay);

        requestAnimationFrame(() => {

            overlay.style.opacity = "1";

        });

        if (window.bgMusic) {

            const audio = window.bgMusic;

            const fade = setInterval(() => {

                if (audio.volume > 0.02) {

                    audio.volume -= 0.02;

                } else {

                    clearInterval(fade);

                    audio.pause();

                    audio.currentTime = 0;

                    audio.volume = 0.35;

                }

            }, 45);

        }

        setTimeout(() => {

            document.body.removeChild(overlay);

            restart();

        }, 1100);

    };

    return (

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 flex flex-col justify-center items-center px-6">

            <img

                src={glitter}

                alt=""

                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"

            />

            <Petals />

            <motion.h1

                initial={{
                    opacity:0,
                    y:40,
                    scale:.9
                }}

                animate={{
                    opacity:1,
                    y:0,
                    scale:1
                }}

                transition={{
                    duration:1
                }}

                className="relative z-20 text-center text-6xl md:text-8xl text-rose-500"

                style={{
                    fontFamily:"Times New Roman",
                }}

            >

                A FINAL NOTE ❤️

            </motion.h1>

            <motion.p

                initial={{
                    opacity:0
                }}

                animate={{
                    opacity:1
                }}

                transition={{
                    delay:1.3,
                    duration:1
                }}

                className="

                relative

                z-20

                mt-12

                max-w-2xl

                text-center

                text-xl

                md:text-3xl

                text-[#6A4C57]

                leading-relaxed

                "

                style={{
                    fontFamily:"Cormorant Garamond"
                }}

            >
                Whatever you may think

                <br /><br />

                Thank you

                <br />

                for taking the time

                <br />

                to read my little letter.

                I just wanted to be upfront and clear about where I stand. 

                <br />

                No expectations, no pressure, just wishing you the absolute best.

            </motion.p>

            {

                showButton && (

                    <motion.button

                        onClick={finish}

                        initial={{

                            opacity:0,

                            y:25

                        }}

                        animate={{

                            opacity:1,

                            y:0,

                            scale:[1,1.04,1]

                        }}

                        transition={{

                            duration:2,

                            repeat:Infinity

                        }}

                        whileHover={{

                            scale:1.06

                        }}

                        whileTap={{

                            scale:.95

                        }}

                        className="

                        relative

                        z-20

                        mt-14

                        px-10

                        py-4

                        rounded-full

                        bg-gradient-to-r

                        from-rose-400

                        via-pink-500

                        to-rose-600

                        text-white

                        text-lg

                        font-semibold

                        shadow-xl

                        "

                    >

                        Thank You 🌸

                    </motion.button>

                )

            }

        </div>

    );

}