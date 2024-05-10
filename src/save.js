import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { selectedPostTitle, selectedPostPermalink } = attributes;

	return (
		<RichText.Content
			tagName="p"
			className="dmg-read-more"
			value={
				selectedPostTitle
					? `${__(
							"Read More",
							"dmg-read-more",
					  )}: <a href="${selectedPostPermalink}">${selectedPostTitle}</a>`
					: ""
			}
		/>
	);
};

export default Save;
