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

document.addEventListener('DOMContentLoaded', function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);

        const shareUrls = {
            whatsapp: `https://api.whatsapp.com/send?text=${title}%0A%20${url}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}%0A${url}`
        };

        const shareButtons = {
            whatsapp: document.querySelector('.share-whatsapp'),
            linkedin: document.querySelector('.share-linkedin'),
            facebook: document.querySelector('.share-facebook'),
            twitter: document.querySelector('.share-twitter'),
            copyLink: document.querySelector('.copy-link')
        };

        if (shareButtons.whatsapp) shareButtons.whatsapp.href = shareUrls.whatsapp;
        if (shareButtons.linkedin) shareButtons.linkedin.href = shareUrls.linkedin;
        if (shareButtons.facebook) shareButtons.facebook.href = shareUrls.facebook;
        if (shareButtons.twitter) shareButtons.twitter.href = shareUrls.twitter;

        if (shareButtons.copyLink) {
            shareButtons.copyLink.addEventListener('click', function(event) {
                event.preventDefault();
                navigator.clipboard.writeText(decodeURIComponent(url)).then(() => {
                    alert('Link copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        }
    });
