import Footer from "./Footer";
import Header from "./Header";
import "./css/solution.css";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Accordion from "react-bootstrap/Accordion";
// 솔루션 소개 페이지
const Solution = ({ Solutionheader }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
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
      <section className="tabmenu">
        <div>
          {/* 탭메뉴 */}
          <ul className="solutionMenu">
            <li
              className={activeTab === 0 ? "active" : ""}
              onClick={() => handleTabClick(0)}
            >
              <span className="tab-text">지진 솔루션</span>
            </li>
            <li
              className={activeTab === 1 ? "active" : ""}
              onClick={() => handleTabClick(1)}
            >
              <span className="tab-text">침수 솔루션</span>
            </li>
            <li
              className={activeTab === 2 ? "active" : ""}
              onClick={() => handleTabClick(2)}
            >
              <span className="tab-text">마이솔루션</span>
            </li>
          </ul>
          <div className="solutionContent">
            {activeTab === 0 && (
              <div>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {/* 실시간 상황 분석 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>실시간 상황 분석</h2>
                      <p>
                        실시간 지진 상황을 모니터링하고 슈퍼컴퓨터를 활용하여
                        모의한 지진 시나리오에 따른 <br /> 지반운동과 건물
                        피해를 상황 대응에 활용할 수 있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext">
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
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 건물 피해 분석 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>건물 피해 분석</h2>
                      <p>
                        실시간 지진 상황을 모니터링하고 슈퍼컴퓨터를 활용하여
                        모의한 지진 시나리오에 따른 <br /> 지반운동과 건물
                        피해를 상황 대응에 활용할 수 있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>인공지능 기반 지진 건물 피해 예측</h2>
                            <p>
                              • 건물, 과거 피해 지반데이터 학습데이터로 구축
                            </p>
                          </div>
                          <div className="swiperinfotextinner">
                            <h2>3D GIS 기반 지진 건물 피해 시각화</h2>
                            <p>
                              • Cesium JS 및 Three.js 그래픽 라이브러리 활용
                            </p>
                            <p>
                              • 건물의 지진 피해 규모 값을 구간으로 나누어
                              설정한 색상 값으로 지도에 표출
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 지반 운동 분석 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>지반 운동 분석</h2>
                      <p>
                        실시간 지진 상황을 모니터링하고 슈퍼컴퓨터를 활용하여
                        모의한 지진 시나리오에 따른 <br /> 지반운동과 건물
                        피해를 상황 대응에 활용할 수 있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>슈퍼컴퓨터 활용 지진 속도모델 계산</h2>
                            <p>
                              • 부산광역시 200개 지점 실측 지반 데이터 기반 가상
                              지진 발생 시나리오 분석
                            </p>
                            <p>
                              • 지점별 최대지반가속도(PGA)의 계산 결과를 시계열
                              데이터로 생성.
                            </p>
                          </div>
                          <div className="swiperinfotextinner">
                            <h2>
                              시계열 데이터 최적화를 통한 지반 운동 시뮬레이션
                            </h2>
                            <p>
                              • Three.js 그래픽 라이브러리를 활용한 최대지반가속
                              도 값을 3차원 애니메이션으로 처리
                            </p>
                            <p>
                              • 가속도 값 구간에 따른 색상 설정으로 권역별 전파
                              형 상 분석
                            </p>
                            <p>
                              • 애니메이션 크기를 조절하여 도시 중심, 지진파
                              중심 스타일 조정 기능 제공
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                {/* 침수솔루션 */}
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {/* 실시간 상황 분석 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>실시간 상황 분석</h2>
                      <p>
                        기상 예보를 활용해 침수 발생 위험 지역을 예측하고 다양한
                        시나리오에 따른 <br /> 침수 예상 지역을 연동하여 상황에
                        대비할 수 있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>기상 현황</h2>
                            <p>• 기상 특보 API 실시간 호출</p>
                            <p>• 사용자 지역 하이라이트 표시</p>
                            <p>
                              • 기상청 기상 레이더 API를 연계하여, 당일
                              00:00부터 5분 단위 레이더 이미지 실행
                            </p>
                          </div>
                          <div className="swiperinfotextinner">
                            <h2>침수 예측 정보</h2>
                            <p>
                              • 특보 발효 시 호우주의보/호우경보 기준에 따른
                              위험 지역 표출
                            </p>
                            <p>• 관리자 설정 강수량 이상 지역만 리스트업</p>
                            <p>
                              • 3시간, 12시간 합산 강수량에 따라
                              관심/주의/경계/심각의 위기경보 상태 표시
                            </p>
                            <p>• 위험 시군구 선택 시 유사 시나리오 실행</p>
                            <p>• 침수 예측 지역 확인</p>
                            <p>
                              • 우클릭 실행하여 소속 부서의 대응매뉴얼(지자체
                              현장조치 행동매뉴얼) 실행
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 대응 메뉴얼 제공 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>대응 메뉴얼 제공</h2>
                      <p>
                        기상 예보를 활용해 침수 발생 위험 지역을 예측하고 다양한
                        시나리오에 따른 <br /> 침수 예상 지역을 연동하여 상황에
                        대비할 수 있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>대응 메뉴얼 연동</h2>
                            <p>
                              • 침수 예측 정보 위험 지역 선택 후 대응 매뉴얼
                              실행 시 해당 지자체의 부서별 단계별 대응 메뉴얼
                              제공
                            </p>
                            <p>
                              • 대응 업무와 연관된 솔루션 기능 리스트 표출 및
                              실행 제공 <br />
                              예) 유관 기관 비상연락망
                            </p>
                            <p>
                              • 체크리스트를 저장하고 불러올 수 있어, 과거 상황
                              시 대응 정보 기록 가능
                            </p>
                            <p>
                              • 대응 1~4단계마다 체크박스 기능을 통해 현
                              대응상황 온라인 모니터링 진행
                            </p>
                          </div>
                          <div className="swiperinfotextinner">
                            <h2>부서별 대응매뉴얼 구축</h2>
                            <p>
                              • 솔루션 관리자 기능으로 매뉴얼을 구축하고 갱신할
                              수 있는 기능 제공
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 내수 침수 분석 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>내수 침수 분석</h2>
                      <p>
                        기상 예보를 활용해 침수 발생 위험 지역을 예측하고 다양한
                        시나리오에 따른 <br /> 침수 예상 지역을 연동하여 상황에
                        대비할 수 있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>내수침수 시나리오 분석</h2>
                            <p>
                              • SWMM(Stormwater Management Model)에 따른 예상
                              내수침수 시나리오를 시각화할 수 있음
                            </p>
                            <p>
                              • SWMM 방식으로 하수관망 배수시스템과 더불어 표면
                              모델링을 통해 2차원 침수 시뮬레이션 수행
                            </p>
                            <p>
                              • 현재 부산광역시에서 시간당 50, 105, 150 mm 강우
                              시 침수 예상 지역 제공
                            </p>
                            <p>
                              • 3차원 GIS 방식으로 침수 예상 지역과 해당 지역에
                              포함되는 건물 지오메트리(Geometry) 표현
                            </p>
                            <p>
                              • 행정구역 단위로 침수 피해 면적과 전체 행정구역
                              면적 대비 침수 면적 비교 제공
                            </p>
                            <p>
                              • 스위치 on/off를 통한 시나리오 숨김 및 해지 가능
                            </p>
                          </div>
                          <div className="swiperinfotextinner">
                            <h2>다양한 공간정보 제공</h2>
                            <p>• 중요 거점 마커와 연관된 마커 정보 제공</p>
                            <p>
                              • 침수흔적도, 홍수발생지역, 해안침수발생지역 등
                              상시 등록 가능
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                {/* 데이터관리 */}
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {/* 마커 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>마커</h2>
                      <p>
                        지도의 해당 위치에 아이콘을 표시하고 상세정보를 텍스트,
                        이미지, 동영상의 형태로 제공할 수 있는 기능을 등록할 수
                        있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext">
                          <div>
                            <h2>지역 선택</h2>
                            <p>
                              • 지역이 동일한 사용자가 기능을 실행할 수
                              있습니다. 예를 들어 기능의 지역 선택 값이
                              부산광역시 라면, 사용자 지역이 부산광역시 인
                              사용자에게만 기능이 표시됩니다. 전체지역을
                              선택하면 모든 사용자가 기능을 실행할 수 있습니다.
                            </p>
                          </div>
                          <div>
                            <h2>팝업 종류</h2>
                            <p>
                              • 지도에서 마커를 클릭했을 때 제공하는 정보의
                              유형입니다. 텍스트는 표 형태로 제공하며, 이미지와
                              동영상은 name과 url 필드명을 입력해야 합니다.
                            </p>
                          </div>
                        </div>
                        <div className="swiperinfotext">
                          <div>
                            <h2>데이터 종류</h2>
                            <p>
                              • 기능에 대한 데이터는 파일과 API의 2가지 방식으로
                              입력될 수 있습니다. API를 선택할 경우 연동할 API
                              인증키와 요청 값을 입력 하십시오.
                            </p>
                          </div>
                          <div>
                            <h2>필드 매핑</h2>
                            <p>
                              • 지도 매핑은 좌표 또는 주소로 처리됩니다. 팝업
                              종류가 테이블인 경우 정보 제공 필드를 입력합니다.
                              실제 필드명과 표시할 이름을 각각 입력합니다.
                            </p>
                          </div>
                        </div>
                        <div className="swiperinfotext swiperinfotextLeft">
                          <div>
                            <h2>연관 기능 지정</h2>
                            <p>
                              • 선택한 솔루션(지진, 침수, 미세먼지)의 다른
                              기능을 팝업 창에 함께 목록으로 보여줄 수 있습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* SHP */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>SHP</h2>
                      <p>
                        선 또는 면으로 된 지리정보를 지도에 시각화 할 수 있는
                        기능입니다. 파일 형식은 SHP 및 관련 파일이며, 시각화
                        스타일을 설정할 수 있습니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>파일 업로드</h2>
                            <p>
                              • SHP 파일 속성정보를 참고하여 레이어로 처리할
                              변수를 선택합니다. 단색 또는 복수색으로 설정할 수
                              있습니다.
                            </p>
                            <p>
                              • 복수형의 경우, 변수 특성에 따라 분류형과
                              구간형을 선택합니다.
                            </p>
                            <div className="swiperinner">
                              <b>
                                - 구간인 경우 범례개수를 입력합니다. 각 구간의
                                시작과 끝 값을 직접 입력하여 바꿀 수 있습니다.
                              </b>
                              <b>
                                - 색상 설정에서 각 색상을 클릭하여 원하는
                                색상으로 변경합니다.
                              </b>
                            </div>
                            <p>
                              • 단색의 경우, 패턴을 지정할 수 있습니다. 패턴은
                              선의 간격과 굵기, 모양을 선택할 수 있습니다.
                            </p>
                            <p>
                              • 색상 설정 또는 패턴색에서 색상을 클릭하여 원하는
                              색으로 변경합니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 히트맵 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>히트맵</h2>
                      <p>
                        좌표에 해당하는 숫자 값을 구간별 레이어 설정을 통해
                        히트맵의 형태로 시각화 하는 기능입니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>필드 설정</h2>
                            <p>
                              • 쉼표로 분리된 UTF-8 형식의 CSV 파일을
                              업로드합니다.
                            </p>
                            <p>
                              • 업로드 파일에 들어있는 필드 중 위도, 경도,
                              히트맵으로 처리할 변수를 선택합니다.
                            </p>
                            <p>
                              • 구간의 개수를 입력하거나 선택합니다. 필요한 경우
                              개별 구간의 시작과 끝 값을 변경할 수 있습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 그래프 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>그래프</h2>
                      <p>
                        지역 및 솔루션과 관련한 정보를 그래프 형태로 제공할 수
                        있는 기능입니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>파일 업로드 및 필드 설정</h2>
                            <p>
                              • 쉼표로 분리된 UTF-8 형식의 CSV 파일을
                              업로드합니다.
                            </p>
                            <p>
                              • X축과 Y축에 사용할 필드명을 입력하십시오. 입력할
                              내용은 업로드 파일에 <br /> 사용된 원래 필드명과
                              화면에 표시할 이름입니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 테이블 */}
                  <SwiperSlide>
                    <div className="swiperWrap">
                      <h2>테이블</h2>
                      <p>
                        지역 및 솔루션과 관련한 정보를 테이블 형태로 제공할 수
                        있는 기능입니다.
                      </p>
                    </div>
                    <div className="swipercontent">
                      <div className="swiperimg">
                        <img src="./img/solutioninfoimg01.png" alt="" />
                      </div>
                      <div>
                        <div className="swiperinfotext swiperinfotextSimulation">
                          <div>
                            <h2>파일 업로드 및 필드 설정</h2>
                            <p>
                              • 쉼표로 분리된 UTF-8 형식의 CSV 파일을
                              업로드합니다.
                            </p>
                            <p>
                              • 업로드 파일에 사용된 원래 필드명과 화면에 표시할
                              이름을 매핑할 수 있도록 <br /> 각각의 이름을
                              입력하십시오.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>{" "}
        </div>
      </section>
      <section className="solutionMenuSection">
        <div className="solutionMenuSectionTitle">
          <p>지진 솔루션</p>
          <img src="./img/solutionimg01.png" alt="" />
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
