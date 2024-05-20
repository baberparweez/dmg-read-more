document.addEventListener("DOMContentLoaded", () => {
	const readMoreBlocks = document.querySelectorAll(".dmg-read-more-block");

	readMoreBlocks.forEach((block) => {
		// Get the post ID from the 'data-post-id' attribute
		const postId = block.dataset.postId;

		// Check if a post ID is available
		if (postId) {
			// Make a fetch request to the WordPress REST API to get the post data
			fetch(`/wp-json/wp/v2/posts/${postId}`)
				.then((response) => response.json())
				.then((post) => {
					// Update the block's HTML content with the fetched post data
					block.innerHTML = `
			  <p class="dmg-read-more">
				Read More: <a href="${post.link}">${post.title.rendered}</a>
			  </p>
			`;
				})
				.catch((error) => {
					console.error("Error fetching post data:", error);
				});
		}
	});
});
