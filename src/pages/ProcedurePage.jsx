import './ProcedurePage.scss'
import Step from '../components/Step'

export default function ProcedurePage() {
    return <div className="h-100 w-100 MainContainer">
        <div className='header'>
            <div className="overlay"></div>
            <p className="header-text">QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH</p>
        </div>
        <div className='body'>
            <Step number={1} title={"ĐẶT LỊCH KHÁM"}>
                <ul>
                    <li>Đăng nhập phần mềm trên web hoặc ứng dụng di động.</li>
                    <li>Chọn hình thức đặt khám: Theo ngày hoặc theo bác sĩ.</li>
                    <li>Nhập thông tin bệnh nhân: Bằng số hồ sơ hoặc tạo mới.</li>
                    <li>Chọn thông tin khám: Chuyên khoa, bác sĩ, ngày khám, giờ khám và có BHYT hay không.</li>
                </ul>
            </Step>
            <Step number={2} title={"THANH TOÁN TIỀN KHÁM"}>
                <ul>
                    <li>Chọn loại thẻ thanh toán: Thẻ khám bệnh của bệnh viện Đại Học Y Dược TPHCM, thẻ thanh toán quốc tế hoặc thẻ ATM nội địa.</li>
                    <li>Kiểm tra tiền khám, các loại phí và tổng tiền thanh toán.</li>
                    <li>Nhập thông tin thẻ để tiến hành thanh toán.</li>
                    <li>Chọn thông tin khám: Chuyên khoa, bác sĩ, ngày khám, giờ khám và có BHYT hay không.</li>
                </ul>
                <p className='fw-bold' style={{marginLeft: 20,marginTop: 10, marginBottom: 10 , color: "black"}}>Lưu ý</p>
                <ul>
                    <li className='fst-italic'>Thanh toán bằng thẻ khám bệnh của Bệnh viện Đại học Y Dược TPHCM, phí tiện ích sẽ có mức thấp nhất.</li>
                    <li className='fst-italic'>Đối với thẻ khám Bệnh viện Đại học Y Dược TPHCM, vui lòng đăng ký chức năng thanh toán trực tuyến tại các chi nhánh Vietinbank trong cả nước, trước khi sử dụng.</li>
                </ul>
            </Step>
            <Step number={3} title={"XÁC NHẬN NGƯỜI BỆNH ĐẾN BỆNH VIỆN KHÁM THEO HẸN"}>
                <ul>
                    <li>Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.</li>
                    <li className='fw-bold' style={{marginLeft: 20, color: "black"}}> Đến ngày khám,</li>
                    <li style={{marginLeft: 40}}>Người bệnh không BHYT sẽ đến trực tiếp phòng khám trước giờ hẹn 15-30 phút để khám bệnh .</li>
                    <li style={{marginLeft: 40}}>Người bệnh khám BHYT vui lòng đến quầy 12,13,14 khu A trước giờ hẹn 15-30 phút để xác nhận bảo hiểm trước khi vào phòng khám .</li>
                </ul>
            </Step>
        </div>
    </div>
}
