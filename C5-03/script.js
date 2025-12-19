const currentHour = new Date().getHours();

const target = document.querySelector(".bg-time");
if(currentHour >= 5 && currentHour < 11) {
    target.classList.add("morning");
}
else if (currentHour >= 11 && currentHour < 17) {
    target.classList.add("daytime");
}
else {
    target.classList.add("night");
}
