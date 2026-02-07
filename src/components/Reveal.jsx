import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Reusable reveal animation wrapper
export const Reveal = ({ children, width = "100%", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} style={{ width, overflow: "visible" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 0.5,
                    delay: delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
