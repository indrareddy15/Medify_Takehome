const initialState = [
    {
        date: new Date(), // Today
        day: "Today",
        slots: {
            morning: [
                { time: "09:00 AM", availability: "available" },
            ],
            afternoon: [
                { time: "01:00 PM", availability: "available" },
                { time: "01:30 PM", availability: "booked" },
                { time: "02:00 PM", availability: "available" },
            ],
            evening: [
                { time: "05:00 PM", availability: "available" },
                { time: "05:30 PM", availability: "available" },
                { time: "06:00 PM", availability: "booked" },
            ],
        },
        timezone: "GMT+0", // Change as needed
    },
    {
        date: new Date(Date.now() + 86400000), // Tomorrow
        day: "Tomorrow",
        slots: {
            morning: [
                { time: "10:00 AM", availability: "available" },
                { time: "10:30 AM", availability: "available" },
                { time: "11:00 AM", availability: "available" },
                { time: "11:30 AM", availability: "available" },
            ],
            afternoon: [
                { time: "02:00 PM", availability: "available" },
                { time: "02:30 PM", availability: "available" },
                { time: "03:00 PM", availability: "booked" },
                { time: "03:30 PM", availability: "available" },
            ],
            evening: [
                { time: "06:00 PM", availability: "available" },
                { time: "06:30 PM", availability: "available" },
                { time: "07:00 PM", availability: "available" },
                { time: "07:30 PM", availability: "booked" },
            ],
        },
        timezone: "GMT+0",
    },
    {
        date: new Date('2024-04-12T00:00:00'), // Fri, 12 April
        day: "Fri, 12 April",
        slots: {
            morning: [
                { time: "09:00 AM", availability: "available" },
                { time: "09:30 AM", availability: "available" },
                { time: "10:00 AM", availability: "booked" },
            ],
            afternoon: [
                { time: "12:30 PM", availability: "available" },
                { time: "01:00 PM", availability: "available" },
                { time: "01:30 PM", availability: "booked" },
                { time: "02:00 PM", availability: "available" },
            ],
            evening: [
                { time: "04:30 PM", availability: "available" },
                { time: "05:00 PM", availability: "available" },
                { time: "05:30 PM", availability: "booked" },
                { time: "06:00 PM", availability: "available" },
            ],
        },
        timezone: "GMT+0",
    },
    // Continue for other days...
];

// You can access slots like this:
const todaySlots = initialState[0].slots;
const morningSlots = todaySlots.morning;
