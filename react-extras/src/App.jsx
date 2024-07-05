import React from 'react';
import './app.css';

function App() {
  const [years, setYears] = React.useState(0);
  const [months, setMonths] = React.useState(0);
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  function splitData(data) {
    const date = new Date(data);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    };
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      const ourDay = splitData('18 Jun 2019'); // '18 Jun 2019' = '18/06/2019'
      const now = splitData(new Date());

      setSeconds(now.second - ourDay.second);
      setMinutes(now.minute - ourDay.minute);
      setHours(now.hour - ourDay.hour);
      if (ourDay.day - now.day < 0) {
        setDays(now.day - ourDay.day);
        setMonths(now.month - ourDay.month);
        setYears(now.year - ourDay.year);
      } else if (ourDay.day - now.day === 0) {
        setDays(ourDay.day - now.day);
        setMonths(now.month - ourDay.month);
        setYears(now.year - ourDay.year);
      } else {
        setDays(30 - (ourDay.day - now.day));
        setMonths(12 - (now.month - ourDay.month));
        setYears(now.year - ourDay.year - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [years, months, days, hours, minutes, seconds]);

  return (
    <div className="content">
      <ul>
        <li>
          <span className="data">{years.toString().padStart(2, '0')}</span>
          <span>{years > 1 || years === 0 ? 'anos' : 'ano'}</span>
        </li>
        <li>
          <span className="data">{months.toString().padStart(2, '0')}</span>
          <span>{months > 1 || months === 0 ? 'meses' : 'mes'}</span>
        </li>
        <li>
          <span className="data">{days.toString().padStart(2, '0')}</span>
          <span>{days > 1 || days === 0 ? 'dias' : 'dia'}</span>
        </li>
        <li>
          <span className="data">{hours.toString().padStart(2, '0')}</span>
          <span>{'h'}</span>
        </li>
        <li>
          <span className="data">{minutes.toString().padStart(2, '0')}</span>
          <span>{'min'}</span>
        </li>
        <li>
          <span className="data">{seconds.toString().padStart(2, '0')}</span>
          <span>{'s'}</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
