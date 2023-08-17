<template>
  <div id="chatArea">
    <div class="chat-list">
      <div class="chats" v-for="(chat, index) in chatList" :key="index">
        {{ chat.senderName }} : {{ chat.text }}
      </div>
    </div>
    <a-input-group compact>
      <a-input
        v-model:value="inputText"
        @press-enter="onEnteredChat"
        style="width: calc(100% - 75px)"
      />
      <a-button type="primary">Submit</a-button>
    </a-input-group>
  </div>
</template>

<script lang="ts" setup>
import { chatStore } from '@/stores/chat'
import { userStore } from '@/stores/user'
import { type Chat } from '@/types/chat'
import { onMounted, nextTick } from 'vue'
import { watch } from 'vue'
import { ref } from 'vue'
const { chatList, addChat } = chatStore()
const { name } = userStore()
const dummyData: Chat[] = [
  {
    chatId: 1,
    senderName: '피카',
    text: '난 저 까마귀가 수상해. 너 직업이 뭔지 밝혀봐'
  },
  {
    chatId: 2,
    senderName: '까마귀',
    text: '내 직업은 점성술사야. 어제 말 했잖아? 날 몰고가는 너야 말로 직업을 밝혀'
  },
  {
    chatId: 3,
    senderName: '여포',
    text: '어젯밤 죽은 사람의 직업을 말해봐 그럼'
  },
  {
    chatId: 4,
    senderName: '하늘',
    text: '다들 진정해, 아직 정보가 부족한 상황이야. 더 관찰해봐야 할 것 같아'
  },
  {
    chatId: 5,
    senderName: '선인장',
    text: '어젯밤에 누가 죽었는지 아무도 모르는데, 어떻게 알 수 있겠어? 까마귀가 정말 점성술사인지 의심스럽네'
  },
  {
    chatId: 6,
    senderName: '뱀',
    text: '점성술사면 어젯밤에 누가 죽었는지 알아야 하잖아? 넌 정말 점성술사인 건가?'
  },
  {
    chatId: 7,
    senderName: '까마귀',
    text: '내가 말했잖아, 아직 밤에 뭐가 일어났는지 확인하지 못했다고'
  },
  {
    chatId: 8,
    senderName: '사슴',
    text: '다들 너무 의심만 하고 있어. 이럴 때일수록 냉정하게 생각해야 해'
  },
  {
    chatId: 9,
    senderName: '피카',
    text: '하지만 까마귀가 진짜 점성술사라면, 어젯밤에 뭔가를 알고 있어야 할 텐데'
  },
  {
    chatId: 10,
    senderName: '장미',
    text: '장미로 이름 지은 이유가 뭐야? 너의 직업이 뭔지 말해봐!'
  },
  {
    chatId: 11,
    senderName: '늑대',
    text: '어젯밤에는 아무 일도 일어나지 않았어. 괜히 의심만 하고 있는 것 같아.'
  },
  {
    chatId: 12,
    senderName: '코끼리',
    text: '늑대는 늑대대로 믿을 수 없어. 항상 주의해야 할 것 같아.'
  },
  {
    chatId: 13,
    senderName: '쥐',
    text: '나는 어젯밤에 누군가가 집을 돌아다니는 소리를 들었어.'
  },
  {
    chatId: 14,
    senderName: '호랑이',
    text: '그건 내 소리였어. 밤에 잠을 못 자서 나갔다가 들어온 거야.'
  },
  // ... 중략 ...
  {
    chatId: 78,
    senderName: '토끼',
    text: '나는 마을에 살면서 이렇게 사람들이 의심하는 모습을 본 적이 없어.'
  },
  {
    chatId: 79,
    senderName: '여우',
    text: '얼마나 더 이렇게 의심하며 지낼 거야? 누군가는 희생당하고 있을텐데.'
  },
  {
    chatId: 80,
    senderName: '곰',
    text: '다들 각자의 역할을 잘 해야겠다. 이런 상황에서도 서로를 믿는 거야.'
  },
  {
    chatId: 81,
    senderName: '판다',
    text: '곰이 말한 것처럼, 서로 믿고 협력하면 누가 마피아인지 찾아낼 수 있을 거야.'
  },
  {
    chatId: 82,
    senderName: '돼지',
    text: '누구든지 밝히기 전에 너무 서두르지 말자. 정보가 필요해.'
  },
  // ... 계속 추가하실 내용을 넣으세요
  {
    chatId: 88,
    senderName: '사자',
    text: '내가 볼 때는 여우가 뭔가 알고 있는 것 같아. 조심하자.'
  },
  {
    chatId: 89,
    senderName: '기린',
    text: '나는 정말 아무것도 모르는데, 왜 나를 의심하는 거야?'
  },
  {
    chatId: 90,
    senderName: '고양이',
    text: '다들 아무리 의심해도 진실은 하나야. 밝혀내기만 하면 돼.'
  },
  {
    chatId: 91,
    senderName: '펭귄',
    text: '지금처럼 마음을 냉정하게 가져가야 해. 그래야 진실을 찾을 수 있을 거야.'
  },
  {
    chatId: 92,
    senderName: '물고기',
    text: '내가 바다에서 들었던 얘기로는...'
  },
  {
    chatId: 93,
    senderName: '매',
    text: '물고기, 네가 알고 있는 걸 말해봐. 정보는 항상 도움이 되니까.'
  },
  {
    chatId: 94,
    senderName: '원숭이',
    text: '무엇이든 빨리 밝혀내자. 이런 분위기가 너무 무서워.'
  },
  { chatId: 10, senderName: '박쥐', text: '어둠 속에서 누군가 움직이는 것을 느꼈어. 누구냐?' },
  {
    chatId: 11,
    senderName: '펭귄',
    text: '조용히 해! 무슨 소리가 들렸어. 아무도 들어오지 않았나?'
  },
  { chatId: 12, senderName: '늑대', text: '이 밤이 끝나기 전에 진실을 밝혀야 해. 다들 조심해.' },
  { chatId: 13, senderName: '여우', text: '익숙한 향이 나. 이곳에서 뭔가 일어나고 있다.' },
  { chatId: 14, senderName: '엉덩이 탐정', text: '증거를 찾았다! 이걸 봐!' },
  { chatId: 15, senderName: '고양이', text: '왜 나를 의심해? 나는 무고한 민간인이야.' },
  { chatId: 16, senderName: '토끼', text: '시간이 없어! 빨리 결정해야 해!' },
  { chatId: 17, senderName: '곰', text: '잠깐만, 이거 봐. 이 흔적은 뭐지?' },
  {
    chatId: 18,
    senderName: '독수리',
    text: '높은 곳에서 모든 것을 봤다. 말하고 싶은 사람이 누구인지 알 것 같아.'
  },
  {
    chatId: 19,
    senderName: '사자',
    text: '힘이 필요하다면 나에게 와. 나는 너희를 도울 수 있을 것이다.'
  },
  {
    chatId: 20,
    senderName: '기린',
    text: '이 상황을 판단하기엔 아직 이른 것 같아. 더 살펴봐야겠다.'
  },
  {
    chatId: 21,
    senderName: '코끼리',
    text: '이 문제를 함께 해결해 나가자. 나는 믿음직한 파트너다.'
  },
  {
    chatId: 22,
    senderName: '고릴라',
    text: '압력에 지지 말고 마음을 공유하자. 우리는 서로를 이해해야 한다.'
  },
  {
    chatId: 23,
    senderName: '햄스터',
    text: '내가 작다고 얕보지 마. 나도 중요한 정보를 가지고 있다!'
  },
  {
    chatId: 24,
    senderName: '참새',
    text: '조금 전에 어떤 이상한 소리가 들렸다. 무슨 일이 일어난 거지?'
  },
  {
    chatId: 25,
    senderName: '두더지',
    text: '땅 속에서 뭔가 이상한 진동을 느꼈다. 무엇인지 알아봐야겠어.'
  }
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const inputText = ref('')
let $chatList: Element
onMounted(() => {
  $chatList = document.getElementsByClassName('chat-list')[0]
})

const scrollToBottom = () => {
  $chatList.scrollTop = $chatList.scrollHeight + 300
}
// dummyData.reduce((promise, chat) => {
//   return promise
//     .then(() => delay(100))
//     .then(() => {
//       addChat(chat)
//     })
// }, Promise.resolve())

watch(chatList, async () => {
  await nextTick()
  if ($chatList.scrollTop + $chatList.clientHeight >= $chatList.scrollHeight - 300) {
    scrollToBottom()
  }
})
const onEnteredChat = () => {
  const newChat: Chat = {
    chatId: chatList.length,
    senderName: name,
    text: inputText.value
  }
  addChat(newChat)
  inputText.value = ''
  scrollToBottom()
}
</script>

<style lang="scss" scoped>
#chatArea {
  @import '@/assets/styles/colors.scss';
  background-color: $gray-03;
  height: 100%;
  padding: 2%;
  overflow-y: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  .chat-list {
    overflow-y: auto;
  }
}
</style>
