import React from 'react'

export default function TimelineItem({ title, institution, description, icon, date }) {
	return (
		<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-indigo-800">
			<h3 className="text-xl font-semibold">{title}</h3>
			<h2 className='text-md font-medium'>{institution}</h2>
			<time className="mb-2 text-xs uppercase dark:text-gray-400 flex gap-1 items-center">{icon}{date}</time>
			{description.map(
				(item, index) => {
					return (
						<React.Fragment key={index}>
							<p><span className='font-semibold'>{item.title}{" "}</span>{item.skills}</p>
						</React.Fragment>
					)
				})
			}
		</div>
	)
}
