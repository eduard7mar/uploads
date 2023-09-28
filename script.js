const upload = document.querySelectorAll('[name="upload"]'); //If you have multiple uploads on the page

upload.forEach((item) => {
    item.addEventListener("input", () => {
      console.log(item.files[0]); //Name of the first file
      let dots;
      const arr = item.files[0].name.split("."); //Splits the file name into an array of 2 elements (name + format)

      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });