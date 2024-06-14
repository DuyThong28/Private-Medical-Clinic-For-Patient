import { useRef } from "react";
import RescordHistoryModal from "./RecordHistoryModal";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import { fetchAllDisease } from "../services/diseases";
import { fetchAppointmentRecordByPatientId } from "../services/appointmentRecords";
import { useQuery } from "@tanstack/react-query";
import { convertDate } from "../services/date";

export default function HistoryTab({ patientId }) {
  const modalRef = useRef();
  const appointmentRecordsMutate = useQuery({
    queryKey: ["record"],
    queryFn: async () => fetchAppointmentRecordByPatientId({ patientId }),
  });
  const recordHistory = appointmentRecordsMutate.data;
  function getDiseaseName({ id }) {
    const res = diseaseState.filter((disease) => disease.id == id);
    return res[0]?.diseaseName ?? "";
  }
  const diseasesQuery = useQuery({
    queryKey: ["diseases"],
    queryFn: fetchAllDisease,
  });

  const diseaseState = diseasesQuery.data;
  async function showRecordHandler({ id }) {
    await modalRef.current.show({ id });
  }
  return (
    <>
      <RescordHistoryModal ref={modalRef} />
      <div className="w-100 h-100 d-flex flex-column gap-3">
        <TableHeader className="table-header-blue">
          <div className="text-start" style={{ width: "20%" }}>
            Mã phiếu khám
          </div>
          <div className="text-start" style={{ width: "29%" }}>
            Ngày khám
          </div>
          <div className="text-start" style={{ width: "40%" }}>
            Loại bệnh
          </div>
          <div className="text-end" style={{ width: "10%" }}>
            Thao tác
          </div>
          <div style={{ width: "1%" }}></div>
        </TableHeader>
        <TableBody>
          {recordHistory && recordHistory.length > 0 ? (
            recordHistory.map((record) => {
              return (
                <li
                  className="list-group-item list-group-item-primary list-group-item-action w-100 d-flex flex-row"
                  key={record.id}
                >
                  <div className="text-start" style={{ width: "20%" }}>
                    {record.id}
                  </div>
                  <div className="text-start" style={{ width: "30%" }}>
                    {convertDate(record.appointmentList.scheduleDate)}
                  </div>
                  <div className="text-start" style={{ width: "40%" }}>
                    {getDiseaseName({ id: record.diseaseId })}
                  </div>
                  <div className="text-end" style={{ width: "10%" }}>
                    <span
                      className="p-2"
                      onClick={() => showRecordHandler({ id: record.id })}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#646565"
                        className="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                      </svg>
                    </span>
                  </div>
                </li>
              );
            })
          ) : (
            <div className="position-relative w-100 h-100">
              <h5 className="position-absolute top-50 start-50 translate-middle fw-bold text-dark">
                Không có phiếu khám bệnh
              </h5>
            </div>
          )}
        </TableBody>
      </div>
    </>
  );
}
