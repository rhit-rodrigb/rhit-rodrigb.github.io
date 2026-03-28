//I got the idea for this by refrencing the ZyBook's readings 
//and noticing how clicking on something collapses or expands some text
//Where I learned it: https://www.w3schools.com/howto/howto_js_collapsible.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  loadBanner();

  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");

      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null; // collapse
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});