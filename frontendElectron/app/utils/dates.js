import Moment from 'moment';

export default {
    
    today: () => Moment().format('YYYY-MM-DD'),

    format: (date, format) => Moment(date).format(format || 'YYYY-MM-DDTHH:mm')
}