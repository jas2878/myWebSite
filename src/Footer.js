import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <div className="footerlogo">
          {/* <img src="./img/footerlogo.svg" alt="" /> */}
          <svg
            width="160"
            height="37"
            viewBox="0 0 137 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="Solutionlogo"
              d="M116.49 21.58H109.84L108.74 25.11H105.23L111.23 6.53003H115.13L121.13 25.11H117.59L116.49 21.58ZM115.58 18.6L113.16 10.84L110.74 18.6H115.57H115.58Z"
              fill="white"
            ></path>
            <path
              className="Solutionlogo"
              d="M135.169 17.17C135.779 18.02 136.079 19.0001 136.079 20.0901C136.079 21.0801 135.859 21.9501 135.419 22.7101C134.979 23.4701 134.349 24.0501 133.519 24.4801C132.689 24.9101 131.709 25.1201 130.579 25.1201H123.379V6.57007H130.269C131.399 6.57007 132.379 6.77005 133.199 7.18005C134.019 7.59005 134.639 8.15007 135.059 8.88007C135.479 9.61007 135.689 10.4301 135.689 11.3501C135.689 12.4301 135.429 13.3301 134.909 14.0601C134.389 14.7901 133.699 15.3001 132.839 15.6001C133.779 15.7901 134.559 16.32 135.159 17.17H135.169ZM126.729 14.2201H129.789C130.589 14.2201 131.199 14.0201 131.629 13.6201C132.059 13.2201 132.279 12.6501 132.279 11.9101C132.279 11.1701 132.059 10.5901 131.629 10.1801C131.199 9.77005 130.589 9.57007 129.789 9.57007H126.729V14.2201ZM132.009 21.45C132.459 21.03 132.689 20.42 132.689 19.64C132.689 18.86 132.449 18.2201 131.969 17.7601C131.489 17.3001 130.849 17.08 130.029 17.08H126.729V22.08H130.099C130.909 22.08 131.549 21.8701 131.999 21.4401L132.009 21.45Z"
              fill="white"
            ></path>
            <path
              className="Solutionlogo"
              d="M36.7797 21.33C36.7797 21.79 37.1597 22.17 37.6197 22.17H44.9497L43.9997 25.1201H36.1897C34.6697 25.1201 33.4297 23.89 33.4297 22.36V6.57007H36.7797V21.33Z"
              fill="white"
            ></path>
            <path
              className="Solutionlogo"
              d="M57.438 21.58H50.788L49.688 25.11H46.168L52.168 6.53003H56.068L62.068 25.11H58.528L57.428 21.58H57.438ZM56.528 18.6L54.108 10.84L51.688 18.6H56.518H56.528Z"
              fill="white"
            ></path>
            <path
              className="Solutionlogo"
              d="M82.5303 6.57007V25.1201H79.1803V13.05L74.7103 25.1201H72.1703L67.6703 13.05V25.1201H64.3203V6.57007H68.1203L73.4303 20.36L78.7403 6.57007H82.5203H82.5303Z"
              fill="white"
            ></path>
            <path
              className="Solutionlogo"
              d="M89.1781 6.57007V25.1201H85.8281V6.57007H89.1781Z"
              fill="white"
            ></path>
            <path
              className="Solutionlogo"
              d="M96.6705 22.17C96.2105 22.17 95.8305 21.79 95.8305 21.33V11.21L92.4805 13.8V22.36C92.4805 23.88 93.7105 25.12 95.2405 25.12H103.05L104 22.17H96.6705Z"
              fill="white"
            ></path>
            <path
              d="M95.8309 8.60007L92.4609 11.2101V6.57007H95.8309V8.60007Z"
              fill="#FF9833"
            ></path>
            <path
              d="M14.2209 0.0599976V2.20999L8.71094 7.72V0.699997C10.0309 0.249997 11.4509 0 12.9209 0C13.3509 0 13.7909 0.0199976 14.2109 0.0599976H14.2209Z"
              fill="#FF9833"
            ></path>
            <path
              className="Solutionlogo"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2106 21.24H22.8206C24.5706 18.59 25.8506 15.7 25.8506 12.91C25.8506 6.21005 20.7606 0.700049 14.2206 0.0500488V2.20003L8.71056 7.71004V0.690048C3.64056 2.43005 0.000573102 7.25005 0.000573102 12.91C-0.0994269 21.7001 12.9206 31.66 12.9206 31.66C12.9206 31.66 15.4906 29.7 18.3306 26.74H18.2006C12.9806 26.74 8.71056 22.47 8.71056 17.25V10.39L14.2106 4.88005V17.25C14.2106 19.43 16.0206 21.24 18.2006 21.24H18.2106Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="footertext">
          <div>
            <div>
              <p>대표자</p>
              <span>박병용</span>
            </div>
            <div className="footeremail">
              <span>E-mail hlib.group@gmail.com</span>
              <span>TEL 010-5529-0514</span>
              <span>FAX 042-367-0524</span>
            </div>
          </div>
          <div className="footerlast">
            <div>
              <p>본점</p>
              <span>
                대전광역시 유성구 대학로 99, 산학연교육연구관 711호(충남대학교)
              </span>
            </div>
            <div>
              <p>연구소</p>
              <span>
                대전광역시 유성구 대학로 99, 산학연교육연구관 903호(충남대학교)
              </span>
            </div>
            <div>
              <p>지점</p>
              <span>부산광역시 동구 중앙대로 263, 1712호</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
