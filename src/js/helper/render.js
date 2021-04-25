function loadComponent(songData, component) {
  const el = document.createElement('div');
  el.innerHTML = component(songData);
  return el.firstElementChild;
}

export function render(listData, component, $container) {
  listData.forEach(list => {
    $container.append(loadComponent(list, component));
  });
}
