// 예시 채용 정보
const jobData = {
    company: "(주) 벨 에스엠",
    position: "[효종연구소] 보안원 채용 (3교대)",
    experience: "경력 1년 이상",
    education: "학력무관",
    salary: "월급 2.6백만원",
    location: "경기 용인시",
    employmentType: "계약직 24개월",
    companyMessage:
        "​소매업에서의 혁신을 통해 고객들에게 즐거운 경험을 주고자 하는 기업에서 수도권에 다수의 마트 오픈을 기획 중입니다.",
    jobPosition: "00마트 지점장",
    responsibilities: [
        "신규 매장의 전반적인 운영 및 관리",
        "경쟁사 분석 및 시장 동향 파악",
        "매출 목표 설정 및 달성을 위한 전략 수립",
        "상품 구성 및 판매 전략 기획",
        "판촉 행사 및 프로모션 기획 및 실행",
    ],
    qualifications: [
        "매장 운영 및 인력 관리 경험 보유",
        "재고 및 상품 운영 관리 역량 보유",
        "고객 서비스 및 CS 관리 능력",
        "매출 분석 및 비용 절감 전략 수립 능력",
    ],
    preferredQualifications: [
        "신규 매장 오픈 및 초기 운영 경험 보유자",
        "유통업 관련 자격증 (유통관리사 등)보유자",
        "수도권 지역 내 유통 및 물류 네트워크 보유자",
    ],
    applicationPeriod: "채용 시 마감",
    applicationMethod: "온라인, 이메일",
    resumeFormat: "자유",
    contactPhone: "010-0000-0000",
    contactEmail: "glskdnfls@gmail.com",
};

// 지원 함수
function applyForJob(jobId) {
    return new Promise((resolve, reject) => {
        console.log(`Applying for job ID: ${jobId}`);
        setTimeout(() => {
            resolve(true);
            // reject(new Error('지원 실패'));
        }, 1000);
    });
}

// 탭 전환 함수
function switchTab(tabName) {
    const tabs = document.querySelectorAll(".tab-navigation > *");
    const indicator = document.querySelector(".tab-indicator");

    tabs.forEach((tab) => {
        if (
            tab.innerText.includes(
                tabName === "posting" ? "공고" : "맞춤형 공고 분석"
            )
        ) {
            tab.classList.add("active");
            if (indicator && tab.parentElement) {
                indicator.parentElement.removeChild(indicator);
                tab.appendChild(indicator);
            }
        } else {
            tab.classList.remove("active");
        }
    });

    // 선택된 탭에 따라 내용 변경 로직 추가 가능
}

// 이벤트 바인딩
document.addEventListener("DOMContentLoaded", () => {
    const applyButton = document.querySelector(".apply-button");
    if (applyButton) {
        applyButton.addEventListener("click", () => {
            applyForJob("job123")
                .then((success) => {
                    if (success) {
                        alert("지원이 완료되었습니다.");
                    }
                })
                .catch((error) => {
                    alert(`지원 중 오류가 발생했습니다: ${error.message}`);
                });
        });
    }

    const tabs = document.querySelectorAll(".tab-navigation > *");
    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const target = e.currentTarget;
            const tabName = target.innerText.includes("공고")
                ? "posting"
                : "analysis";
            switchTab(tabName);
        });
    });

    const originalPostingLink = document.querySelector(".original-posting");
    if (originalPostingLink) {
        originalPostingLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.open("https://example.com/original-job-posting", "_blank");
        });
    }
});
