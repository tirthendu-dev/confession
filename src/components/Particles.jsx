import { motion } from "framer-motion";

export default function Particles() {

    const particles = [...Array(25)];

    return (

        <>

            {particles.map((_, i) => (

                <motion.div

                    key={i}

                    className="absolute rounded-full bg-yellow-200"

                    style={{
                        width: Math.random() * 5 + 2,
                        height: Math.random() * 5 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}

                    animate={{
                        y: [-20, 20, -20],
                        opacity: [.2, 1, .2]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: Math.random() * 5 + 4,
                        delay: Math.random() * 3
                    }}

                />

            ))}

        </>

    );

}