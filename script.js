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
        var pages = ["gesture-particles/D.html", "gesture-particles/G.html", "gesture-particles/Z.html"];
        window.location.href = pages[Math.floor(Math.random() * pages.length)];
    };

    // 搜索过滤
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        var term = searchInput.value.toLowerCase().trim();
        document.querySelectorAll(".site-card").forEach(function(card) {
            var text = card.textContent.toLowerCase();
            card.style.display = text.includes(term) ? "" : "none";
        });
        // 隐藏没有匹配结果的分类
        document.querySelectorAll(".section").forEach(function(section) {
            var visibleCards = section.querySelectorAll('.site-card[style=""], .site-card:not([style])');
            var allCards = section.querySelectorAll(".site-card");
            var hasVisible = false;
            allCards.forEach(function(c) {
                if (c.style.display !== "none") hasVisible = true;
            });
            section.style.display = hasVisible ? "" : "none";
        });
    });

    // 随机推荐
    document.getElementById("randomBtn").addEventListener("click", function() {
        var cards = Array.from(document.querySelectorAll(".site-card")).filter(function(card) {
            return card.style.display !== "none";
        });
        if (cards.length > 0) {
            var random = cards[Math.floor(Math.random() * cards.length)];
            random.scrollIntoView({ behavior: "smooth" });
            random.style.transform = "scale(1.08)";
            setTimeout(function() { random.style.transform = ""; }, 600);
        }
    });
});
