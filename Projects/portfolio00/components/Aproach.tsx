"use client";

import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { AnimatePresence, motion } from "framer-motion";

export function Aproach() {
    return (
        <section className='w-full py-20'>
            <h1 className='heading'>
                My <span className='text-red'>Aproach</span>
            </h1>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card
                    title="Planning and Strategy"
                    icon={<AceternityIcon order='Phase 1'/>}
                    description='Starting a new project by designing and planning every phase and architecture Starting a new project by designing and planning every phase and architecture Starting a new project by designing and planning every phase and architecture.'
                    >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                    />
                </Card>
                <Card
                    title="Implementing and construction"
                    icon={<AceternityIcon order='Phase 2' />}
                    description='Building models, configuring databases and start with the construction Building models, configuring databases and start with the construction Building models, configuring databases and start with the construction.'
                    >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [255, 0, 0],
                        ]}
                        dotSize={3}
                    />
                </Card>
                <Card
                    title="Deploying and testing"
                    icon={<AceternityIcon order='Phase 3' />}
                    description='Merging front and backend, testing and deploying to any website host Merging front and backend, testing and deploying to any website host Merging front and backend, testing and deploying to any website host.'
                    >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[[65, 105, 255]]}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
    title,
    icon,
    children,
    description,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
                    {title}
                </h2>
                <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={ {color: '#e4ecff'}}>
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                {order}
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
