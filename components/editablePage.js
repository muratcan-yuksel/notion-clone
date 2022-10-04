import uid from "../helpers/uid.js";
const editablePage = () => {
  const initialBlock = { id: uid(), html: "empty string", tag: "p" };

  //define state
  let state = { blocks: [initialBlock] };

  //get Page element
  const page = document.querySelector(".page");

  state.blocks.map((block) => {
    let blockElement = document.createElement(block.tag);
    blockElement.innerHTML = block.html;
    blockElement.setAttribute("contenteditable", true);
    blockElement.setAttribute("id", block.id);
    page.appendChild(blockElement);
  });
};

export default editablePage;
