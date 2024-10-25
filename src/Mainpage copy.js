// import React from "react";
import "./css/mainpage.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { SectionsContainer, Section } from "react-fullpage";
let options = {
  anchors: ["main", "sub", "news"],
  navigation: false,
  autoScrolling: false,
  fitToSection: false,
};
var tempTitle = [];

const Mainpage = ({ introPage }) => {
  useEffect(() => {
    const handleRefresh = () => {
      // 새로고침 이벤트 발생 시 실행되는 로직을 작성합니다.
      console.log("페이지가 새로고침되었습니다.");
      // SectionsContainer.fullpage.moveTo(1, 1);
    };

    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);
  // 뉴스 api
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    var client_id = "lfWN_mM3tpJb5L17LwEh";
    var client_secret = "Q_HFZl5MSA";
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/v1/search/news.json", {
          params: {
            client_id: client_id,
            client_secret: client_secret,
            query: "라미랩",
            display: 3,
            sort: "sim",
          },
          headers: {
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": client_secret,
          },
        });

        const items = res.data.items;
        // setArticles(items); // articles 상태 변수에 아이템 저장
        console.log(tempTitle);
        const modifiedItems = items.map((item) => {
          const title = item.title.replace(/<b>/g, "").replace(/<\/b>/g, "");
          const description = item.description
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "");
          return { ...item, title, description };
        });
        setArticles(modifiedItems);
        for (let i = 0; i < 3; i++) {
          tempTitle.push(items[i].title);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchEvents();
  }, []);
  console.log(articles);

  return (
    <div>
      <header className={introPage ? "newsHeader" : "introHeader"}>
        <Header />
      </header>
      <SectionsContainer recordHistory={true} {...options}>
        <Section className="sectionMain" {...options.anchors.main}>
          <div className="mainText">
            <p>Connect Knowledge and Space!</p>
            <h2>
              지식과 공간의 연결, <p> 라미랩입니다.</p>
            </h2>
          </div>
        </Section>
        <Section className="contentLinkWrap" {...options.anchors.sub}>
          <div>
            <div className="contentList">
              <div>
                <h2>재난의사결정지원솔루션</h2>
                <p>
                  재난 별 의사결정지원 솔루션 모듈 구성으로서, <br /> 3D GIS
                  기반으로 도시에서 일어나는 재난을 시각화합니다.
                </p>
                <Link to="/Solution">
                  View Detail <img src="./img/ViewDetail.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="contentList">
              <div>
                <h2>시뮬레이션</h2>
                <p>
                  적용한 정확도 높은 홍수 예측 시스템과 <br /> 실시간 강우량
                  입력만으로 위험 예상 지역 재난 예측이 가능한 편리한 UI/UX를
                  지원합니다.
                </p>
                <Link to="/Simulation">
                  View Detail <img src="./img/ViewDetail.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="contentList">
              <div>
                <h2>안전대피로</h2>
                <p>
                  시민이 위험지역을 우회하여 안전하게 <br /> 대피할 수 있는
                  경로를 제공하는 데이터 서비스입니다.
                </p>
                <Link to="/Safeinfo">
                  View Detail <img src="./img/ViewDetail.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Section>
        <Section
          className="footerWarp"
          id="newsContainer"
          {...options.anchors.news}
        >
          <div className="newsWrap">
            <div className="newsWrapInner">
              <div className="newsTitle">
                <h2>LAMILAB NEWS</h2>
              </div>
              <div className="newsTitleIcon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                {articles.map((article, index) => (
                  //item.title
                  //이미지 가져오는 api 호출
                  <div id={`newscontentWrap${index}`}>
                    <div className="newscontentWrap" key={index}>
                      <div className="newscontenttitle">
                        <h2>{article.title}</h2>
                      </div>
                      <div className="newscontentmain">
                        {/* <img src="./img/historyimg.png" alt="" /> */}
                        <p>{article.description}</p>
                      </div>
                      <div className="newslinkbtn">
                        <a
                          href={article.originallink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Detail{" "}
                          <svg
                            width="45"
                            height="15"
                            viewBox="0 0 45 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 13H42L33.25 1"
                              stroke="#265dc3"
                              strokeWidth="3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Footer />
          </div>
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default Mainpage;
