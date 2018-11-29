import moment from 'moment';
import uuid from 'uuid';

export function setEvent({ title, date }) {
    return (
    JSON.stringify({
        title,
        date,
        id: uuid(),
    })
    );
}

export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()) {
        return dateString;
    }

    return parsed.format('D MMM YYYY');
}

export function getCountdownParts(eventDate){
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
    return{
        days:parseInt(duration.as('days')),
        hours:duration.get('hours'),
        minutes:duration.get('minutes'),
        seconds:duration.get('seconds'),
    }
}

export function formatedatetime(dateString) {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()) {
        return dateString;
    }

    return parsed.format('H:MM  A on DD MMM YYYY');
}