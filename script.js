function openUploadModal() {
    document.getElementById("uploadModal").style.display = "block";
}

function closeUploadModal() {
    document.getElementById("uploadModal").style.display = "none";
}

function uploadVideo() {
    const videoFile = document.getElementById("videoFile").files[0];
    const videoTitle = document.getElementById("videoTitle").value;

    if (videoFile && videoTitle) {
        const videoGrid = document.getElementById("videoGrid");

        const videoCard = document.createElement("div");
        videoCard.className = "video-card";

        const videoElement = document.createElement("video");
        videoElement.src = URL.createObjectURL(videoFile);
        videoElement.controls = true;

        const videoTitleElement = document.createElement("h3");
        videoTitleElement.textContent = videoTitle;

        const commentSection = document.createElement("div");
        commentSection.className = "comment-section";

        const commentTitle = document.createElement("h4");
        commentTitle.textContent = "Comments";

        const commentInput = document.createElement("div");
        commentInput.className = "comment-input";

        const commentTextInput = document.createElement("input");
        commentTextInput.type = "text";
        commentTextInput.placeholder = "Add a comment...";

        const commentButton = document.createElement("button");
        commentButton.textContent = "Comment";

        const commentList = document.createElement("div");
        commentList.className = "comment-list";

        commentButton.addEventListener("click", () => {
            const commentText = commentTextInput.value.trim();
            if (commentText) {
                const comment = document.createElement("div");
                comment.className = "comment";

                const commentParagraph = document.createElement("p");
                commentParagraph.textContent = commentText;

                comment.appendChild(commentParagraph);
                commentList.appendChild(comment);
                commentTextInput.value = "";
            }
        });

        commentInput.appendChild(commentTextInput);
        commentInput.appendChild(commentButton);
        commentSection.appendChild(commentTitle);
        commentSection.appendChild(commentInput);
        commentSection.appendChild(commentList);

        videoCard.appendChild(videoElement);
        videoCard.appendChild(videoTitleElement);
        videoCard.appendChild(commentSection);

        videoGrid.appendChild(videoCard);

        closeUploadModal();
    } else {
        alert("Please provide both a video file and a title.");
    }
}

function searchVideos() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const videos = document.getElementsByClassName("video-card");

    for (let video of videos) {
        const title = video.getElementsByTagName("h3")[0].textContent.toLowerCase();
        if (title.includes(searchInput)) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    }
}
