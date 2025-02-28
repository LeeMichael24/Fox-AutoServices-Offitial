document.addEventListener("DOMContentLoaded", function () {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        Object.assign(heart.style, {
            position: "fixed",
            left: Math.random() * innerWidth + "px",
            top: "-10px",
            fontSize: Math.random() * 20 + 20 + "px",
            opacity: Math.random() * 0.8 + 0.2,
            transition: "all 4s linear",
            zIndex: "9999"
        });
        document.body.appendChild(heart);
        setTimeout(() => heart.style.transform = "translateY(" + innerHeight + "px)", 50);
        setTimeout(() => heart.remove(), 4000);
    }, 300);
});
