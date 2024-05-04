import { RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { selectedPostTitle, selectedPostPermalink } = attributes;

	return (
		<div className="post_search--container">
			<RichText.Content
				tagName="p"
				className="post_search--read_more"
				value={
					selectedPostTitle
						? `Read More: <a href="${selectedPostPermalink}">${selectedPostTitle}</a>`
						: ""
				}
			/>
		</div>
	);
};

export default Save;
