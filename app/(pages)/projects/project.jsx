"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsLink } from "react-icons/bs";

export default function Project({ id, title, description, tags, url, imageUrl }) {

	return (
		<motion.div className="group max-w-none lg:max-w-[80%] xl:max-w-[90%] mb-3 sm:mb-8 last:mb-0"
			key={id}
			variants={{
				hidden: { y: 20, opacity: 0 },
				visible: { y: 0, opacity: 1 }
			}}>
			<section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-auto lg:h-[20rem]  hover:bg-gray-200">
				<div className="pt-4 pb-6 px-5 sm:pl-8 sm:pr-2 sm:pt-8 md:max-w-[60%] xl:max-w-[50%] flex flex-col h-full">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 mb-3 md:mb-0 leading-relaxed text-gray-700">{description}</p>
					<ul className="flex flex-wrap gap-2 md:mt-auto">
						{tags.map((tag, index) => (
							<li className="text-white bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide rounded-full" key={index}>{tag}</li>
						))}
					</ul>
				</div>
				<a href={url} target="_blank">
					<Image
						src={imageUrl}
						alt={title}
						quality={95}
						className="hidden md:block absolute top-20 lg:top-10 -right-20 lg:-right-40 xl:-right-20 w-[20rem] lg:w-[28.25rem] rounded-t-lg shadow-2xl transition 
							group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2"
					/>
					<span className="md:hidden px-5 pb-5 flex gap-2 items-center underline"><BsLink />See proyect</span>
				</a>
			</section>
		</motion.div>
	)
}