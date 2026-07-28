import { useState } from "react";

import Intro from "./components/Intro";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import Final from "./components/Final";

export default function App() {

    const [stage, setStage] = useState(0);

    return (

        <div className="w-screen min-h-screen overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50">

            {stage === 0 && (

                <Intro

                    next={() => setStage(1)}

                />

            )}

            {stage === 1 && (

                <Envelope

                    next={() => setStage(2)}

                />

            )}

            {stage === 2 && (

                <Letter

                    next={() => setStage(3)}

                />

            )}

            {stage === 3 && (

                <Final

                    restart={() => setStage(0)}

                />

            )}

        </div>

    );

}