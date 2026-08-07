const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

// 1. 햄버거 버튼 클릭 시 메뉴 토글
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // 버튼 클릭 시 document 클릭 이벤트로 전파되는 것 방지
    navUl.classList.toggle('active');
});

// 2. 문서 전체(바깥 영역) 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
    // 클릭된 요소가 navUl 내부나 햄버거 버튼이 아니라면 active 제거
    if (!navUl.contains(e.target) && !hamburger.contains(e.target)) {
        navUl.classList.remove('active');
    }
});


//위로가기 버튼 자연스럽게 올라가기
const topBtn = document.querySelector(".btn2");

topBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//케어 스와이퍼
// 1. 오른쪽 썸네일 Swiper
const thumbSwiper = new Swiper(".careThumb", {
    direction: "vertical",
    slidesPerView: "auto",      // 원본 컨텐츠 높이 유지
    centeredSlides: true,       // 1번 슬라이드를 '중앙'에 배치
    spaceBetween: 0,            // 이미지 사이 여백
    loop: true,                 // 무한 루프 활성화
    loopedSlides: 4,            // 슬라이드 전체 개수
    mousewheel: true,
    watchSlidesProgress: true,

    // ⭐ [핵심 추가] 클릭 시 클릭한 슬라이드를 세로 중앙으로 이동시킵니다.
    on: {
        click: function (swiper) {
            // clickedSlide가 존재하고, undefined가 아닐 때 동작
            if (swiper.clickedSlide) {
                // 클릭된 슬라이드의 realIndex(0, 1, 2, 3)를 구함
                const realIndex = swiper.clickedSlide.dataset.swiperSlideIndex;
                if (realIndex !== undefined) {
                    // 해당 index 위치를 중앙으로 부드럽게 이동 (400ms)
                    swiper.slideToLoop(parseInt(realIndex, 10), 400);
                }
            }
        }
    }
});

// 2. 왼쪽 메인 Swiper
const mainSwiper = new Swiper(".care_swiper", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    loop: true,                 // 메인 스와이퍼도 함께 loop 처리
    loopedSlides: 4,            // 썸네일과 동일한 개수로 지정
    allowTouchMove: false,      // 메인은 드래그 방지
    thumbs: {
        swiper: thumbSwiper
    }
});



//모바일 케어
var swiper = new Swiper('.care3_swiper', {
    pagination: {
        el: '.mobile_care_pg',
    },
});

//모바일 프로그램
var swiper = new Swiper('.mobile_program_swiper', {
    pagination: {
        el: '.mobile_program_pg',
    },
});