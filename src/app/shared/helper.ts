import * as moment from 'moment';

export function formatDateTime(datetime: string): string {
  if (datetime && moment(datetime).isValid()) {
    return moment(datetime).format('MMM DD, YYYY, h:mm:ss A');
  } else {
    return '';
  }
}
