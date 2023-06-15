import template from "./index.handlebars";

const html = template({ title: "Test", subtitle: "Sub" });

export default { title: "index" };
export const Preview = () => html;
