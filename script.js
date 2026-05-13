document.addEventListener("DOMContentLoaded", function() {
    var passwordModal = document.getElementById("passwordModal");
    var ageModal = document.getElementById("ageModal");
    passwordModal.style.display = "flex";

    var passwordInput = document.getElementById("passwordInput");
    var submitPassword = document.getElementById("submitPassword");

    function checkPassword() {
        var password = passwordInput.value;
        if (password === "zhangyuejin") {
            passwordModal.style.display = "none";
            ageModal.style.display = "flex";
            passwordInput.value = "";
        } else {
            alert("密码错误！");
            window.location.href = "https://www.baidu.com";
        }
    }

    submitPassword.onclick = checkPassword;

    passwordInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkPassword();
        }
    });

    document.getElementById("yesBtn").onclick = function() {
        ageModal.style.display = "none";
        document.getElementById("mainHeader").style.display = "block";
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("mainFooter").style.display = "block";
    };

    document.querySelectorAll(".site-card").forEach(function(card) {
        card.style.cursor = "pointer";
        card.addEventListener("click", function() {
            var link = card.querySelector("a");
            if (link) window.open(link.href, link.target || "_self");
        });
    });

    document.getElementById("noBtn").onclick = function() {
        alert("您未满18岁，无法访问本页面。");
        window.location.href = "https://www.baidu.com";
    };
});
