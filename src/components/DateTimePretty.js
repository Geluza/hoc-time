import React from 'react';


export default function DateTimePretty(Component) {
  function DateTime(props) {
    const publishedDate = new Date(props.date);
    const currentDate = new Date();
    const hoursDiff = currentDate.getHours() - publishedDate.getHours();
    const minDiff = currentDate.getMinutes() - publishedDate.getMinutes();
    const diff = currentDate.getTime() - publishedDate.getTime();
    const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let date;
    if (daysDiff > 1) {
        date = `${daysDiff} день(дней) назад`;
    } else if (hoursDiff >= 1 && hoursDiff < 24) {
            date = '5 часов назад';
        } else if (minDiff < 60 && minDiff > 0) {
            date = '12 минут назад';
        }

    return <Component url={props.url} date={date} />
  }
  return DateTime;
}

