"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
		<div
			className="w-full bg-background dark:bg-[#111] font-sans md:px-10 mt-72 md:mt-0"
			ref={containerRef}
		>
			<div ref={ref} className="relative max-w-7xl mx-auto pb-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-20 md:pt-40 md:gap-10"
					>
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
							<h3 className="hidden z-[2] md:block text-xl md:pl-20 md:text-5xl font-roboto font-extrabold text-black dark:text-white">
								{item.title}
							</h3>
						</div>

						<div className="relative pl-20 pt-12 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-semibold text-neutral-950 dark:text-black">
								{item.title}
							</h3>
							{item.content}
							{""}
						</div>
					</div>
				))}
				<div
					style={{
						height: "100%",
					}}
					className="absolute md:left-8 left-8
           top-0 overflow-hidden w-[2px] md:w-[200px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] md:w-[200px] bg-gradient-to-t from-red-500 via-purple-500 to-blue-500 from-[0%] via-[40%] rounded-full"
					/>
				</div>
			</div>
		</div>
  );
};
