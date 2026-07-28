import { motion } from "framer-motion";

import petal1 from "../assets/petal1.png";
import petal2 from "../assets/petal2.png";
import petal3 from "../assets/petal3.png";
import petal4 from "../assets/petal4.png";
import petal5 from "../assets/petal5.png";
import petal6 from "../assets/petal6.png";
import petal7 from "../assets/petal7.png";
import petal8 from "../assets/petal8.png";

const images = [

    petal1,
    petal2,
    petal3,
    petal4,
    petal5,
    petal6,
    petal7,
    petal8

];

const petals = Array.from({ length: 32 }, (_, i) => ({

    id:i,

    image:images[Math.floor(Math.random()*images.length)],

    left:Math.random()*100,

    start:-20-Math.random()*80,

    size:18+Math.random()*24,

    duration:12+Math.random()*8,

    delay:Math.random()*12,

    rotate:Math.random()*360,

    drift:(Math.random()-.5)*180

}));

export default function Petals(){

    return(

        <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">

            {

                petals.map((p)=>(

                    <motion.img

                        key={p.id}

                        src={p.image}

                        alt=""

                        draggable={false}

                        className="absolute select-none"

                        style={{

                            left:`${p.left}%`,

                            top:`${p.start}%`,

                            width:`${p.size}px`

                        }}

                        animate={{

                            y:["0vh","125vh"],

                            x:[

                                0,

                                p.drift*.4,

                                -p.drift,

                                p.drift*.5,

                                0

                            ],

                            rotate:[

                                p.rotate,

                                p.rotate+120,

                                p.rotate+240,

                                p.rotate+360

                            ],

                            opacity:[

                                0,

                                1,

                                1,

                                0

                            ]

                        }}

                        transition={{

                            duration:p.duration,

                            delay:p.delay,

                            repeat:Infinity,

                            ease:"linear"

                        }}

                    />

                ))

            }

        </div>

    )

}