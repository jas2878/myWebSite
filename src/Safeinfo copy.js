import Footer from "./Footer";
import Header from "./Header";
import "./css/solution.css";
import "./css/simulation.css";
import "./css/safe.css";
// import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Accordion from "react-bootstrap/Accordion";

// 솔루션 소개 페이지
const safe = (safeHeader) => {
  return (
    <div>
      <header className={safeHeader ? "safeHeader" : "newsHeader"}>
        <Header />
      </header>
      {/* 솔루션 소개 */}
      <section className="solutionMain safeMain">
        <div className="solutionTitleWrapspan">
          <span>
            <b>
              시민이 위험지역을 우회하여 안전하게 대피할 수 있는 <br />
              경로를 제공하는 데이터 서비스
            </b>
          </span>
        </div>
        <div className="solutionimgwrap">
          <img src="./img/solutionimg03.png" alt="" />
          <div>
            <p>• PWA 기반의 반응형 앱</p>
            <p>• 재난 유형별 안전대피로 제공</p>
            <p>• 도로 네트워크 통합</p>
            <p>• 실시간 우회</p>
            <p>• 실시간 위험 제보</p>
            <p>• URL 기반 접속으로 QR코드 및 재난문자 활용 가능</p>
          </div>
        </div>
        <div className="solutioninfowrap Simulationinfowrap">
          <h1>안전대피로 솔루션의 장점 3가지</h1>
          <div>
            <div>
              <img src="./img/solutionicon07.svg" alt="" />
              <p>
                재난 예상 정보 및 예측 정보
                <br /> <b>동시 시각화</b>
              </p>
            </div>
            <div>
              <img src="./img/solutionicon08.svg" alt="" />
              <p>
                <b> 위험지역 우회 </b> 기반 대피경로 안내
              </p>
            </div>
            <div>
              <img src="./img/solutionicon09.svg" alt="" />
              <p>
                도로 네트워크를 통합하여 <br />
                보다 <b> 정확한 길찾기 </b>가능 정보 제공
              </p>
            </div>
          </div>
        </div>
        <div className="safeinfotext">
          <div className="safeicontitle">
            <h2>적용 범위의 다양성 제고</h2>
            <p>
              지진, 침수 등 자연재해 관련 정보 뿐만 아니라 <br />
              AED, 개방화장실 등 다양한 생활안전 정보(파일) 업데이트 가능
            </p>
          </div>
          <div className="safeIconinfo">
            <div>
              <img src="./img/safeicon01.svg" alt="" />
              <p>지진</p>
            </div>
            <div>
              <img src="./img/safeicon02.svg" alt="" />
              <p>침수</p>
            </div>
            <div>
              <img src="./img/safeicon03.svg" alt="" />
              <p>미세먼지</p>
            </div>
            <div>
              <img src="./img/safeicon04.svg" alt="" />
              <p>생활안전</p>
            </div>
          </div>
          <div className="safedataIcon">
            <div>
              <img src="./img/safeicon05.svg" alt="" />
              <img src="./img/safeicon06.svg" alt="" />
              <img src="./img/safeicon07.svg" alt="" />
              <img src="./img/safeicon08.svg" alt="" />
              <img src="./img/safeicon09.svg" alt="" />
            </div>
            <div>
              <p>데이터 업로드를 통해 자유롭게 메뉴 구성 가능</p>
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
                {/* 시나리오 관리*/}
                <SwiperSlide>
                  <div className="swiperWrap swiperWraph2">
                    <h2>시나리오 관리</h2>
                    <p>
                      지진, 침수 시뮬레이션을 바탕으로 위험 지역을 우회하며
                      대피할 수 있습니다. 실시간 위험도 공유할 수 있어요.
                    </p>
                  </div>
                  <div className="swipercontent">
                    <div className="swiperimg">
                      <img src="./img/solutioninfoimg06.png" alt="" />
                    </div>
                    <div>
                      <div className="swiperinfotext">
                        <div>
                          <h2>솔루션 시나리오별 최적대피로 안내 </h2>
                          <p>• 지진, 미세먼지 – 집결지 출발 대피소 안내</p>
                          <p>• 침수 – 침수 지역 침수심 기준 이상 지역 대피</p>
                        </div>
                        <div className="swiperinfotextinner">
                          <h2>대피로 데이터</h2>
                          <p>• 도로명주소 노드링크 데이터 구축</p>
                          <p>• 표준노드링크 데이터 구축</p>
                          <p>• 도로명주소+표준노드링크 혼합(테스트 중)</p>
                        </div>
                      </div>
                      <div className="swiperinfotext">
                        <div className="swiperinfotext01">
                          <h2>최적대피로 안내</h2>
                          <p>• 대피로 계산 시 대피 지역 설정</p>
                          <p>
                            • 일정 수준 이상인 침수심이 발생한 지역만 대피하도록
                            설정.
                          </p>
                          <p>
                            • 침수 지역 내에 포함된 노드를 폴리곤에서 1개만 추출
                            하여 출발지로 설정하며, 직선거리가 가까우며 <br />{" "}
                            침수 되지 않은 대피소 3개에 대하여 Dijksatra 및 A*
                            알고리즘에 따른 경로값을 계산
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 모바일 안전대피로 앱 */}
                <SwiperSlide>
                  <div className="swiperWrap">
                    <h2>모바일 안전대피로 앱</h2>
                    <p>
                      지진, 침수 시뮬레이션을 바탕으로 위험 지역을 우회하며
                      대피할 수 있습니다. 실시간 위험도 공유할 수 있어요.
                    </p>
                  </div>
                  <div className="swipercontent">
                    <div className="swiperimg">
                      <img src="./img/solutioninfoimg01.png" alt="" />
                    </div>
                    <div>
                      <div className="swiperinfotext swiperinfotextSimulation">
                        <div>
                          <p>
                            • 크롬 PWA(Progressive Web Application) 방식의 웹앱
                            구현
                          </p>
                          <p>• 목표 이용자: 일반 시민</p>
                          <p>
                            • 현재 위치정보 접근 허용 시 현위치 기준 대피로 제공
                          </p>
                          <p>• 검색 주소 지오 코딩 처리 후 대피로 제공 </p>
                          <p>• 대피로 API 처리</p>
                          <p>• 현위치/검색주소 위치 기준 요청 </p>
                          <p>• 출발지 결정 후 최단거리 대피로 산출 </p>
                          <p>• 도착지, 대피경로, 침수예상지역 데이터 제공</p>
                          <p>
                            • 현재 위치 침수 예측 정보와 유사한 내수침수
                            시나리오 침수 지역 표시
                          </p>
                          <p>
                            • 0 초과 50 이하 - 50 mm 시나리오 침수 지역, <br />{" "}
                            50 초과 105 이하 – 105 mm 시나리오 침수 지역,
                            <br /> 105 초과 – 150 mm 시나리오 침수 지역
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 도로명주소 활용 도로 네트워크 */}
                <SwiperSlide>
                  <div className="swiperWrap">
                    <h2>도로명주소 활용 도로 네트워크 구축</h2>
                    <p>
                      지진, 침수 시뮬레이션을 바탕으로 위험 지역을 우회하며
                      대피할 수 있습니다. 실시간 위험도 공유할 수 있어요.
                    </p>
                  </div>
                  <div className="swipercontent">
                    <div className="swiperimg">
                      <img src="./img/solutioninfoimg01.png" alt="" />
                    </div>
                    <div>
                      <div className="swiperinfotext swiperinfotextSimulation">
                        <div>
                          <p>• 도로명주소</p>
                          <p>• 표준노드링크</p>
                          <p>
                            • 원래 분리되었던 노드를 통합하여 새로운 경로 생성
                            가능
                          </p>
                          <p>
                            • 노드가 거리가 아래 그림은 20M 내에 있는 3개의
                            노드를 1개의 표준노드링크 노드ID로 <br />
                            통합한 후 지도와 길찾기 쿼리 예시
                          </p>
                          <p>
                            • 도로명주소와 표준로드링크가 연결이 되어 서로
                            길찾기가 가능해짐
                          </p>
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
              <Accordion.Header>시나리오 관리</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext swiperinfotextTop">
                  <div>
                    <h2>솔루션 시나리오별 최적대피로 안내 </h2>
                    <p>• 지진, 미세먼지 – 집결지 출발 대피소 안내</p>
                    <p>• 침수 – 침수 지역 침수심 기준 이상 지역 대피</p>
                  </div>
                  <div className="swiperinfotextinner">
                    <h2>대피로 데이터</h2>
                    <p>• 도로명주소 노드링크 데이터 구축</p>
                    <p>• 표준노드링크 데이터 구축</p>
                    <p>• 도로명주소+표준노드링크 혼합(테스트 중)</p>
                  </div>
                </div>
                <div className="swiperinfotext">
                  <div>
                    <h2>최적대피로 안내</h2>
                    <p>• 대피로 계산 시 대피 지역 설정</p>
                    <p>
                      • 일정 수준 이상인 침수심이 발생한 지역만 대피하도록 설정.
                    </p>
                    <p>
                      • 침수 지역 내에 포함된 노드를 폴리곤에서 1개만 추출 하여
                      출발지로 설정하며, 직선거리가 가까우며 <br /> 침수 되지
                      않은 대피소 3개에 대하여 Dijksatra 및 A* 알고리즘에 따른
                      경로값을 계산
                    </p>
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
              <Accordion.Header>모바일 안전대피로 앱</Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext">
                  <div>
                    <p>
                      • 크롬 PWA(Progressive Web Application) 방식의 웹앱 구현
                    </p>
                    <p>• 목표 이용자: 일반 시민</p>
                    <p>• 현재 위치정보 접근 허용 시 현위치 기준 대피로 제공</p>
                    <p>• 검색 주소 지오 코딩 처리 후 대피로 제공 </p>
                    <p>• 대피로 API 처리</p>
                    <p>• 현위치/검색주소 위치 기준 요청 </p>
                    <p>• 출발지 결정 후 최단거리 대피로 산출 </p>
                    <p>• 도착지, 대피경로, 침수예상지역 데이터 제공</p>
                    <p>
                      • 현재 위치 침수 예측 정보와 유사한 내수침수 시나리오 침수
                      지역 표시
                    </p>
                    <p>
                      • 0 초과 50 이하 - 50 mm 시나리오 침수 지역, <br /> 50
                      초과 105 이하 – 105 mm 시나리오 침수 지역,
                      <br /> 105 초과 – 150 mm 시나리오 침수 지역
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                도로명주소 활용 도로 네트워크 구축
              </Accordion.Header>
              <Accordion.Body>
                <div className="swiperinfotext">
                  <div>
                    <p>• 도로명주소</p>
                    <p>• 표준노드링크</p>
                    <p>
                      • 원래 분리되었던 노드를 통합하여 새로운 경로 생성 가능
                    </p>
                    <p>
                      • 노드가 거리가 아래 그림은 20M 내에 있는 3개의 노드를
                      1개의 표준노드링크 노드ID로 <br />
                      통합한 후 지도와 길찾기 쿼리 예시
                    </p>
                    <p>
                      • 도로명주소와 표준로드링크가 연결이 되어 서로 길찾기가
                      가능해짐
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      {/* 상담 링크 */}
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
      {/* 실증사례 */}
      <section className="proveSection">
        <div className="provetitle">
          <h2>실증 사례</h2>
          <p>지자체와 기업의 수요를 기반으로 GIS 서비스를 개발합니다.</p>
        </div>
        <div className="provecontent">
          <div>
            <img src="./img/safebottomimg01.png" alt="" />
            <p>안전중구플랫폼</p>
          </div>
          <div>
            <img src="./img/safebottomimg02.png" alt="" />
            <p>방사능 재난안전 대피경로 서비스</p>
          </div>
          <div>
            <img src="./img/safebottomimg03.png" alt="" />
            <p>부산시 도시침수 통합시스템</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default safe;
