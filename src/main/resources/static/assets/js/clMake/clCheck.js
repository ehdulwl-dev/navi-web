// Resume data
const resumeData = [
    {
        question: "본인을 한 문장으로 소개해주세요.",
        answer: "저는 다양한 산업에서 영업과 고객 관리 업무를 수행해 온 이정민입니다. 밝고 긍정적인 성격으로 사람을 대하는 일을 좋아하며, 항상 책임감 있는 자세로 임해왔습니다. BHC 통일대점에 지원하게 된 이유는, 외식 서비스 현장에서 활기차게 일하며 고객과 직접 소통할 수 있다는 점에 큰 매력을 느꼈기 때문입니다. 새로운 도전을 통해 더 많은 사람들과 소통하고, 매장 운영에 작은 힘이 되고 싶습니다."
    },
    {
        question: "직무 관련 강점에 대해 말씀해주세요.",
        answer: "오랜 기간 영업 및 유통 관련 업무를 해오며, 고객 응대와 일정 조율, 재고 관리 등 다양한 실무를 경험했습니다. 특히 물류회사에서 고객 주문 접수부터 출하 일정 조율까지 맡았던 경험은, 패스트푸드 매장에서의 오더 처리나 재료 준비에도 바로 적용될 수 있는 역량이라고 생각합니다. 또한 고객의 니즈를 파악하고 유연하게 대처하는 능력은, 서비스업에서 매우 중요한 강점이라 자부합니다."
    },
    {
        question: "협동심을 보여준 일화를 말씀해주세요.",
        answer: "전자부품 유통업체에 근무할 당시, 갑작스런 납기 변경 요청이 들어온 적이 있었습니다. 저는 거래처와 공장 사이의 의견을 조율하며 원만한 협의를 이끌어냈고, 결과적으로 납기일을 맞추며 고객사의 신뢰를 유지할 수 있었습니다. 이처럼 여러 사람과 협업하며 책임을 다하는 자세는, 앞으로 어떤 환경에서도 꾸준히 발휘할 수 있는 저의 자산입니다."
    }
];

// 남은 생성 횟수
let remainingGenerations = 3;

// DOM 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
});

// 이벤트 등록
function setupEventListeners() {
    const backArrow = document.querySelector('.back-arrow');
    if (backArrow) {
        backArrow.addEventListener('click', function () {
            console.log('Back button clicked');
            // 뒤로가기 로직
        });
    }

    const regenerateButton = document.querySelector('.regenerate-button');
    if (regenerateButton) {
        regenerateButton.addEventListener('click', handleRegenerate);
    }

    const confirmButton = document.querySelector('.confirm-button');
    if (confirmButton) {
        confirmButton.addEventListener('click', function () {
            console.log('Confirm button clicked');
            // 확인 로직
        });
    }
}

// 재생성 핸들러
function handleRegenerate() {
    if (remainingGenerations > 0) {
        remainingGenerations--;
        updateRemainingCount();

        // 자기소개서 콘텐츠 재생성 로직
        console.log('Regenerating resume content');
    } else {
        console.log('No more regenerations available');
        const regenerateButton = document.querySelector('.regenerate-button');
        if (regenerateButton) {
            regenerateButton.disabled = true;
        }
    }
}

// 남은 횟수 업데이트
function updateRemainingCount() {
    const countBadge = document.querySelector('.count-badge');
    if (countBadge) {
        countBadge.textContent = `${remainingGenerations}회`;
    }
}
