import "./IntroductionPage.scss"

export default function IntroductionPage() {
    return (
      <div className="h-100 w-100" style={{backgroundColor:"#fff", overflowY:"scroll" }}>
        <div className="intro-header w-100">
          <div style={{padding: "60px 0 80px"}}>
            <h1 style={{color: "#fff", fontSize: "2.25rem", textAlign: "center"}}>GIỚI THIỆU</h1>
          </div>
        </div>
        <div className="intro-body w-100">
            <div className="body-content">
              <p>
                  Chào mừng bạn đến với Bệnh viện Đại học Y Dược Thành phố Hồ Chí Minh, nơi chúng tôi cam kết cung cấp dịch vụ chăm 
                  sóc sức khỏe hàng đầu và tiện lợi cho cộng đồng. Chúng tôi tự hào giới thiệu ứng dụng đăng ký khám bệnh trực tuyến UMC, 
                  được phát triển bởi nền tảng Medpro nhằm mang đến một giải pháp tiếp cận y tế thông minh cho bạn và cả gia đình.
              </p>
              <p>
                Medpro, UMC – Đăng Ký Khám Bệnh Online là các ứng dụng thông minh giúp bạn quản lý sức khỏe cá nhân một cách dễ dàng
                và hiệu quả. Với triết lý lấy người dùng làm trung tâm, Bệnh viện Đại học Y Dược Thành phố Hồ Chí Minh cùng với Mepro đã 
                thiết kế ứng dụng này để mang đến trải nghiệm tốt nhất cho bạn thông qua sự kết hợp của nhiều công nghệ số khác nhau và 
                các quy trình quản trị tại cơ sở y tế, phù hợp với môi trường chăm sóc sức khỏe mở, linh hoạt và trực tuyến.
              </p>
              <p>UMC có nhiều tính năng nổi bật như:</p>
              <ul style={{listStyle: "inherit", margin:"0 0 1rem 2rem"}}>
                <li><span style={{fontWeight:"bold"}}>Đăng ký khám bệnh trực tuyến:</span> Với tính năng này, bạn có thể đăng ký khám bệnh qua Medpro và các ứng dụng khám bệnh: 
                  Medpro, UMC – Đăng Ký Khám Bệnh Online, UMC Care, mà không cần phải đến bệnh viện và xếp hàng chờ đợi. Thậm chí bạn còn 
                  có thể đặt lịch khám theo ngày hoặc theo bác sĩ trực tuyến, giúp bạn linh hoạt trong việc chọn thời gian phù hợp.
                </li>
                <li><span style={{fontWeight:"bold"}}>Thanh toán tiền khám bệnh:</span> Thao tác thanh toán tiền khám cũng trở nên dễ dàng hơn bao giờ hết. Bạn có thể lựa chọn từ nhiều 
                  hình thức thanh toán như thẻ quốc tế, thẻ ATM nội địa, Internet Banking, ví điện tử, QR code/Mobile Banking,....
                </li>
                <li><span style={{fontWeight:"bold"}}>Tạo hồ sơ bệnh nhân:</span> Ứng dụng cho phép bạn tạo hồ sơ cá nhân của mình để theo dõi sức khỏe và lịch sử bệnh lý. Thông tin từ hồ 
                  sơ này sẽ giúp bác sĩ hiểu rõ hơn về tình trạng sức khỏe của bạn và cung cấp các phương pháp chữa trị phù hợp.
                </li>
                <li><span style={{fontWeight:"bold"}}>Quản lý hồ sơ bệnh nhân:</span> Bạn có thể dễ dàng cập nhật và theo dõi thông tin y tế của mình qua ứng dụng, giúp bạn tự quản lý sức 
                  khỏe một cách tối ưu.
                </li>
                <li><span style={{fontWeight:"bold"}}>Quản lý phiếu khám bệnh:</span> Thông qua tính năng này, bạn có thể theo dõi lịch hẹn và quản lý phiếu khám bệnh của mình. Điều này đảm
                  bảo bạn không bỏ lỡ bất kỳ cuộc hẹn nào và tiết kiệm thời gian chờ đợi.
                </li>
                <li><span style={{fontWeight:"bold"}}>Quản lý lịch hẹn tái khám:</span> Nếu bạn có hẹn tái khám với bác sĩ sau khi đã khám bệnh, ứng dụng sẽ lưu trữ lịch tái khám của bạn 
                  và thông báo khi tới ngày hẹn, giúp bạn theo dõi quá trình điều trị một cách chính xác.
                </li>
                <li><span style={{fontWeight:"bold"}}>
                  Nhận thông báo từ bệnh viện:</span> Bệnh viện Đại học Y Dược Thành phố Hồ Chí Minh sẽ cập nhật cho bạn thông tin và tin tức mới nhất 
                  qua ứng dụng. Điều này giúp bạn luôn nắm bắt thông tin y tế quan trọng và sự phát triển của bệnh viện, đồng thời cảm giác yên 
                  tâm hơn khi đến thăm khám tại bệnh viện.
                </li>
              </ul>
              <p>
                Ứng dụng UMC – Đăng Ký Khám Bệnh Online được phát triển bởi nền tảng đặt khám nhanh Medpro, cho phép bạn tận hưởng một loạt tiện
                ích không chỉ để quản lý sức khỏe cá nhân mà còn để tiết kiệm thời gian và tạo điều kiện thuận lợi cho cuộc sống của bạn. Với khả
                năng đặt lịch khám bệnh trực tuyến, bạn không còn phải lo lắng về việc xếp hàng và chờ đợi. Hãy để chúng tôi và ứng dụng UMC hỗ 
                trợ bạn trong hành trình chăm sóc sức khỏe của mình.
              </p>
              <p>
                Hãy trải nghiệm và sử dụng ứng dụng UMC – Đăng Ký Khám Bệnh Online để tận hưởng sức khỏe tốt hơn và cuộc sống thuận lợi hơn. 
                Chúng tôi luôn sẵn sàng phục vụ bạn một cách tận tâm và chuyên nghiệp.
              </p>
              <p>Cảm ơn bạn đã đồng hành cùng Bệnh viện Đại học Y Dược Thành phố Hồ Chí Minh và Medpro. Trân trọng!</p>
            </div>
        </div>
      </div>
    );
  }
  