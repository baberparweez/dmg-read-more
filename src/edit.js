// Import necessary dependencies
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { useState, useEffect } from "@wordpress/element";
import {
	InspectorControls,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	// Get block properties and add custom class name
	const blockProps = useBlockProps({
		className: "dmg-read-more-block",
	});

	// Destructure selectedPostId from block attributes
	const { selectedPostId } = attributes;

	// Initialize state variables
	const [searchTerm, setSearchTerm] = useState("");
	const [page, setPage] = useState(1);
	const perPage = 5;

	// Fetch posts using useSelect based on search term and page number
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

	// Fetch selected post using useSelect based on selectedPostId
	const selectedPost = useSelect(
		(select) => {
			if (selectedPostId) {
				return select("core").getEntityRecord(
					"postType",
					"post",
					selectedPostId,
				);
			}
			return null;
		},
		[selectedPostId],
	);

	// Handler for selecting a post
	const onSelectPost = (post) => {
		setAttributes({
			selectedPostId: post.id,
		});
	};

	// Update block attributes when selectedPost changes
	useEffect(() => {
		if (selectedPost) {
			setAttributes({
				selectedPostTitle: selectedPost.title.rendered,
				selectedPostPermalink: selectedPost.link,
			});
		}
	}, [selectedPost]);

	return (
		<div {...blockProps}>
			{/* Render inspector controls */}
			<InspectorControls>
				<PanelBody title={__("Post Selection", "dmg-read-more")}>
					{/* Search input */}
					<TextControl
						label={__("Search Posts", "dmg-read-more")}
						value={searchTerm}
						onChange={(value) => setSearchTerm(value)}
					/>
					{/* Render post buttons */}
					{posts &&
						posts.map((post) => (
							<Button key={post.id} onClick={() => onSelectPost(post)}>
								{post.title.rendered}
							</Button>
						))}
					{/* Pagination buttons */}
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
			{/* Render selected post link */}
			<RichText
				tagName="p"
				className="dmg-read-more"
				value={
					selectedPost
						? `${__("Read More", "dmg-read-more")}: <a href="${
								selectedPost.link
						  }">${selectedPost.title.rendered}</a>`
						: ""
				}
				onChange={() => {}}
			/>
		</div>
	);
};

export default Edit;
