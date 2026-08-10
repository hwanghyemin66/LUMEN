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
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 4,
    mousewheel: true,
    watchSlidesProgress: true,

    on: {
        slideChangeTransitionEnd: function (swiper) {
            mainSwiper.slideToLoop(swiper.realIndex, 400);
        }
    }
});

// 2. 왼쪽 메인 Swiper
const mainSwiper = new Swiper(".care_swiper", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: true,
    loopedSlides: 4,
    allowTouchMove: false,
    // thumbs: { swiper: thumbSwiper }  ← 이 줄 완전히 삭제!
});

//모바일 케어
const care3Swiper = new Swiper('.care3_swiper', {
    pagination: {
        el: '.mobile_care_pg',
    },
});

//모바일 프로그램
const mobileProgramSwiper = new Swiper('.mobile_program_swiper', {
    pagination: {
        el: '.mobile_program_pg',
    },
});

// 의료기기 스와이퍼
var swiper = new Swiper('.eq_swiper', {
    slidesPerView: 1.5, // 기본값 (가장 작은 모바일 기기)
    spaceBetween: 15,   // 모바일 여백
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    pagination: {
        el: '.eq_pg',
        clickable: true,
    },
    // 화면 너비에 따른 반응형 설정
    breakpoints: {
        // 화면 너비 >= 480px (큰 모바일 / 태블릿)
        480: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        // 화면 너비 >= 768px (태블릿)
        768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        // 화면 너비 >= 1024px (작은 모니터)
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        // 화면 너비 >= 1400px (데스크톱 - PC)
        1400: {
            slidesPerView: 6.2,
            spaceBetween: 25,
        }
    }
});

//의료진소개-태블릿 버튼
document.addEventListener('click', (e) => {
    const cards = document.querySelectorAll('.doctor_left, .doctor_right');
    const clickedCard = e.target.closest('.doctor_left, .doctor_right');

    cards.forEach(card => {
        if (card === clickedCard) {
            card.classList.toggle('active');
        } else {
            card.classList.remove('active');
        }
    });
});

//둘러보기 스와이퍼
var swiper = new Swiper('.place_swiper', {
    pagination: {
        el: '.place_pg',
    },
});

// 예약 버튼들을 한번에 선택 (.reservation-btn, .header_reservation_btn)
const reservationBtns = document.querySelectorAll(".reservation-btn, .header_reservation_btn");
const reservationModal = document.querySelector(".reservation-modal");
const reservationClose = document.querySelector(".reservation-modal__close");
const reservationForm = document.querySelector(".reservation-form");


// 모든 예약 버튼에 열기 이벤트 등록
reservationBtns.forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        reservationModal.classList.add("is-open");
    });
});


// 예약 팝업 닫기
reservationClose.addEventListener("click", function () {
    reservationModal.classList.remove("is-open");
});


// 팝업 바깥쪽 클릭하면 닫기
reservationModal.addEventListener("click", function (event) {
    if (event.target === reservationModal) {
        reservationModal.classList.remove("is-open");
    }
});


// 예약하기
reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("예약 신청이 완료되었습니다.");

    reservationModal.classList.remove("is-open");
    reservationForm.reset();
});