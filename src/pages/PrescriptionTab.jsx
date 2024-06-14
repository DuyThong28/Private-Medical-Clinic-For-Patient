import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import { formatNumber } from "../services/money";
import { fetchRecordDetailByRecordId } from "../services/appointmentRecordDetails";
import { fetchAllDrugs } from "../services/drugs";
import { fetchAllUnit } from "../services/units";
import { fetchAllUsage } from "../services/usage";

export default function PreScriptionTab({
  recordId,
  isEditable,
  setExpense,
  isBill,
}) {
  const [currentPresciptionData, setCurrentPrescriptionData] = useState([]);

  const unitsQuery = useQuery({
    queryKey: ["units"],
    queryFn: fetchAllUnit,
  });

  const usageQuery = useQuery({
    queryKey: ["usages"],
    queryFn: fetchAllUsage,
  });

  const drugsQuery = useQuery({
    queryKey: ["drugs"],
    queryFn: fetchAllDrugs,
  });

  const drugState = drugsQuery.data;
  const unitState = unitsQuery.data;
  const usagaState = usageQuery.data;

  function getUnitName({ id }) {
    const res = unitState.filter((unit) => unit.id === id)[0];
    return res?.unitName || "";
  }

  function getUsageDes({ id }) {
    const res = usagaState.filter((usage) => {
      return usage.id == id;
    })[0];
    return res?.usageDes || "";
  }

  const recordDetailMutate = useMutation({
    mutationFn: fetchRecordDetailByRecordId,
    onSuccess: (data) => {
      const recordDetailData =
        data &&
        data.map((record) => {
          const drugData = drugState.filter(
            (drug) => drug.id === record.drugId
          );
          const recordDetail = {
            id: record.drugId,
            drugName: drugData[0]?.drugName,
            amount: record.count,
            note: drugData[0].note,
            unitId: drugData[0]?.unitId,
            usageId: record.usageId,
            count: drugData[0]?.count,
            price: record.drugPrice,
            totalPrice: record.count * record.drugPrice,
          };
          if (setExpense) {
            setExpense({ totalPrice: recordDetail?.totalPrice });
          }
          return recordDetail;
        });

      setCurrentPrescriptionData(() => {
        return recordDetailData;
      });
    },
  });

  useEffect(() => {
    if (recordId) {
      recordDetailMutate.mutate({ id: recordId });
    }
  }, [recordId]);

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <TableHeader className="table-header-blue">
        <div className="text-start" style={{ width: "5%" }}>
          STT
        </div>
        <div className="text-start" style={{ width: isBill ? "19%" : "22%" }}>
          Thuốc
        </div>
        <div className="text-start" style={{ width: isBill ? "10%" : "15%" }}>
          Số lượng
        </div>
        <div className="text-start" style={{ width: isBill ? "10%" : "15%" }}>
          Đơn vị
        </div>
        <div className="text-start" style={{ width: isBill ? "35%" : "30%" }}>
          Cách dùng
        </div>
        {isBill && (
          <>
            <div className="text-start" style={{ width: "10%" }}>
              Đơn giá
            </div>
            <div className="text-start" style={{ width: "10%" }}>
              <div style={{ width: "10rem" }}>Thành tiền</div>
            </div>
          </>
        )}
        {isEditable && (
          <div className="text-end" style={{ width: "10%" }}>
            Thao tác
          </div>
        )}
        <div style={{ width: "1%" }}></div>
      </TableHeader>
      <TableBody isEditable={!isEditable}>
        {currentPresciptionData.map((drug) => {
          return (
            <li
              className="list-group-item list-group-item-primary list-group-item-action w-100 d-flex flex-row"
              key={drug.id}
            >
              <div className="text-start" style={{ width: "5%" }}>
                {currentPresciptionData.indexOf(drug) + 1}
              </div>
              <div
                className="text-start"
                style={{ width: isBill ? "20%" : "23%" }}
              >
                {drug.drugName}
                {drug.note && (
                  <>
                    <span>{" (" + drug.note + " )"}</span>
                  </>
                )}
              </div>
              <div
                className="text-start"
                style={{ width: isBill ? "10%" : "15%" }}
              >
                {drug.amount}
              </div>
              <div
                className="text-start"
                style={{ width: isBill ? "10%" : "15%" }}
              >
                {getUnitName({ id: drug.unitId })}
              </div>
              <div
                className="text-start"
                style={{ width: isBill ? "35%" : "30%" }}
              >
                {getUsageDes({ id: drug.usageId })}
              </div>
              {isBill && (
                <>
                  <div className="text-start" style={{ width: "10%" }}>
                    {formatNumber(drug.price)}
                  </div>
                  <div className="text-start" style={{ width: "10%" }}>
                    {formatNumber(drug.totalPrice)}
                  </div>
                </>
              )}
            </li>
          );
        })}
      </TableBody>
    </div>
  );
}
