import Handlebars from "handlebars";
import source from "./index.handlebars";

const template = Handlebars.compile(source);
const html = template({ title: "Test" });

export default { title: "index" };
export const Preview = () => html;
