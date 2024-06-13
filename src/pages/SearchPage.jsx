export default function SearchPage() {
  return (
    <div
      className="h-100 w-100"
      style={{ overflowY: "scroll", backgroundColor: "#fff" }}
    >
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
  );
}
