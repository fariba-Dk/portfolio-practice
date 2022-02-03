let cc = console.log;

let items = [
  { name: 'Soy milk', exDate: '2022-01-15' },
  { name: 'Sirloin', exDate: '2022-01-25' },
  { name: 'Chewy lentils', exDate: '2022-03-01' },
];

function formatDaysAgo(arr) {
  let value = '';
  let date = '';

  for (let i = 0; i < arr.length; i++) {
    value = arr[i].exDate;
    cc('Expiration date: ', value);

    date = new Date(value);
    cc(date);

    //creating an instance of relative time object
    let formatter = new Intl.RelativeTimeFormat();
    // Subtract the date with the current, divide to get number of days
    let deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);

    // Format days to string (rember to round off deltaDays)
    let result = formatter.format(Math.round(deltaDays), 'days');
    cc('this is when it expires: ', result);
  }
  return;
}
console.log(formatDaysAgo(items));
