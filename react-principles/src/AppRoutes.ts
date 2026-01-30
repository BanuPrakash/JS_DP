import { ProductListGood } from "./principles/SRP";
import { ButtonWithOCP } from "./principles/OCP";
import Buttons from "./principles/LSP/";
import  Home from "./principles/ISP/Good/Home";
import { FormWithDIP } from "./principles/DIP";

const routes = [
  { path: "/", component: ProductListGood },
  { path: "/srp", component: ProductListGood },
  { path: "/ocp", component: ButtonWithOCP },
   { path: "/lsp", component: Buttons },
   { path: "/isp", component: Home },
   { path: "/dip", component: FormWithDIP },
];

export default routes;