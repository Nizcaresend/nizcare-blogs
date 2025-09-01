document.addEventListener('DOMContentLoaded', () => {
    // A. Table of Contents Generator
    const mainArticle = document.querySelector('.main-article');
    const tocList = document.getElementById('toc-list');
    const headings = mainArticle.querySelectorAll('h2, h3');
    
    if (headings.length > 0) {
        headings.forEach((heading, index) => {
            const id = `section-${index}`;
            heading.setAttribute('id', id);
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = heading.textContent;
            
            if (heading.tagName.toLowerCase() === 'h3') {
                listItem.style.paddingLeft = '20px'; // Indent subheadings
            }
            
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });
    } else {
        const tocContainer = document.querySelector('.table-of-contents-container');
        if (tocContainer) {
            tocContainer.style.display = 'none'; // Hide TOC if no headings
        }
    }

    // B. Social Sharing Logic (simulated)
    const copyLinkBtn = document.querySelector('.copy-link');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    alert('Link copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        });
    }
});