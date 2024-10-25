import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/news.css";
import { Link } from "react-router-dom";

const News = ({ isMainpage }) => {
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
            display: 100,
            sort: "sim",
          },
          headers: {
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": client_secret,
          },
        });

        const items = res.data.items;
        // setArticles(items); // articles 상태 변수에 아이템 저장
        const modifiedItems = items.map((item) => {
          const title = item.title
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "")
            .replace(/quot/g, '"');
          const description = item.description
            .replace(/<b>/g, "")
            .replace(/&amp;/g, "&")

            .replace(/&quot;/g, '"')
            .replace(/<\/b>/g, "");

          // pubDate 값을 Date 객체로 변환
          const pubDateObj = new Date(item.pubDate);

          // 년, 월, 일 추출
          const year = pubDateObj.getFullYear();
          const month = pubDateObj.getMonth() + 1;
          const day = pubDateObj.getDate();

          // 년월일 형식으로 조합
          const pubDate = `${year}-${month < 10 ? "0" + month : month}-${
            day < 10 ? "0" + day : day
          }`;

          return { ...item, title, description, pubDate };
        });
        setArticles(modifiedItems);
      } catch (e) {
        console.log(e);
      }
    };
    fetchEvents();
  }, []);
  // 특수문자 제거
  let tempArticles = articles.map((article) => {
    let modifiedTitle = article.title.replace(/[^a-zA-Z0-9가-힣\s]/g, "");
    return { ...article, title: modifiedTitle };
  });

  let uniqueTitles = Array.from(
    new Set(tempArticles.map((item) => item.title))
  ).map((title) => {
    return tempArticles.find((item) => item.title === title);
  });

  console.log(tempArticles);
  useEffect(() => {
    // 리사이즈 이벤트 핸들러 함수
    const handleResize = () => {
      let bodyHeight = window.innerHeight;
      let newslinkHeight = document.querySelector(".newslink").offsetHeight;
      let newsMainTitleHeight =
        document.querySelector(".newsMainTitle").offsetHeight;
      let footerHeight = document.querySelector("footer").offsetHeight;
      let headerHeight = document.querySelector("header").offsetHeight;
      let newsMainWrapHeight =
        bodyHeight -
        newslinkHeight -
        newsMainTitleHeight -
        footerHeight -
        headerHeight;
      document.querySelector(".newsMainWrap").style.height =
        newsMainWrapHeight - 140 + "px";
    };

    // 초기 실행
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 리사이즈 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className={isMainpage ? "newsHeader123" : "newsHeader"}>
        <Header />
      </header>
      <section className="newsSection">
        {/* 뉴스 탭메뉴 */}
        <div className="newslink">
          <div>
            <Link to="/Introductio">회사소개</Link>
            <Link>NEWS</Link>
          </div>
        </div>
        {/* 뉴스 타이틀 */}
        <div className="newsMainTitle">
          <h2>LAMILAB NEWS</h2>
        </div>
        <div className="newsMainWrap">
          <div>
            {uniqueTitles.map((article, index) => (
              <a
                href={article.originallink}
                target="_blank"
                key={index}
                rel="noreferrer"
              >
                <div className="newsMaininfo">
                  <p>{article.title}</p>
                  <b>|</b>
                  <span>{article.pubDate}</span>
                </div>
                <div className="newsMaintext">
                  <p>{article.description}</p>
                  <img src="./img/newslink.svg" alt="" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;
