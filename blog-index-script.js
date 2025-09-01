document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('blog-search');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post-card');
    const tagElements = document.querySelectorAll('.tag');

    // Function to filter and search posts
    const filterPosts = () => {
        const searchQuery = searchInput.value.toLowerCase();
        let activeCategory = document.querySelector('.category-btn.active').dataset.filter;
        
        blogPosts.forEach(post => {
            const postTitle = post.querySelector('h3').textContent.toLowerCase();
            const postCategory = post.querySelector('.category-tag').dataset.category;
            const isCategoryMatch = activeCategory === 'all' || postCategory === activeCategory;
            const isSearchMatch = postTitle.includes(searchQuery);

            if (isCategoryMatch && isSearchMatch) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    };

    // Event listener for search input
    searchInput.addEventListener('input', filterPosts);

    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            filterPosts();
        });
    });

    // Event listeners for tags (simulate filtering)
    tagElements.forEach(tag => {
        tag.addEventListener('click', (e) => {
            const tagName = e.target.dataset.tag;
            searchInput.value = tagName;
            filterPosts();
            alert(`Simulating filter by tag: "${tagName}"`);
        });
    });
});