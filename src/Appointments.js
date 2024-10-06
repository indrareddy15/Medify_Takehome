const appointDates = [
    {
        day: "Today",
        morning: ["09:00 AM"],
        afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
        evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
    },
    {
        day: "Tomorrow",
        morning: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
        afternoon: ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    },
    {
        day: "Fri, 06 October",
        morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
        afternoon: ["12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
        evening: ["04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
    },
    {
        day: "Sat, 07 October",
        morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
        afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"],
        evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"],
    },
    {
        day: "Sun, 08 October",
        morning: ["08:00 AM", "08:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM"],
        evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
    },
    {
        day: "Mon, 09 October",
        morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
        afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
    },
    {
        day: "Tue, 10 October",
        morning: ["09:30 AM"],
        afternoon: ["01:00 PM"],
        evening: ["06:00 PM", "06:30 PM"],
    },
    {
        day: "Wed, 11 October",
        morning: ["10:00 AM", "10:30 AM", "11:00 AM"],
        afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
        evening: ["05:00 PM", "05:30 PM"],
    },
    {
        day: "Thu, 12 October",
        morning: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:00 PM"],
        evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
    },
    {
        day: "Fri, 13 October",
        morning: ["09:00 AM", "09:30 AM"],
        afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
        evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
    },
    {
        day: "Sat, 14 October",
        morning: ["09:00 AM", "09:30 AM"],
        afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
        evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
    },
    {
        day: "Sun, 15 October",
        morning: ["08:00 AM", "08:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:00 PM"],
        evening: ["04:00 PM", "04:30 PM", "05:00 PM"],
    },
    {
        day: "Mon, 16 October",
        morning: ["09:00 AM", "09:30 AM"],
        afternoon: ["01:00 PM", "01:30 PM"],
        evening: ["05:00 PM", "05:30 PM"],
    },
    {
        day: "Tue, 17 October",
        morning: ["09:00 AM", "09:30 AM"],
        afternoon: ["01:00 PM"],
        evening: ["06:00 PM", "06:30 PM"],
    },
    {
        day: "Wed, 18 October",
        morning: ["10:00 AM", "10:30 AM"],
        afternoon: ["01:00 PM", "01:30 PM"],
        evening: ["05:00 PM", "05:30 PM"],
    },
    {
        day: "Thu, 19 October",
        morning: ["08:00 AM", "08:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM"],
        evening: ["04:00 PM", "04:30 PM", "05:00 PM"],
    },
    {
        day: "Fri, 20 October",
        morning: ["09:00 AM", "09:30 AM"],
        afternoon: ["01:00 PM", "01:30 PM"],
        evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
    },
];

export default appointDates;