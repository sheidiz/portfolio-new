import MainContainer from "@/components/main-container";
import React from "react";
import { coursesData, formationData } from "@/lib/data";
import Timeline from "./timeline";

export default function Page() {
	return (
		<MainContainer>
			<div className="flex flex-col gap-10">
				<Timeline title="Formation" content={formationData} />
				<Timeline title="Courses" content={coursesData} />
			</div>
		</MainContainer>
	)
}
