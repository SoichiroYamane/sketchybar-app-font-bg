fetch('./dist/icon_map.json')
  .then(response => response.json())
  .then(iconData => {
    const iconGrid = document.getElementById('iconGrid');
    iconData.forEach(icon => {
      const container = document.createElement('div');
      container.classList.add('icon-container');

      const title = document.createElement('span');
      title.classList.add('icon-title');
      title.textContent = icon.iconName.replace(/^:+|:+$/g, '');

      const iconElement = document.createElement('span');
      iconElement.classList.add('icon');
      iconElement.textContent = icon.iconName;

      container.appendChild(title);
      container.appendChild(iconElement);
      iconGrid.appendChild(container);
    });
  })
  .catch(error => console.error('Error loading icons:', error));


