import Footer from "./Footer";
import Header from "./Header";
import "./css/solution.css";
import "./css/simulation.css";
// import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Accordion from "react-bootstrap/Accordion";

// 솔루션 소개 페이지
const Simulation = (Simulationheader) => {
  return (
    <div>
      <header
        className={Simulationheader ? "Simulationheaderheader" : "newsHeader"}
      >
        <Header />
      </header>
      {/* 솔루션 소개 */}
      <section className="solutionMain">
        <div className="solutionTitleWrapspan">
          <span>
            현장을 가지 않더라도 사무실에서 보다 <br />
            <b> 정확하고 간편한 예측 정보</b>
          </span>
        </div>
        <div className="solutionimg">
          <img src="./img/solutionimg02.png" alt="" />
        </div>
        <div className="solutionTitleWrapspan">
          <span>
            분포형 강우-유출 모형을 적용한 <br /> 정확도 높은 홍수 예측 시스템과
            실시간 강우량 입력만으로 <br /> 위험예상 지역 재난 예측이 가능한
            편리한 UI/UX를 지원합니다.
          </span>
        </div>
        <div className="solutioninfowrap Simulationinfowrap">
          <h1>시뮬레이션 솔루션의 장점 3가지</h1>
          <div>
            <div>
              <img src="./img/solutionicon04.svg" alt="" />
              <p>
                월등한 <b> 연산 능력 기반</b> <br />
                <b>슈퍼컴퓨터</b> 자원을 <br />
                활용한 위험 예측
              </p>
            </div>
            <div>
              <img src="./img/solutionicon05.svg" alt="" />
              <p>
                시뮬레이션 결과를 <br /> <b> 3D로 빠른 가시화</b>
              </p>
            </div>
            <div>
              <img src="./img/solutionicon06.svg" alt="" />
              <p>
                하수관망 오류찾기 기능 기반
                <br />
                문제 관로 식별 및 <br />
                <b> 데이터 자동 보정</b>가능
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tabmenu">
        <div>
          <div className="solutionContent">
            <div>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {/* 3d 기반 */}
                <SwiperSlide>
                  <div className="swiperWrap swiperWraph2">
                    <h2>3D 기반 시뮬레이션 예측 비교</h2>
                    <p>
                      분포형 강우-유출 모형을 적용한 정확도 높은 홍수 예측
                      시스템 기반의 <br /> 해당 솔루션은 실시간 강우량
                      입력만으로피해 범위를 사전 예측할 수 있습니다.
                    </p>
                  </div>
                  <div className="swipercontent">
                    <div className="swiperimg">
                      <img src="./img/solutioninfoimg06.png" alt="" />
                    </div>
                    <div>
                      <div className="swiperinfotext swiperinfotextSimulation">
                        <div>
                          <h2>과거 침수 사례 시뮬레이션 비교</h2>
                          <p>
                            • 기존 침수 지도 데이터와 비교 가능 (침수흔적도,
                            침수예상도)
                          </p>
                          <p>• 시뮬레이션 입력 파일 목록 다운로드 가능</p>
                        </div>
                        <div className="swiperinfotextinner">
                          <h2>시간당 침수 시나리오 구축</h2>
                          <p>• 시간당 70, 90, 120mm/h 침수 시나리오 구축</p>
                          <p>• 시/군/구/분구별 구역 및 범위 설정 가능</p>
                          <p>
                            • SWMM, ITZI 등 유역 모델링 엔진 기반 국내 실정에
                            맞는 침수 예방 프로그램 도입
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 과거 침수 */}
                <SwiperSlide>
                  <div className="swiperWrap">
                    <h2>과거 침수 내역 등 데이터 관리</h2>
                    <p>
                      분포형 강우-유출 모형을 적용한 정확도 높은 홍수 예측
                      시스템 기반의 <br /> 해당 솔루션은 실시간 강우량
                      입력만으로 피해 범위를 사전 예측할 수 있습니다.
                    </p>
                  </div>
                  <div className="swipercontent">
                    <div className="swiperimg">
                      <img src="./img/solutioninfoimg01.png" alt="" />
                    </div>
                    <div>
                      <div className="swiperinfotext">
                        <div>
                          <h2>침수지도 비교를 위한 데이터관리 기능 개발</h2>
                          <p>• 침수흔적도 업로드 기능</p>
                          <p>• 침수예상도(환경부) 업로드 기능</p>
                        </div>
                        <div className="swiperinfotextinner">
                          <h2>시도별 하천, 유역 데이터관리 기능 개발</h2>
                          <p>
                            • 시도별 배수구역 데이터(유역 데이터) 업로드 기능
                          </p>
                          <p>• 시도별 하천데이터 업로드 기능</p>
                        </div>
                      </div>
                      <div className="swiperinfotext">
                        <div className="swiperinfotext01">
                          <h2>
                            시뮬레이션 고도화를 위한 환경공간정보 데이터 관리
                            기능 개발
                          </h2>
                          <p>
                            • 강수량, DEM, 토지피복도 레벨, 침투능 방식,
                            하수관망 크기, 배수효율, 경계조건, 건물적용여부 등
                            수문 인자 입력 가능
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 하수관거 */}
                <SwiperSlide>
                  <div className="swiperWrap">
                    <h2>하수관거 데이터 관리</h2>
                    <p>
                      분포형 강우-유출 모형을 적용한 정확도 높은 홍수 예측
                      시스템 기반의 <br /> 해당 솔루션은 실시간 강우량
                      입력만으로 피해 범위를 사전 예측할 수 있습니다.
                    </p>
                  </div>
                  <div className="swipercontent">
                    <div className="swiperimg">
                      <img src="./img/solutioninfoimg01.png" alt="" />
                    </div>
                    <div>
                      <div className="swiperinfotext swiperinfotextSimulation">
                        <div>
                          <h2>데이터 하수관거 수정</h2>
                          <p>• 배수분구별 하수관 필터링 후 하수관 모델링</p>
                          <p>
                            • 오류찾기 기능 실행하여 문제 관로 식별 후 데이터
                            자동 보정
                          </p>
                          <p>
                            • 필요 시 관거 속성 확인 후 수동으로 관거, 맨홀,
                            토구 생성
                          </p>
                        </div>
                        <div className="swiperinfotextinner">
                          <h2>데이터 아카이브</h2>
                          <p>• 배수분구 수정 삭제 가능</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="solutionMenuSection">
        <div className="solutionMenuSectionTitle">
          <p>시뮬레이션 솔루션</p>
          <img src="./img/solutionimg01.png" alt="" />
          <span>
            분포형 강우-유출 모형을 적용한 정확도 높은 홍수 예측 시스템 기반의
            해당 솔루션은 실시간 강우량 입력만으로피해 범위를 사전 예측할 수
            있습니다.
          </span>
        </div>
        <div className="accordionWrap">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>3D 기반 시뮬레이션 예측 비교</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext swiperinfotextTop">
                  <div>
                    <h2>과거 침수 사례 시뮬레이션 비교</h2>
                    <p>
                      • 기존 침수 지도 데이터와 비교 가능 (침수흔적도,
                      침수예상도)
                    </p>
                    <p>• 시뮬레이션 입력 파일 목록 다운로드 가능</p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>시간당 침수 시나리오 구축</h2>
                    <p>• 시간당 70, 90, 120mm/h 침수 시나리오 구축</p>
                    <p>• 시/군/구/분구별 구역 및 범위 설정 가능</p>
                    <p>
                      • SWMM, ITZI 등 유역 모델링 엔진 기반 국내 실정에 맞는
                      침수 예방 프로그램 도입
                    </p>
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
              <Accordion.Header>과거 침수 내역 등 데이터 관리</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext">
                  <div>
                    <h2>침수지도 비교를 위한 데이터관리 기능 개발</h2>
                    <p>• 침수흔적도 업로드 기능</p>
                    <p>• 침수예상도(환경부) 업로드 기능</p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>시도별 하천, 유역 데이터관리 기능 개발</h2>
                    <p>• 시도별 배수구역 데이터(유역 데이터) 업로드 기능</p>
                    <p>• 시도별 하천데이터 업로드 기능</p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>하수관거 데이터 관리</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext">
                  <div>
                    <h2>데이터 하수관거 수정</h2>
                    <p>• 배수분구별 하수관 필터링 후 하수관 모델링</p>
                    <p>
                      • 오류찾기 기능 실행하여 문제 관로 식별 후 데이터 자동
                      보정
                    </p>
                    <p>
                      • 필요 시 관거 속성 확인 후 수동으로 관거, 맨홀, 토구 생성
                    </p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>데이터 아카이브</h2>
                    <p>• 배수분구 수정 삭제 가능</p>
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

export default Simulation;
