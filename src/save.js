import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { selectedPostId } = attributes;

	const blockProps = useBlockProps.save({
		className: "dmg-read-more-block",
		"data-post-id": selectedPostId,
	});

	return <div {...blockProps}></div>;
};

export default Save;
