import React, { Fragment } from "react";

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

	makeSectionList() {
		const sectionList = this.state.sectionList.map((section) => {
			return <li key={section.section_id}>{section.section_name}</li>;
		});
		return sectionList;
	}

	render() {
		return (
			<Fragment>
				<h1>Sections</h1>
				<ul>
					<li key="all">전체</li>
					{this.makeSectionList()}
				</ul>
			</Fragment>
		);
	}
}

export default Main;
