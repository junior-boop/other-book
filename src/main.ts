import { marked } from "marked";

const markdowns = async () => {
  const url = location.href;
  const texte = await fetch(url + "sefer_adam.md");

  if (texte.ok) return await texte.text();

  throw new Error("il y a une erreur de conversion");
};

// document.querySelector('#marked')?.innerHTML = marked.parse(markdown)
(async (document) => {
  const rendering = new marked.Renderer();

  rendering.heading = (text, level) => {
    const match = text.match(/\s*\{#([a-zA-Z0-9\-_]+)\}\s*$/);

    let id = "";
    if (match) {
      id = match[1];
      text = text.replace(match[0], "");
    }

    return `<h${level} id=${id}>${text}</h${level}>`;
  };

  rendering.paragraph = (text) => {
    const regex = /^\d+\s*/gm;
    const match = text.replace(regex, `<span style = "color:gray">$&</span> `);

    return match;
  };

  marked.setOptions({ renderer: rendering });
  const text = (await markdowns()) !== undefined && (await markdowns());
  const html = await marked(text as string, { async: true });

  const box = document.querySelector("#marked") as HTMLDivElement;
  box.innerHTML = html;
})(document);
