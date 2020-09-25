export const scrollToElement = (id: string) => {
  var elmnt = document.querySelector(id);
  if (elmnt) {
    elmnt.scrollIntoView({ behavior: "smooth" });
  }
};
