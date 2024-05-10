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
		className: "dmg-read-more-block",
	});
	const { selectedPostId, selectedPostTitle, selectedPostPermalink } =
		attributes;
	const [searchTerm, setSearchTerm] = useState("");
	const [page, setPage] = useState(1);
	const perPage = 5;

	const posts = useSelect(
		(select) => {
			return select("core").getEntityRecords("postType", "post", {
				per_page: perPage,
				page: page,
				search: searchTerm,
			});
		},
		[searchTerm, page],
	);

	// Check if selectedPostId is null and set it to the latest post
	if (selectedPostId === undefined && posts && posts.length > 0) {
		const latestPost = posts[0];
		setAttributes({
			selectedPostId: latestPost.id,
			selectedPostTitle: latestPost.title.rendered,
			selectedPostPermalink: latestPost.link,
		});
	}

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
					<div className="dmg-read-more-block__pagination">
						<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
							{__("<", "dmg-read-more")}
						</Button>
						<Button onClick={() => setPage(page + 1)}>
							{__(">", "dmg-read-more")}
						</Button>
					</div>
				</PanelBody>
			</InspectorControls>
			<RichText
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
				onChange={() => {}}
			/>
		</div>
	);
};

export default Edit;
