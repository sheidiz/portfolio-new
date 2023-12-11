import MainContainer from "@/components/main-container";
import React from "react";
import { universityData } from "@/lib/data";
import Timeline from "./timeline";

export default function Page() {
	return (
		<MainContainer>
			<Timeline title="University" content={universityData} />

		</MainContainer>
	)
}
