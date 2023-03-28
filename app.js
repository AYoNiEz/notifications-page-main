const unReadMessage = document.querySelectorAll(".unread");
const unread = document.getElementById("notification");
const markAll = document.querySelector(".mark_all");

unread.innerText = unReadMessage.length;

unReadMessage.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.remove("unread");
        const newUnreadMassage = document.querySelectorAll(".unread")
        unread.innerText=newUnreadMassage.length;
    })
})

markAll.addEventListener("click", () => {
    unReadMessage.forEach((e) =>{
        e.classList.remove("unread")
    })
    const newUnreadMassage = document.querySelectorAll(".unread");
    unread.innerText=newUnreadMassage.length;
})
