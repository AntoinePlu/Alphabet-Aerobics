import clsx from "clsx";

import routes from "lib/routes";

import Menu from "./Menu";
import Link from "./Link";

const MENU = [
  {
    route: routes.admin,
    label: "Control Center",
  },
  {
    route: routes.admin.collections,
    label: "Collections",
  },
  {
    route: routes.admin.designSystem,
    label: "Design System",
  },
];

export default function AdminMenu({ className, currentRoute, submenu }) {
  return (
    <aside className={clsx("space-y-2", className)}>
      <p className="h-8 mt-4">
        <Link className="text-xs text-white/60" href={routes.home}>
          &larr; Back to website
        </Link>
      </p>
      <div className="space-y-4">
        <Menu>
          {MENU.map(({ route, label }) => (
            <Menu.Item
              key={label}
              className="group"
              href={route}
              iconRight={() => (
                <span className="opacity-0 group-hover:opacity-100 transition">
                  &rarr;
                </span>
              )}
              selected={currentRoute === route}
            >
              {label}
            </Menu.Item>
          ))}
        </Menu>
        {submenu ? (
          <Menu>
            {submenu.title ? <Menu.Category name={submenu.title} /> : null}
            {submenu.items.map(({ key, href, children }) => (
              <Menu.Item
                key={key}
                className="group"
                href={href}
                iconRight={() => (
                  <span className="opacity-0 group-hover:opacity-100 transition">
                    &rarr;
                  </span>
                )}
              >
                {children}
              </Menu.Item>
            ))}
          </Menu>
        ) : null}
      </div>
    </aside>
  );
}
