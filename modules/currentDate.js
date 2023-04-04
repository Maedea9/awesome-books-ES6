import { DateTime } from './luxon.js';

const currentDate = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('datetime').innerHTML = date;
};

export default currentDate;