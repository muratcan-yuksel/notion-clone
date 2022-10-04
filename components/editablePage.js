import uid from "../helpers/uid.js";
const editablePage = () => {
  const initialBlock = { id: uid(), html: "", tag: "p" };

  //define state
  let state = { blocks: [initialBlock] };

  console.log(state.blocks);
  console.log("hey");
};

export default editablePage;
