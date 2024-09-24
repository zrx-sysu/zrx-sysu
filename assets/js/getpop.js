// 获取图片和模态框容器
    var images = document.querySelectorAll(".image");
    var modalContainer = document.getElementById("modal-container");

    // 动态创建模态框
    images.forEach(function(img) {
        var modalId = img.getAttribute('data-modal');

        // 动态创建模态框结构
        var modalHTML = `
        <div id="modal${modalId}" class="modal">
            <div class="modal-content">
                <span class="close" data-modal-close="${modalId}">&times;</span>
                <div id="modal-custom-content-${modalId}"></div> <!-- 定制化内容容器 -->
            </div>
        </div>`;

        // 将模态框添加到模态框容器中
        modalContainer.innerHTML += modalHTML;

        // 添加图片点击事件，显示对应的模态框
        img.addEventListener("click", function() {
            var customContent = document.getElementById(`modal-content-${modalId}`).innerHTML;
            document.getElementById(`modal-custom-content-${modalId}`).innerHTML = customContent;
            document.getElementById(`modal${modalId}`).style.display = "block";
        });
    });

    // 添加关闭按钮功能
    document.querySelectorAll('.close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            var modalId = closeBtn.getAttribute('data-modal-close');
            document.getElementById(`modal${modalId}`).style.display = "none";
        });
    });

    // 点击模态框外部隐藏模态框
    window.onclick = function(event) {
        images.forEach(function(img) {
            var modalId = img.getAttribute('data-modal');
            var modal = document.getElementById(`modal${modalId}`);
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }