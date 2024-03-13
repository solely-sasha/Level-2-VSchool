axios
  .get("https://api.vschool.io/pokemon")
  .then((response) => {
    const data = response.data;
    showList(data.objects[0].pokemon);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const showList = (arr) => {
  const div = document.getElementById("container");
  for (let i = 0; i < arr.length; i++) {
    const list = document.createElement("ul");
    list.textContent = arr[i].name;
    div.appendChild(list);
  }
};
