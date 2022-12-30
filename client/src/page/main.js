import React from "react";

import SectionApi from "../api/section.api.js";

class Main extends React.Component {
	state = {
		sectionList: [],
	};
	async componentDidMount() {
		const sectionList = await SectionApi.getSectionList();
		this.setState({
			sectionList,
		});
	}

	render() {
		this.state.sectionList.forEach((v) => console.log(v));
		return <div>{String(this.state.sectionList)}</div>;
	}
}

export default Main;
