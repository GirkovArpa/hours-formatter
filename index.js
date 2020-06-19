'use strict';

const test_data = [
  {
    name: "Bob's shop",
    hours: "Mon-Thu, Sun 11:30 am - 9:30 pm / Fri-Sat 11:30 am - 10 pm"
  },
  {
    name: "Karen's shop",
    hours: "Mon - Tues 4:30 pm - 11:15 pm / Weds - Thurs 10:15 am - 5 pm / Fri 5:15 am - 8:30 pm / Sat - Sun 10 am - 2:30 am"
  }
];

const days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'].map(abbr => abbr + 'day');
function getDaysBetween(day1, day2) {
  const start = days.indexOf(day1);
  const end = days.indexOf(day2) + 1;
  return [...days, ...days].slice(start, end < start ? end + days.length : end);
}
function sortDays(args) {
  return args.sort((day1, day2) => days.indexOf(day1) > days.indexOf(day2) ? 1 : -1);
}
function format(hours) {
  const regexes = days.map(day => `(\\b${day.slice(0, 2)}[a-z]+\\b)`);
  const regex = new RegExp(regexes.join('|'), 'gi');
  const match = hours.match(regex);
  const formatted = hours.replace(regex, match => days.find(day => day.startsWith(match.slice(0, 2).replace(/\w/, char => char.toUpperCase()))));
  const regex2 = new RegExp(`((${days.join('|')})(-| )+(${days.join('|')})(, )?(${days.join('|')})?)`, 'g');
  const regex3 = new RegExp(`(\\d+:?(\\d+)? ((a|p)m) - \\d+:?(\\d+)? ((a|p)m))`, 'g');
  const businessHours = formatted.match(regex3).map(hours => {
    hours = hours.toUpperCase().replace(/\d+(:\d+)?/g, match => {
      if (!match.includes(':')) {
        match += ':00';
      }
      return match;
    }).split(' - ');
    return hours;
  });
  const businessDays = [];
  formatted.replace(regex2, match => {
    if (match.includes('-')) {
      let matchedDays = match.match(new RegExp(`(${days.join('|')})`, 'g'));
      let betweenDays = getDaysBetween(matchedDays[0], matchedDays[1]);
      matchedDays[2] && betweenDays.push(matchedDays[2]);
      match = sortDays(betweenDays);
      businessDays.push(match);
    }
    return match;
  });
  const data = businessDays.map(list => {
    return {
      days: list.map(weekday => {
        const this_hours = businessHours[businessDays.indexOf(list)];
        return {
          day: weekday,
          from: this_hours[0],
          to: this_hours[1]
        }
      })
    };
  });
  let output = [];
  data.forEach(o => {
    output.push(o.days);
  });
  return output.flat(1);
}
test_data.forEach(datum => {
  datum.hours = format(datum.hours);
});

console.log(JSON.stringify(test_data, null, 2));