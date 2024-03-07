// 初始化状态变量
var isLiked = false;
var isSaved = false;


// 关闭按钮的功能
document.getElementById('close-btn').addEventListener('click', function() {
    // 这里的代码可以根据您的需求进行调整：
    // 例如，隐藏整个容器
    document.querySelector('.container').style.display = 'none';
    // 或者如果在新窗口中打开，可以尝试关闭窗口
    // window.close();
});

// 喜欢按钮点击功能
document.querySelector('.like').addEventListener('click', function() {
    var likeCount = document.getElementById('like-count');
    var currentCount = parseInt(likeCount.textContent);

    if (!isLiked) {
        likeCount.textContent = currentCount + 1;
    } else {
        likeCount.textContent = currentCount - 1;
    }

    // 切换状态
    isLiked = !isLiked;
});

// 收藏按钮点击功能
document.querySelector('.save').addEventListener('click', function() {
    var saveCount = document.getElementById('save-count');
    var currentCount = parseInt(saveCount.textContent);

    if (!isSaved) {
        saveCount.textContent = currentCount + 1;
    } else {
        saveCount.textContent = currentCount - 1;
    }

    // 切换状态
    isSaved = !isSaved;
});


// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取模态框、按钮和计数器元素
    var modal = document.getElementById('myModal');
    var btn = document.querySelector('.comment-button');
    var span = document.getElementsByClassName('close')[0];
    var submitBtn = document.getElementById('submitComment');
    var commentCountEl = document.getElementById('comment-count');

    // 点击按钮打开模态框
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // 点击 <span> (x), 关闭模态框
    span.onclick = function() {
        modal.style.display = "none";
    }

    // 点击窗口外的区域也可以关闭模态框
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // 点击提交评论按钮
    submitBtn.onclick = function() {
        // 获取输入框中的内容
        var comment = document.getElementById('commentInput').value;
        if (comment.trim() !== "") {
            // 创建新评论的数据对象
            var newCommentData = {
                id: '新用户', // 实际项目中应替换为动态获取的用户ID
                text: comment,
                date: new Date().toISOString().slice(0, 10), // 使用当前日期
                avatar: '/path/to/default/avatar.jpg' // 默认头像路径或用户头像路径
            };

            // 创建新评论元素并添加到评论区
            document.querySelector('.comments-section').appendChild(createCommentElement(newCommentData));

            // 增加评论数
            commentCountEl.textContent = parseInt(commentCountEl.textContent, 10) + 1;

            // 清空输入框并关闭模态框
            document.getElementById('commentInput').value = '';
            modal.style.display = "none";
        }
    }
});

// 创建新评论DOM元素的函数
function createCommentElement(commentData) {
    var commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
        <img src="${commentData.avatar}" alt="评论者头像" class="avatar comment-avatar">
        <div class="comment-content">
            <span class="comment-id">评论者ID：${commentData.id}</span>
            <p class="comment-text">${commentData.text}</p>
            <span class="comment-date">评论日期:${commentData.date}</span>
        </div>
    `;
    return commentDiv;
}
