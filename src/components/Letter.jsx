import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import Petals from "./Petals";

const LETTER_BODY = `

If you're reading this...

thank you.

There has been something
I've wanted to tell you
for quite some time.

Every time I thought
about saying it...

I somehow convinced myself,

"Maybe another day."

But another day
kept becoming tomorrow.

So...

instead of waiting
for the perfect moment...

I decided to make one.

This little letter.

Maybe this surprises you.

Maybe you'll smile.

Maybe you'll wonder
why I chose to do this
instead of simply saying it.

The truth is...

every time I wanted to tell you,

I lost my courage.

So I thought,

if I couldn't say it properly,

maybe I could write it.

Some people
enter our lives quietly...

and somehow become
far more important
than they could ever imagine.

That's what happened
with you.

Somewhere along the way...

without even realizing it...

I started looking forward
to seeing you.

Sometimes because
of a conversation.

Sometimes because
of your smile.

Sometimes...

simply because
you were there.

Those little moments...

probably meant
nothing special to you.

But...

they meant a lot to me.

━━━━━━━━━━━━━━━━━━━━━━

This is where
I'll write
everything
I've always wanted
to tell you.

The words
I never had
the courage
to say.

━━━━━━━━━━━━━━━━━━━━━━

Maybe after today
nothing changes.

Maybe everything changes.

Either way...

I'm happy

that I finally found
the courage
to be honest.

No matter
what your answer is...

thank you.

Thank you
for taking the time
to read every word.

It genuinely
means a lot to me.

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