import PageTitle from "../Components/PageTitle";
import { motion } from "framer-motion";

const FORM_URL = "https://forms.gle/rKi8gFrBd8xwtB5T6";

export default function PitchProposal() {

    function goToForm() {
        window.open(FORM_URL, "_blank", "noopener,noreferrer");
    }

    return (
        <>
            <PageTitle title="PITCH PROPOSAL FORM" />

            <div className="my-14 flex justify-center px-2">
                <div className="border-2 border-border-light-yellow rounded-xl hover:shadow-medium-white
                    duration-150 delay-75 font-title-family flex flex-col items-center
                    px-5 py-4 w-[85vw]"
                >
                    <h2 className="text-2xl text-center font-semibold">Got an idea for a media project?</h2>
                    <hr className="border border-border-light-yellow w-full mt-2 mb-5" />

                    <p className="text-center text-lg">
                        Pitch proposals are submitted through our Google Form.
                        Click below and the form will open in a new tab.
                    </p>

                    <motion.button
                        className="rounded-full px-3 py-1 text-xl text-center bg-bg-dark-green mt-4
                        hover:scale-105 duration-150 delay-75"
                        transition={{ duration: 0.15, delay: 0.075 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={goToForm}
                    >
                        Go to Form
                    </motion.button>
                </div>
            </div>
        </>
    );
}
