import "./ContactPage.scss";
import logo from "../assets/logo.png";

export default function ContactPage() {
  return (
    <div className="h-100 w-100 MainContainer-Contact">
      <div className="row h-100">
        <div className="overlay"></div>
        <div className="MainContent-Contact">
          <p className="header-text">LIÊN HỆ VỚI CHÚNG TÔI</p>
          <p className="sub-header-text">
            Bạn đang quan tâm đến các dịch vụ của chúng tôi hoặc cần tư vấn!
          </p>
          <p className="sub-header-text">Chúng tôi luôn sẵn sàng giúp đỡ bạn</p>
          <div className="tag-area">
            {/* Thông tin chi tiết */}
            <div className="tag-contact">
              <p className="title">Thông tin chi tiết</p>
              <div className="detail">
                <svg
                  className="icon-dt"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M232 0c-39.8 0-72 32.2-72 72v8H72C32.2 80 0 112.2 0 152V440c0 39.8 32.2 72 72 72h.2 .2 .2 .2 .2H73h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H75h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H77h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H79h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H82h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H85h.2 .2 .2 .2H86h.2 .2 .2 .2H87h.2 .2 .2 .2H88h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H98h.2 .2 .2 .2H99h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2v0H456h8v0H568c39.8 0 72-32.2 72-72V152c0-39.8-32.2-72-72-72H480V72c0-39.8-32.2-72-72-72H232zM480 128h88c13.3 0 24 10.7 24 24v40H536c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v48H536c-13.3 0-24 10.7-24 24s10.7 24 24 24h56V440c0 13.3-10.7 24-24 24H480V336 128zM72 128h88V464h-.1-.2-.2-.2H159h-.2-.2-.2H158h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H154h-.2-.2-.2H153h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H150h-.2-.2-.2H149h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H146h-.2-.2-.2H145h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H142h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H139h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H136h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H133h-.2-.2-.2-.2-.2-.2-.2-.2H131h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H128h-.2-.2-.2-.2-.2-.2-.2-.2H126h-.2-.2-.2-.2-.2-.2-.2-.2H124h-.2-.2-.2-.2-.2-.2-.2-.2H122h-.2-.2-.2-.2-.2-.2-.2-.2H120h-.2-.2-.2-.2-.2-.2-.2-.2H118h-.2-.2-.2-.2-.2-.2-.2-.2H116h-.2-.2-.2-.2-.2-.2-.2-.2H114h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H111h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H108h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H105h-.2-.2-.2-.2H104h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H100h-.2-.2-.2-.2H99h-.2-.2-.2-.2H98h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H88h-.2-.2-.2-.2H87h-.2-.2-.2-.2H86h-.2-.2-.2-.2H85h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H82h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H79h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H77h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H75h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H73h-.2-.2-.2-.2-.2H72c-13.2 0-24-10.7-24-24V336h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V240h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V152c0-13.3 10.7-24 24-24zM208 72c0-13.3 10.7-24 24-24H408c13.3 0 24 10.7 24 24V336 464H368V400c0-26.5-21.5-48-48-48s-48 21.5-48 48v64H208V72zm88 24v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V168h24c8.8 0 16-7.2 16-16V136c0-8.8-7.2-16-16-16H344V96c0-8.8-7.2-16-16-16H312c-8.8 0-16 7.2-16 16z" />
                </svg>
                <div className="text-dt">
                  <p className="title-dt">Phòng khám Private Medical Clinic</p>
                  <p className="title-dt">Địa chỉ: Tp. HCM</p>
                </div>
              </div>
              <div className="detail">
                <svg
                  className="icon-dt"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
                <div className="text-dt">
                  <p className="title-dt">Hỗ trợ đặt lịch khám</p>
                  <p className="title-dt">0343 855 777</p>
                </div>
              </div>
            </div>
            {/* Các kênh hỗ trợ */}
            <div className="tag-contact">
              <p className="title">Các kênh hỗ trợ</p>
              <p className="describe">
                Liên hệ với chúng tôi qua các kênh hỗ trợ sau
              </p>
              <div className="icon">
                <img
                  className="icon-fb"
                  src="src/assets/facebook.png"
                  alt="facebook"
                ></img>
              </div>
              <p className="phone">0343 855 777</p>
            </div>
            {/* Thời gian làm việc */}
            <div className="tag-contact">
              <p className="title">Thời gian làm việc</p>
              <p className="describe">
                Thời gian làm việc từ thứ 2 đến Chủ nhật
              </p>
              <p className="describe">7:30 - 21:00</p>
              <div className="icon">
                <img
                  className="icon-fb"
                  src="src/assets/calendar.webp"
                  alt="calendar"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer-container">
        <div className="home-footer w-100">
          <div
            className="w-100 h-100 d-flex flex-row justify-content-between"
            style={{ borderBottom: "1px solid rgb(68 176 253)" }}
          >
            <div className="web-info d-flex flex-row align-items-lg-start gap-2">
              <ul>
                <li>
                  {" "}
                  <p
                    style={{
                      fontSize: "21px",
                      color: "rgb(69 177 255)",
                      fontWeight: "500",
                      margin: 0,
                      marginBottom: "2px",
                    }}
                  >
                    PRIVATE MEDICAL CLINIC
                  </p>
                </li>
                <li
                  style={{
                    fontSize: "19px",
                  }}
                >
                  Địa chỉ: Tp.Hồ Chí Minh
                </li>
                <li
                  style={{
                    fontSize: "19px",
                  }}
                >
                  Điện thoại: 0343855777
                </li>
                <li></li>
              </ul>
            </div>
            <div className="footer-info-container">
              <ul className="footer-info">
                <li>
                  {" "}
                  <p
                    style={{
                      color: "rgb(69 177 255)",
                      fontWeight: "600",
                      fontSize: "19px",
                      marginBottom: "2px",
                    }}
                  >
                    Tổng quan
                  </p>
                </li>
                <li>
                  <a href="./introduce">Giới thiệu </a>
                </li>
                <li>
                  <a href="./procedure">Quy trình</a>
                </li>
                <li>
                  <a href="./contact">Liên hệ</a>
                </li>
              </ul>
              <ul className="footer-info">
                <li>
                  {" "}
                  <p
                    style={{
                      color: "rgb(69 177 255)",
                      fontWeight: "600",
                      fontSize: "19px",
                      marginBottom: "2px",
                    }}
                  >
                    Dịch vụ
                  </p>
                </li>
                <li>
                  <a href="./booking">Đặt lịch</a>
                </li>
                <li>
                  <a href="./search">Tra cứu</a>
                </li>
              </ul>
              <ul className="footer-info">
                <li>
                  {" "}
                  <p
                    style={{
                      color: "rgb(69 177 255)",
                      fontWeight: "600",
                      fontSize: "19px",
                      marginBottom: "2px",
                    }}
                  >
                    Hỗ trợ
                  </p>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61558487786531"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="http://m.me/284221341439741" target="_blank">
                    Messenger
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact d-flex">
          <a href="http://m.me/284221341439741" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3.5rem"
              height="3.5rem"
              fill="#1b59f8"
              className="bi bi-messenger"
              viewBox="0 0 16 16"
              style={{ marginTop: "1px" }}
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
