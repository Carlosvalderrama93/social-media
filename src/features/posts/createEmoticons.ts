export type EmoticonsType = {
  id: string;
  type: string;
  total: number;
  emoticon: string;
};

function createEmoticons(): EmoticonsType[] {
  return [
    { id: "0", type: "thumbsUp", total: 0, emoticon: "👍" },
    { id: "1", type: "hooray", total: 0, emoticon: "🎉" },
    { id: "2", type: "heart", total: 0, emoticon: "❤️" },
    { id: "3", type: "rocket", total: 0, emoticon: "🚀" },
    { id: "4", type: "eyes", total: 0, emoticon: "👀" },
  ];
}

export default createEmoticons;
