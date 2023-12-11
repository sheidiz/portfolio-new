import React from 'react'

export default function MainContainer({children}) {
	return (
		<main className="mt-20 md:mt-24 mb-5 mx-auto p-5 min-[320px]:w-11/12 sm:w-[60rem] bg-gray-100 rounded-lg">
			{children}
		</main>
	)
}
