import Footer from "./Footer";
import Header from "./Header";
import "./css/solution.css";
// import React, { useState } from "react";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Accordion from "react-bootstrap/Accordion";
// 솔루션 소개 페이지
const Solution = ({ Solutionheader }) => {
  // const [activeTab, setActiveTab] = useState(0);
  // const handleTabClick = (index) => {
  //   setActiveTab(index);
  // };
  return (
    <div>
      <header className={Solutionheader ? "newsHeader" : "Solutionheader"}>
        <Header />
      </header>
      {/* 솔루션 소개 */}
      <section className="solutionMain">
        <div className="solutionTitleWrap">
          <h2>한 눈에 보는 도심재난 예측 정보</h2>
          <p>
            재난 별 의사결정지원 솔루션 모듈 구성으로서, <br />
            3D GIS 기반으로 도시에서 일어나는 재난을 시각화 합니다.
          </p>
        </div>
        <div className="solutionimg">
          <img src="./img/solutionimg.png" alt="" />
        </div>
        <div className="solutioninfowrap">
          <h1>재난의사결정지원 솔루션의 장점 3가지</h1>
          <div>
            <div>
              <img src="./img/solutionicon01.svg" alt="" />
              <p>
                다양한 <b>공공데이터 표준화</b> 및 융합
              </p>
            </div>
            <div>
              <img src="./img/solutionicon02.svg" alt="" />
              <p>
                <b> 재난별,단계별</b> <br /> 자동 대응 프로세스 기술 기반 <br />
                대응절차 제공재난별,단계별
              </p>
            </div>
            <div>
              <img src="./img/solutionicon03.svg" alt="" />
              <p>
                AI 기반 인근 <br /> 대피소 탐색 및 자동 <b> 다중 대피경로 </b>
                제공
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="solutionMenuSection">
        <div className="solutionMenuSectionTitle">
          <p>지진 솔루션</p>
          <img src="./img/solution01.png" alt="" />
          <span>
            실시간 지진 상황을 모니터링하고 슈퍼컴퓨터를 활용하여 모의한 지진
            시나리오에 따른 지반운동과 건물 피해를 상황 대응에 활용할 수
            있습니다.
          </span>
        </div>
        <div className="accordionWrap">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>실시간 상황 분석</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext swiperinfotextTop">
                  <div>
                    <h2>최근 1개월 지진 정보 지도 표출</h2>
                    <p>• 기상청 지진 API 연계</p>
                    <p>• 최근 한 달 내 지진 정보 실시간 수집</p>
                    <p>• 환경 설정 기준 값 이상 지진정보 표출</p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>시나리오 분석 정보 연계</h2>
                    <p>• 우클릭 기능으로 등록된 시나리오 선택 실행</p>
                    <p>• 실시간 지진 정보와 유사한 시나리오 분석</p>
                  </div>
                </div>
                <div className="swiperinfotext">
                  <div>
                    <h2>지진 관련 중요 위치 정보 등 제공</h2>
                    <p>• 대피소, 주민센터, 소방서 등 상시 표출</p>
                    <p>• 마커, SHP, 히트맵 등 공간정보 기능</p>
                    <p>• 테이블, 그래프 등 실행</p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>화면 데이터 반출 기능 제공</h2>
                    <p>• 화면 출력</p>
                    <p>• SHP, GeoJSON 파일 반출</p>
                    <p>• 상황 발생 시 대응 매뉴얼 기능 제공</p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>건물 피해 분석</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext">
                  <div>
                    <h2>인공지능 기반 지진 건물 피해 예측</h2>
                    <p>• 건물, 과거 피해 지반데이터 학습데이터로 구축</p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>3D GIS 기반 지진 건물 피해 시각화</h2>
                    <p>• Cesium JS 및 Three.js 그래픽 라이브러리 활용</p>
                    <p>
                      • 건물의 지진 피해 규모 값을 구간으로 나누어 설정한 색상
                      값으로 지도에 표출
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>지반 운동 분석</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext">
                  <div>
                    <h2>슈퍼컴퓨터 활용 지진 속도모델 계산</h2>
                    <p>
                      • 부산광역시 200개 지점 실측 지반 데이터 기반 가상 지진
                      발생 시나리오 분석
                    </p>
                    <p>
                      • 지점별 최대지반가속도(PGA)의 계산 결과를 시계열 데이터로
                      생성.
                    </p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>시계열 데이터 최적화를 통한 지반 운동 시뮬레이션</h2>
                    <p>
                      • Three.js 그래픽 라이브러리를 활용한 최대지반가속 도 값을
                      3차원 애니메이션으로 처리
                    </p>
                    <p>
                      • 가속도 값 구간에 따른 색상 설정으로 권역별 전파 형 상
                      분석
                    </p>
                    <p>
                      • 애니메이션 크기를 조절하여 도시 중심, 지진파 중심 스타일
                      조정 기능 제공
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <section className="Counseling">
        <h2>라미랩의 솔루션을 조금 더 자세히 알고 싶다면,</h2>
        <div>
          <a
            href="https://whattime.co.kr/lamilab"
            target="_blank"
            rel="noreferrer"
          >
            상담 신청하기
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solution;
