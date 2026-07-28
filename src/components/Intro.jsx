import { motion } from "framer-motion";
import seal from "../assets/seal_clean.png";

export default function Intro({ next }) {

    return (

        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_top,#FFE7F1_0%,#FFF8FC_50%,#FFFDF9_100%)]">

            <motion.div

                className="absolute w-[420px] h-[420px] rounded-full bg-pink-300/30 blur-[140px]"

                animate={{

                    scale:[1,1.12,1],

                    opacity:[0.25,0.45,0.25]

                }}

                transition={{

                    duration:4,

                    repeat:Infinity,

                    ease:"easeInOut"

                }}

            />

            <motion.button

                onClick={next}

                whileHover={{ scale:1.08 }}

                whileTap={{ scale:.92 }}

                className="relative z-20 bg-transparent border-0 outline-none p-0"

                style={{

                    background:"transparent",

                    boxShadow:"none"

                }}

            >

                <motion.img

                    src={seal}

                    alt="Seal"

                    draggable={false}

                    className="w-28 md:w-36 select-none"

                    animate={{

                        y:[0,-5,0],

                        rotate:[0,-2,2,0],

                        scale:[1,.98,1.05,1]

                    }}

                    transition={{

                        duration:3,

                        repeat:Infinity,

                        ease:"easeInOut"

                    }}

                    style={{

                        background:"transparent",

                        

                        filter:"drop-shadow(0 0 18px rgba(255,210,80,.55))"

                    }}

                />

            </motion.button>

            <motion.div

                className="absolute bottom-20 text-center px-6"

                initial={{ opacity:0,y:20 }}

                animate={{ opacity:1,y:0 }}

                transition={{ delay:.6,duration:1 }}

            >

                <h1

                    className="text-5xl md:text-6xl text-rose-600"

                    style={{ fontFamily:"Great Vibes" }}

                >

                    Someone left you a letter...

                </h1>

                <motion.p

                    className="mt-5 text-rose-400 uppercase tracking-[0.35em] text-sm md:text-base"

                    style={{ fontFamily:"Cormorant Garamond" }}

                    animate={{ opacity:[0.35,1,0.35] }}

                    transition={{ duration:2,repeat:Infinity }}

                >

                    Break the seal

                </motion.p>

            </motion.div>

        </div>

    );

}