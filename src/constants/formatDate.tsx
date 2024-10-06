import moment from "moment";
import "moment/locale/es";
import "moment-timezone";

const formatDate = (dateString: string) => {
  const userTimeZone = moment.tz.guess();
  const formattedDate = moment
    .tz(dateString, userTimeZone)
    .locale("es")
    .format("DD MMMM YYYY, HH:mm");
  return formattedDate;
};

export default formatDate;