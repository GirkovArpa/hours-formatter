Turn this:

```javascript
[
  {
    name: "Bob's shop",
    hours: "Mon-Thu, Sun 11:30 am - 9:30 pm / Fri-Sat 11:30 am - 10 pm"
  },
  {
    name: "Karen's shop",
    hours: "Mon - Tues 4:30 pm - 11:15 pm / Weds - Thurs 10:15 am - 5 pm / Fri 5:15 am - 8:30 pm / Sat - Sun 10 am - 2:30 am"
  }
];
```

Into this:

```javascript
[
  {
    "name": "Bob's shop",
    "hours": [
      {
        "day": "Sunday",
        "from": "11:30 AM",
        "to": "9:30 PM"
      },
      {
        "day": "Monday",
        "from": "11:30 AM",
        "to": "9:30 PM"
      },
      {
        "day": "Tuesday",
        "from": "11:30 AM",
        "to": "9:30 PM"
      },
      {
        "day": "Wednesday",
        "from": "11:30 AM",
        "to": "9:30 PM"
      },
      {
        "day": "Thursday",
        "from": "11:30 AM",
        "to": "9:30 PM"
      },
      {
        "day": "Friday",
        "from": "11:30 AM",
        "to": "10:00 PM"
      },
      {
        "day": "Saturday",
        "from": "11:30 AM",
        "to": "10:00 PM"
      }
    ]
  },
  {
    "name": "Karen's shop",
    "hours": [
      {
        "day": "Monday",
        "from": "4:30 PM",
        "to": "11:15 PM"
      },
      {
        "day": "Tuesday",
        "from": "4:30 PM",
        "to": "11:15 PM"
      },
      {
        "day": "Wednesday",
        "from": "10:15 AM",
        "to": "5:00 PM"
      },
      {
        "day": "Thursday",
        "from": "10:15 AM",
        "to": "5:00 PM"
      },
      {
        "day": "Sunday",
        "from": "5:15 AM",
        "to": "8:30 PM"
      },
      {
        "day": "Saturday",
        "from": "5:15 AM",
        "to": "8:30 PM"
      }
    ]
  }
]
```