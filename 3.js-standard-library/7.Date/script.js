{
  const date1 = new Date();
  console.info(date1);

  const date2 = new Date(2024, 10, 10);
  console.info(date2);

  const date3 = new Date(2024, 9, 10, 10, 8, 10);
  console.info(date3);
}

{
  console.info(Date.now());

  const date3 = new Date(2024, 9, 10, 10, 8, 10);
  console.info(date3.getTime());

  const date2 = new Date(2024, 10, 10);
  console.info(date2.getTime());
}

{
  const time = Date.parse("2024-08-18T08:20:10.123+07:00");
  console.info(time);

  const waktu = new Date(time);
  console.info(waktu);
}

{
  const time = new Date();
  console.info(time.setFullYear(2019));

  console.info(time.getFullYear());
  console.info(time.getMonth());
  console.info(time.getDate());
  console.info(time.getDay());
  console.info(time.getHours());
  console.info(time.getMinutes());
  console.info(time.getSeconds());
  console.info(time.getMilliseconds());
  console.info(time.getTimezoneOffset());
}
