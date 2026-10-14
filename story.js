// 找到元素
const firstBtn = document.getElementById('firstBtn');
const msg = document.getElementById('msg');

// 第一次点击
firstBtn.addEventListener('click', () => {
  msg.textContent = "I'm really sad today :( <click the button above👆>";
  firstBtn.textContent = "Tell me whyyyy";
  firstBtn.id = 'secondBtn';

  // 换第二个点击事件
  firstBtn.onclick = () => {
    msg.textContent = "I'm joking, vibe coding is sooooo hard. But Seven is a genius.";
    firstBtn.style.display = 'none'; // 点完按钮消失，留着句子也可以
  };
});