import { motion } from "framer-motion";
import { useState } from "react";

import envelope from "../assets/envelope.png";
import music from "../assets/music.mp3";

export default function Envelope({ next }) {

    const [opening, setOpening] = useState(false);

    const handleOpen = () => {

        if (!window.bgMusic) {

            window.bgMusic = new Audio(music);
            window.bgMusic.loop = true;
            window.bgMusic.volume = 0.35;

        }

        window.bgMusic.play();

        setOpening(true);

        setTimeout(() => {

            next();

        }, 900);

    };

    return (

        <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50">

            <motion.div

                className="absolute w-[420px] h-[420px] rounded-full bg-pink-300/30 blur-[140px]"

                animate={{

                    scale:[1,1.12,1],

                    opacity:[0.25,0.45,0.25]

                }}

                transition={{

                    duration:5,

                    repeat:Infinity,

                    ease:"easeInOut"

                }}

            />

            <motion.div

                onClick={handleOpen}

                className="relative z-20 cursor-pointer"

                initial={{

                    opacity:0,

                    y:60,

                    scale:.85

                }}

                animate={

                    opening

                    ? {

                        scale:[1,0.94,1.08,1.22],

                        rotate:[0,-3,3,0],

                        y:[0,12,-18,-160],

                        opacity:[1,1,.9,0]

                    }

                    : {

                        opacity:1,

                        scale:1,

                        y:[0,-10,0],

                        rotate:[0,-1,1,0]

                    }

                }

                transition={

                    opening

                    ? {

                        duration:.9,

                        ease:"easeInOut"

                    }

                    : {

                        duration:3.5,

                        repeat:Infinity,

                        ease:"easeInOut"

                    }

                }

                whileHover={{

                    scale:1.03,

                    rotate:-2

                }}

                whileTap={{

                    scale:.96

                }}

            >

                <img

                    src={envelope}

                    alt="Envelope"

                    draggable={false}

                    className="

                    w-[90vw]

                    max-w-md

                    select-none

                    drop-shadow-[0_18px_35px_rgba(0,0,0,.18)]

                    "

                />

            </motion.div>

            <motion.div

                initial={{

                    opacity:0,

                    y:20

                }}

                animate={{

                    opacity:1,

                    y:0

                }}

                transition={{

                    delay:.5,

                    duration:1

                }}

                className="absolute bottom-16 md:bottom-20 text-center px-6"

            >

                <h2

                    className="text-5xl md:text-6xl text-rose-600"

                    style={{

                        fontFamily:"Great Vibes"

                    }}

                >

                    Your letter is waiting...

                </h2>

                <motion.p

                    animate={{

                        opacity:[0.4,1,0.4]

                    }}

                    transition={{

                        duration:2,

                        repeat:Infinity

                    }}

                    className="mt-5 text-rose-400 uppercase tracking-[0.35em] text-sm md:text-base"

                    style={{

                        fontFamily:"Cormorant Garamond"

                    }}

                >

                    Tap the envelope

                </motion.p>

            </motion.div>

        </div>

    );

}