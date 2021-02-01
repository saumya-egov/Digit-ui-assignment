
import Selecthouseno from "./components/Selecthouseno";
import { config as complaintConfig } from "./complaintConfig";

const pgrCustomizations = {
  complaintConfig,
  getComplaintDetailsTableRows: ({ id, service, role, t }) => {
    if (role === "CITIZEN") {
      return {
        [window.i18next.t("CS_COMPLAINT_DETAILS_COMPLAINT_NO")]: id,
        
       // [window.i18next.t("House Number")]: service.Selecthouseno,
        [window.i18next.t("ES_CREATECOMPLAINT_ADDRESS")]: [
          window.i18next.t(service.address.landmark),
          window.i18next.t(

            service.address.locality.code.includes("_")
              ? service.address.locality.code.toUpperCase()
              : `PB_${service.address.city.toUpperCase()}_ADMIN_${service.address.locality.code}`
          ),
          window.i18next.t(service.Selecthouseno?service.Selecthouseno:"no house no. provided"),
          window.i18next.t(service.address.city),
          

        ],
      };
    }
    return {};
  },
};

const pgrComponents = {
 
  Selecthouseno:Selecthouseno
};
export { pgrCustomizations, pgrComponents };
