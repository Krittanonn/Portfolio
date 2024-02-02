document.addEventListener("DOMContentLoaded", function() {
    var detailsButton = document.getElementById("detailsButton");

    var detailsSection = document.getElementById("details");

    detailsButton.addEventListener("click", function() {
        // คำนวณตำแหน่งเริ่มต้นและเริ่มการเลื่อน
        var start = window.pageYOffset;
        var end = detailsSection.offsetTop;

        // ทำการเลื่อนลงอย่างค่อยๆ
        animateScroll(start, end, 1000); //1000 คือ 1 วิ
    });
});

// ฟังก์ชันเลื่อนลง
function animateScroll(start, end, duration) {
    var startTime = null;

    function step(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        var progress = currentTime - startTime;
        var percentage = Math.min(progress / duration, 1);

        window.scrollTo(0, start + percentage * (end - start));

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

//flip รูป
// let isFlipped = false;

// function flipImage() {
//     const image = document.getElementById('profileImage');

//     if (isFlipped) {
//         // ถ้ารูปภาพถูก flip แล้ว กลับมาเป็นรูปเดิม
//         image.src = 'img/pf-01.jpg';
//     } else {
//         // ถ้ารูปภาพยังไม่ถูก flip ก็ flip รูป
//         image.src = 'img/pf-02.jpg'; // ใส่ที่อยากให้ flip มาที่นี่
//         image.classList.add('flipped');
//     }

//     // สลับสถานะ isFlipped
//     isFlipped = !isFlipped;
// }


// function autoFlipImage() {
//     const image = document.getElementById('profileImage');

//     if (isFlipped) {
//         image.src = 'img/pf-01.jpg';
//         image.classList.remove('flipped');
//     } else {
//         image.src = 'img/pf-02.jpg';
//         image.classList.add('flipped');
//     }

//     isFlipped = !isFlipped;
// }

// setInterval(autoFlipImage,3000);
