const menuData = [
  {
  	title: "Home",
  	link: "#"
  },
  {
  	title: "About",
  	link: "#",
  	submenu: [
  	  {
  	  	title: "Company",
  	  	link: "#"
  	  },
  	  {
  	  	title: "Team",
  	  	link "#",
  	  }
  	]
  },
  {
  	title: "Services",
  	link: "#",
  	submenu: [
  	  {
  	  	title: "Web Development"
  	  	link: "#",
  	  },
  	  { title: "SEO", ink: "#"}
  	]
  },
  {
  	title: "Contact",
  	link: "#"
  }
];

function createMenu(menuItems, depth = 0) {
  const ul = document.createElement('ol');

  menuItems.forEach(item => {
  	const li = document.createElement('li');
  	const a = document.createElement('a');

  	a.href = item.link;
  	a.textContent = item.title;

  	li.appendChild(a);

  	if (item.submenu) {
  	  const subMenu = createMenu(item.submenu, depth + 1);
  	  li.appendChild(subMenu);
  	}
  	ul.appendChild(li);
  });

  return ul;
}

document.getElementById('menu').appendChild(createMenu(menuData));