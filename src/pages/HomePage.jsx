import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import "./HomePage.scss"
import ActionItem from "../components/ActionItem";
import tracuImg from "../assets/image/tra_cuu.png"
import datlichImg from "../assets/image/dat_lich.png"
import SupportItem from "../components/SupportItem";

export default function HomePage() {
    return ( 
      <div className="h-100 w-100" style={{overflowY: "scroll", backgroundColor: "#fff"}}>
          <div className="body-background w-100">

          </div>
          <div className="home-body w-100 ">
              <div className="w-100 d-flex" style={{padding:"0 0 60px"}}>
                  <ActionItem image={tracuImg} title={"TRA CỨU THÔNG TIN"} description={"Tra cứu thông tin đặt chỗ, thông tin bệnh nhân, lịch khám ..."} titleButton={"Tra cứu"}/>
                  <ActionItem image={datlichImg} title={"ĐẶT LỊCH KHÁM BỆNH"} description={"Đặt lịch khám ..."} titleButton={"Đặt lịch"}/>
              </div>
              <div className="body-support w-100">
                    <p style={{textAlign:"center", margin:0}}><span className="support-title">HỖ TRỢ</span></p>
                    <h3 className="support-methods">CÁC HÌNH THỨC HỖ TRỢ</h3>
                    <div className="d-flex">
                        <SupportItem img={"https://medpro.vn/umc1/static/media/support.08dda31d.svg"} supportName={"Hỗ trợ đặt khám"} supportLink={"1900-2115"} link={""}/>
                        <SupportItem img={"https://medpro.vn/umc1/static/media/facebook.e2d57020.svg"} supportName={"Fanpage Facebook"} supportLink={"Bấm vào đây"} link={"https://www.facebook.com/profile.php?id=61558487786531"}/>
                        <SupportItem img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtcEHE3Gr1eQZHsB-EL-tToo93sckoltR4A&s"} supportName={"Chat Facebook"} supportLink={"Bấm vào đây"} link={"http://m.me/284221341439741"}/>
                    </div>
              </div>
          </div>
          <div className="home-footer w-100 d-flex">
              <FontAwesomeIcon icon={faHospital} fontSize="5rem" style={{width: "20%"}}/>
              <div className="web-info">
                  <p style={{fontSize: "1rem", color: "#1b59f8", fontWeight:"bold"}}>private medical clinic</p>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
              </div>
              <ul className="footer-info">
                <li>Liên hệ</li>
                <li>Điều khoản dịch vụ</li>
                <li>Chính sách bảo mật</li>
                <li>Quy định sử dụng</li>
              </ul>
          </div>
          <div className="contact d-flex">
            <FontAwesomeIcon icon={faPhone} color="#1b59f8" fontSize="1.25rem"/>
          </div>
      </div>
    );
  }
  