import menuLinks from '../../json/menuLinks.json'

export default function NavLinks() {

  return (
    <ul className="flex items-center gap-1 text-lg">
      {menuLinks?.map((menu, i) => (
        <li key={i} className="px-4 lg:px-8 hover:-translate-y-1 duration-200">
          <a href={menu.link}>{menu?.name}</a>
        </li>
      ))}
    </ul>
  );
}
