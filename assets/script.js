
function getListItems() {
  return Array.from(document.querySelectorAll("#file-list li"));
}

function sortByName() {
  const list = document.getElementById("file-list");
  const items = getListItems();

  items.sort((a, b) =>
    a.dataset.title.localeCompare(b.dataset.title)
  );

  items.forEach(item => list.appendChild(item));
}

function sortByModified() {
  const list = document.getElementById("file-list");
  const items = getListItems();

  items.sort((a, b) =>
    Number(b.dataset.modified) - Number(a.dataset.modified)
  );

  items.forEach(item => list.appendChild(item));
}
