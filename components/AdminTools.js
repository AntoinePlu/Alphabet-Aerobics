import routes from "lib/routes";
import { isDevelopment } from "lib/helpers";
import { BookOpenIcon, LibraryIcon, Link } from "components";

export default function AdminTools() {
  return isDevelopment ? (
    <nav className="fixed bottom-0 left-0 bg-black/80 rounded-tl-xl flex items-center justify-end p-4 gap-x-4">
      <Link.Button href={routes.admin}>
        <LibraryIcon />
        <span>Admin</span>
      </Link.Button>

      <div
        className="w-3 h-3 bg-orange rounded-full"
        title="Administration tools"
      />
    </nav>
  ) : null;
}
