import { Player } from "@galacean/effects";
import { useEffect } from "react";

type MessageItem = {
  name: string; // 编辑器中设置的名字
  phrase: number; // 元素状态，开始: MESSAGE_ITEM_PHRASE_BEGIN ，结束: MESSAGE_ITEM_PHRASE_END
}

type ClickedItem ={
  name: string; // 编辑器中设置的名字
}


const App = () => {
  useEffect(() => {
    console.log(123);
    const player = new Player({
      container: document.getElementById("root"),
      pixelRatio: window.devicePixelRatio || 2,
      interactive: true,
      onMessageItem(item: MessageItem) {
        console.log(item.name); // 设置多个交互元素需要根据name判断是否指定元素
        console.log(item)
        // if (item.phrase === MESSAGE_ITEM_PHRASE_BEGIN) {
        //   // 元素创建
        // } else if (item.phrase === MESSAGE_ITEM_PHRASE_END) {
        //   // 元素销毁
        // }
      },
      onItemClicked: (item: ClickedItem) => {
        // 设置多个元素的点击交互需要根据name判断是否指定元素
        console.log('trigger onItemClicked')
        console.log(item.name);
      },
    });
    player.loadScene("/aa/lucky.json").catch((err) => {
      // 降级逻辑，以下仅供参考
      (document.getElementById("root") as HTMLDivElement).style.backgroundImage = 'url("/aa/downgrade/lucky.png")';
    });
  }, []);

  return <></>;
};
export default App;
