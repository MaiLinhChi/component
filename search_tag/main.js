const inputElement = document.querySelector(".search-input");
const removeAllElement = document.querySelector(".remove-btn");
const ulElement = document.querySelector(".search-list");
let listCourses = ["ReactJS", "NodeJS"];

// render
const render = () => {
    let html = listCourses.map((item, index) => {
        return `
                <li class="search-item">
                    <button class="tag-btn">
                        ${item}
                        <span class="search-close" onclick="handleRemove(${index})"><i class='bx bx-x'></i></span>
                    </button>
                </li>
        `
    }).join("");
    inputElement.value = "";
    inputElement.focus();
    ulElement.innerHTML = html;
}
render();

// add
const handleKeydown = (e) => {
    if(e.key === "Enter") {
        listCourses.push(e.target.value.trim());
        render();
    }
}
inputElement.addEventListener("keydown", handleKeydown);

// remove
const handleRemove = index => {
    listCourses.splice(index, 1);
    render();
} 

// remove all
removeAllElement.addEventListener("click", _ => {
    listCourses = [];
    render();
})
