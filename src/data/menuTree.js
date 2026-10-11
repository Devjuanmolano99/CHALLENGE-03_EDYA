import TreeNode from "../models/TreeNode";
import {
  ProfileView,
  MessagesView,
  AccountView,
  SecurityView,
  PasswordView,
  NotificationView,
  FaqView,
  TicketView,
  NetworkView,
  LogoutView,
} from "../components/views/MenuViewComponents";

// Construcción del árbol N-ario de menús y submenús según la diapositiva de la clase 09
export function buildMenuTree() {
  // Nodo raíz (representa el menú principal del sistema)
  const root = new TreeNode("Menu Root", "/");

  // 1. Profile
  root.addChild(new TreeNode("Profile", "/profile", ProfileView));

  // 2. Messages
  root.addChild(new TreeNode("Messages", "/messages", MessagesView));

  // 3. Settings (Rama con submenús)
  const settings = new TreeNode("Settings", "/settings", AccountView);
  settings.addChild(new TreeNode("Account", "/settings/account", AccountView));
  settings.addChild(new TreeNode("Profile", "/settings/profile", ProfileView));
  settings.addChild(
    new TreeNode("Security & Privacy", "/settings/security", SecurityView)
  );
  settings.addChild(new TreeNode("Password", "/settings/password", PasswordView));
  settings.addChild(
    new TreeNode("Notification", "/settings/notifications", NotificationView)
  );
  root.addChild(settings);

  // 4. Help (Rama con submenús)
  const help = new TreeNode("Help", "/help", FaqView);
  help.addChild(new TreeNode("FAQ's", "/help/faqs", FaqView));
  help.addChild(new TreeNode("Submit a Ticket", "/help/ticket", TicketView));
  help.addChild(new TreeNode("Network Status", "/help/network", NetworkView));
  root.addChild(help);

  // 5. Logout
  root.addChild(new TreeNode("Logout", "/logout", LogoutView));

  return root;
}

export default buildMenuTree;
