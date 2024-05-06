import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { useState } from "@wordpress/element";
import {
	InspectorControls,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps({
		className: "custom-block",
	});
	const { selectedPostId, selectedPostTitle, selectedPostPermalink } =
		attributes;
	const [searchTerm, setSearchTerm] = useState("");

	const posts = useSelect(
		(select) => {
			return select("core").getEntityRecords("postType", "post", {
				per_page: 10,
				search: searchTerm,
			});
		},
		[searchTerm],
	);

	const onSelectPost = (post) => {
		setAttributes({
			selectedPostId: post.id,
			selectedPostTitle: post.title.rendered,
			selectedPostPermalink: post.link,
		});
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Post Selection", "dmg-read-more")}>
					<TextControl
						label={__("Search Posts", "dmg-read-more")}
						value={searchTerm}
						onChange={(value) => setSearchTerm(value)}
					/>
					{posts &&
						posts.map((post) => (
							<Button key={post.id} onClick={() => onSelectPost(post)}>
								{post.title.rendered}
							</Button>
						))}
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="p"
				className="dmg-read-more"
				value={
					selectedPostTitle
						? `Read More: <a href="${selectedPostPermalink}">${selectedPostTitle}</a>`
						: ""
				}
				onChange={() => {}}
			/>
		</div>
	);
};

export default Edit;
