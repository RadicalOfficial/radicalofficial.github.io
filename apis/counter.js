fetch("/apis/count.json")
  .then(response => res.json())
  .then(json => {
    var number = [
      {
        "count": json.numbers[0],
      }
    ];
    var users = json;
    users.push(number);
  })
