// import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";
import "./css/Introductio.css";
import { Link } from "react-router-dom";

// 회사 소개 페이지
const Introductio = ({ Mainpage }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="IntroductioWrap">
      <header className={Mainpage ? "newsHeader" : "IntroductioHeader"}>
        <Header />
      </header>
      <section className="introductioMain">
        {/* 회사소개 뉴스 탭메뉴 */}
        <div className="Introductiolink">
          <div>
            <Link>회사소개</Link>
            <Link to="/News">NEWS</Link>
          </div>
        </div>
        {/* 라미랩 소갸 */}
        <div className="introductiotitle">
          <h2>안녕하세요. 지식과 공간을 연결 하는 라미랩 입니다. </h2>
          <div className="introductiotitleInner">
            <p>
              저희는 GIS 응용개발 벤처기업으로 공간정보 기반 지식서비스를
              만듭니다. <br />
              <b> "누구나 가상공간에서 데이터를 펼쳐놓고 분석한다." </b>라는
              슬로건을 갖고 <br /> 슈퍼컴퓨터 시뮬레이션을 통해 3차원
              가상공간에서 침수와 지진 등의 재난 정보를 시각화 합니다.
            </p>
            <p>
              범국민이 소통하며 재난 대응이 가능한 개인화된 지도 분석 서비스
              &nbsp;
              <b>안전대피로 솔루션</b> 그리고 <br /> 범정부용
              <b>재난의사결정지원 솔루션</b> 을 개발하여 사회 문제를 해결하고자
              노력하고 있습니다.
            </p>
          </div>
          <div className="introductiotitleBtn">
            <a
              href="https://fate-hisser-b96.notion.site/e3090a60262a4711821ae1e9db1c8c29"
              target="_blank"
              rel="noreferrer"
            >
              채용 바로가기
            </a>
          </div>
        </div>
        {/* 라미랩 전략 */}
        <div className="introductioinfo">
          <h2>라미랩의 전략</h2>
          <div className="introductioinfowrap">
            <div>
              <img src="./img/lamilabinfoimg01.svg" alt="" />
              <p>오픈소스 GIS 라이브러리 활용</p>
              <span>
                GDAL, Openlayers, three.js 등 <br /> 제약없는 공간정보
                오픈소스를 활용합니다.
              </span>
            </div>
            <div>
              <img src="./img/lamilabinfoimg02.svg" alt="" />
              <p>3차원 지도 시각화</p>
              <span>
                Cesium 기반 공간데이터를 3차원으로 <br /> 시각화하여 편리하고
                효과적이도록 했습니다.
              </span>
            </div>
            <div>
              <img src="./img/lamilabinfoimg03.svg" alt="" />
              <p>개방형(공공)데이터 매시업</p>
              <span>
                3차원 지도에서 공공 데이터를 매시업하여 <br /> 다양한 주제를
                분석할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
        {/* cl소개 */}
        <div className="clinfoWrap">
          <h2>CI 소개</h2>
          <div className="clinfoinner">
            <div>
              <img src="./img/clinfoimg01.svg" alt="" />
              <p>MAP</p>
            </div>
            <div>
              <img src="./img/clarrowimg.svg" alt="" />
            </div>
            <div>
              <img src="./img/clinfoimg02.svg" alt="" />
              <p>L</p>
            </div>
            <div>
              <img src="./img/clplusimg.svg" alt="" />
            </div>
            <div>
              <img src="./img/clinfoimg03.svg" alt="" />
              <p>DATA FLOW</p>
            </div>
          </div>
          <div className="Brandinginfo">
            <p>
              <b> Branding </b> <br /> Concept
            </p>
            <span>
              GPS 아이콘의 형태와 이니셜 L, 정보의 흐름을 직관적으로 이미지화한
              브랜드 아이텐티티입니다. <br />
              전문성과 신뢰감을 줄 수 있는 파란색과 기술력을 보여줄 수 있는
              노란색을 포인트 컬러로 잡아, <br />
              아이콘과 워터마크가 다양한 매체에 개별적으로 사용되어도 LAMILAB의
              차별성을 유지할 수 있습니다.
            </span>
          </div>
        </div>
        <div className="lamilabhistory">
          <h2>회사 연혁</h2>
          <div className="lamilabhistoryWrap">
            <ul className="tab-menu">
              <li
                className={activeTab === 0 ? "active" : ""}
                onClick={() => handleTabClick(0)}
              >
                <span className="tab-text">2023 - 현재</span>
              </li>
              <li
                className={activeTab === 1 ? "active" : ""}
                onClick={() => handleTabClick(1)}
              >
                <span className="tab-text">2020 - 2022</span>
              </li>
              <li
                className={activeTab === 2 ? "active" : ""}
                onClick={() => handleTabClick(2)}
              >
                <span className="tab-text">2016 - 2019</span>
              </li>
            </ul>

            <div className="tab-content">
              {activeTab === 0 && (
                <div>
                  <div className="tab-wrap">
                    <div className="tab-title">
                      <h2>2023 - 현재</h2>
                    </div>
                    <div className="tab-content">
                      <p>재난 안전 디지털 트윈 전문 기업으로의 확장</p>
                      <span>과학기술정보통신부 장관 표창(조우성 연구소장)</span>
                      <span>
                        대전광역시 중구청-KISTI-대전중부경찰서 업무협약
                      </span>
                      <span>대전광역시 서구청-KISTI 업무협약</span>
                      <span>공간정보사업자 신고(한국공간정보산업협회)</span>
                      <img src="./img/historyimg.png" alt="" />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <div className="tab-wrap">
                    <div className="tab-title">
                      <h2>2020 ~ 2022</h2>
                    </div>
                    <div className="tab-content">
                      <p>재난안전 원천기술 R&D 및 피봇팅</p>
                      <span>
                        대전광역시 유망중소기업 선정 및 유공자 표창(유호동
                        선임연구원)
                      </span>
                      <span>
                        기술이전 2건(KISTI), 특허출원 1건, 프로그램등록 1건
                      </span>
                      <span>전문연구사업자 신고(과학기술정보통신부)</span>
                      <span>기업부설연구소 공간지식연구소 인정</span>
                      <span>연구개발유형 벤처기업 인증</span>
                      <span>
                        특허 출원 2건(오픈API 위치정보 처리 기술, 대용량
                        지진데이터 웹서비스 기술)
                      </span>
                      <span>연구개발전담부서 인정 (지식서비스연구실)</span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <div className="tab-wrap">
                    <div className="tab-title">
                      <h2>2016 ~ 2019</h2>
                    </div>
                    <div className="tab-content">
                      <p>회사 설립 및 문헌 정보 베이스의 IT프로젝트 수행</p>
                      <span>
                        특허 기술이전 “기술문헌으로부터 전문용어의 기술적 개념을
                        자동으로 탐지하는 방법 및 장치“(KISTI, 10-1241329)
                      </span>
                      <span>
                        특허 등록 “홈라이브러리앱과 지역 도서관을 이용한 도서
                        공유 및 유통시스템”(10-1820059)
                      </span>
                      <span>
                        지역혁신체계 입주관리시스템 개발(국제과학비즈니스벨트)
                      </span>
                      <span>개인 소장 문헌 공유서비스 프로토타입 개발</span>
                      <span>법인설립</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* 회사 소개 */}
      <section className="CertifiedWrap">
        {/* 인증 소개 */}
        <div>
          <h2>인증</h2>
          <div className="Certifiedinner Certifiedinnertop">
            <div>
              <img src="./img/lamilab01.png" alt="" />
              <p>근무혁신 우수기업 선정서</p>
            </div>
            <div>
              <img src="./img/lamilab02.png" alt="" />
              <p>기업부설 연구소 인정서</p>
            </div>
            <div>
              <img src="./img/lamilab03.png" alt="" />
              <p>
                데이터바우처 지원사업 <br />
                공급기업 지정 확인서
              </p>
            </div>
            <div>
              <img src="./img/lamilab04.png" alt="" />
              <p>데이터 사업자 신고확인서</p>
            </div>
          </div>
          <div className="Certifiedinner">
            <div>
              <img src="./img/lamilab05.png" alt="" />
              <p>스마트시티 융합 얼라이언스</p>
            </div>
            <div>
              <img src="./img/lamilab06.png" alt="" />
              <p>유망중소기업 인증서</p>
            </div>
            <div>
              <img src="./img/lamilab07.png" alt="" />
              <p>전문연구사업자 신고증</p>
            </div>
            <div>
              <img src="./img/lamilab08.png" alt="" />
              <p>벤처기업확인서</p>
            </div>
          </div>
        </div>
        {/* 수상 소개 */}
        <div className="clientimgWrap">
          <h2>수상</h2>
          <div className="Certifiedinner Certifiedinner01">
            <div>
              <img src="./img/lamilab1.png" alt="" />
              <p>과학기술정보통신부 장관 표창</p>
              <p>조우성 연구소장</p>
            </div>
            <div>
              <img src="./img/lamilab2.png" alt="" />
              <p>대전광역시 유망중소기업 유공자 표창</p>
              <p>유호동 선임연구원</p>
            </div>
            <div>
              <img src="./img/lamilab3.png" alt="" />
              <p>대만 이노테크</p>
              <p>대만 특허청 동상</p>
            </div>
            <div>
              <img src="./img/lamilab4.png" alt="" />
              <p>대만 이노테크</p>
              <p>태국 특허청 특별상</p>
            </div>
          </div>
        </div>
        {/* 고객사 소개 */}
        <div className="clientimgWrap">
          <h2>고객사</h2>
          <div>
            <img src="./img/Clientimg01.png" alt="고객사부산광역시" />
            <img src="./img/Clientimg02.png" alt="고객사울산광역시" />
            <img src="./img/Clientimg03.png" alt="고객사대전광역시" />
            <img src="./img/Clientimg04.png" alt="고객사서구" />
            <img src="./img/Clientimg05.png" alt="고객사유성구" />
          </div>
          <div>
            <img
              src="./img/Clientimg06.png"
              alt="고객사한국과학기술정보연구원"
            />
            <img src="./img/Clientimg07.png" alt="고객사Kwater" />
            <img src="./img/Clientimg08.png" alt="고객사KIOST" />
            <img src="./img/Clientimg09.png" alt="고객사국토지리정보원" />
            <img src="./img/Clientimg010.png" alt="고객사스마트시티" />
          </div>
          <div>
            <img
              src="./img/Clientimg011.png"
              alt="고객사한국공간정보산업협회"
            />
            <img src="./img/Clientimg012.png" alt="고객사KBS부산" />
            <img src="./img/Clientimg013.png" alt="고객사드림즈" />
            <img src="./img/Clientimg014.png" alt="고객사코난" />
            <img src="./img/Clientimg015.png" alt="고객사에이텍크" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Introductio;
