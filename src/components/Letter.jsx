import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import Petals from "./Petals";

const LETTER_BODY = `

I’m not writing this to start a long debate, drag out a conversation, or make things heavy between us. But given everything we’ve shared and how close we’ve been, I’d rather just speak plainly than pretend I haven't noticed how much things have changed lately.
​It’s obvious the dynamic between us isn't what it used to be. The effort, the talks, and the open communication have noticeably shifted, and I’m not going to sit here and pretend that feeling distant doesn't hurt or throw me off. At the same time, I’m not going to force conversations, ask for explanations you don't want to give, or push for energy that isn't naturally there. Relationships and friendships evolve, and forcing something that feels one-sided never works out for anyone.
​I just wanted you to have this so you know where my head is at. There’s no bitterness or bad blood on my end, only genuine appreciation for all the great moments, deep conversations, and history we’ve built. I’ll always have love and respect for you, and I’ll always be in your corner cheering for you from afar.
​I'm stepping back to give us both the space to figure things out naturally. If you ever genuinely want to talk or reach out down the line, my door is open. But if not, I truly wish you nothing but the best. Take care of yourself.

— Tirthendu

`;

export default function Letter({ next }) {

    const [finished, setFinished] = useState(false);

    const paperRef = useRef(null);

    useEffect(() => {

    if (finished) return;

    const interval = setInterval(() => {

        if (paperRef.current) {

            paperRef.current.scrollTo({

                top: paperRef.current.scrollHeight,

                behavior: "smooth"

            });

        }

    }, 120);

    return () => clearInterval(interval);

}, [finished]);

    return (

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 flex items-center justify-center px-4 py-8">

            <Petals />

            <motion.div

                initial={{
                    opacity: 0,
                    y: 120,
                    scale: .95
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}

                transition={{
                    duration: 1
                }}

                ref={paperRef}

                className="

                relative
                z-20

                w-full
                max-w-3xl

                h-[88vh]

                overflow-y-auto

                rounded-[28px]

                bg-[#FFFDF8]

                border
                border-rose-200

                shadow-[0_30px_80px_rgba(180,120,150,.18)]

                px-6
                md:px-14

                py-10

                "

            >

                <p

                    className="

                    text-center

                    uppercase

                    tracking-[0.35em]

                    text-rose-400

                    text-xs

                    md:text-sm

                    "

                    style={{

                        fontFamily:"Cormorant Garamond"

                    }}

                >

                    A Letter For You

                </p>

                <motion.h1

                    initial={{opacity:0}}

                    animate={{opacity:1}}

                    transition={{delay:.5}}

                    className="

                    mt-8

                    mb-10

                    text-5xl

                    md:text-7xl

                    text-rose-600

                    "

                    style={{

                        fontFamily:"Great Vibes"

                    }}

                >

                    Dear Sushnata,

                </motion.h1>

                <div

                    className="

                    whitespace-pre-line

                    text-[20px]

                    md:text-[28px]

                    leading-9

                    md:leading-[2.6rem]

                    text-[#5A4747]

                    "

                    style={{

                        fontFamily:"Cormorant Garamond"

                    }}

                >

                    <TypeAnimation

                        sequence={[

                            LETTER_BODY,

                            () => setFinished(true)

                        ]}

                        speed={58}

                        cursor={true}

                    />

                </div>

                {

                    finished && (

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
                                duration:.8
                            }}

                            className="flex justify-center mt-14"

                        >

                            <motion.button

                                onClick={next}

                                whileHover={{

                                    scale:1.05

                                }}

                                whileTap={{

                                    scale:.95

                                }}

                                animate={{

                                    scale:[1,1.04,1]

                                }}

                                transition={{

                                    duration:2,

                                    repeat:Infinity

                                }}

                                className="

                                px-10

                                py-4

                                rounded-full

                                bg-gradient-to-r

                                from-rose-400

                                via-pink-400

                                to-rose-500

                                text-white

                                text-lg

                                font-semibold

                                shadow-xl

                                "

                            >

                                Turn the page →

                            </motion.button>

                        </motion.div>

                    )

                }

            </motion.div>

        </div>

    );

}