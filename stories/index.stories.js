import Handlebars from "handlebars";
import source from "./index.handlebars";
import subtitle from "./subtitle.handlebars";

Handlebars.registerPartial("subtitle", subtitle);

const template = Handlebars.compile(source);
const html = template({ title: "Test", subtitle: "Sub" });

export default { title: "index" };
export const Preview = () => html;
