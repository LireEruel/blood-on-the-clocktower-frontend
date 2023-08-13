<template>
  <div id="chatArea">
    <div class="chat-list-wrap">
      <div class="chats" v-for="chat in chatList" :key="chat.id">
        {{ chat.senderName }} : {{ chat.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { chatStore } from '@/stores/chat'
import { Chat } from '@/types/chat'
const { chatList, addChat } = chatStore()

const dummyData: Chat[] = [
  {
    id: 1,
    senderName: '피카',
    text: '난 저 까마귀가 수상해. 너 직업이 뭔지 밝혀봐'
  },
  {
    id: 2,
    senderName: '까마귀',
    text: '내 직업은 점성술사야. 어제 말 했잖아? 날 몰고가는 너야 말로 직업을 밝혀'
  },
  {
    id: 3,
    senderName: '여포',
    text: '어젯밤 죽은 사람의 직업을 말해봐 그럼'
  },
  {
    id: 4,
    senderName: '하늘',
    text: '다들 진정해, 아직 정보가 부족한 상황이야. 더 관찰해봐야 할 것 같아'
  },
  {
    id: 5,
    senderName: '선인장',
    text: '어젯밤에 누가 죽었는지 아무도 모르는데, 어떻게 알 수 있겠어? 까마귀가 정말 점성술사인지 의심스럽네'
  },
  {
    id: 6,
    senderName: '뱀',
    text: '점성술사면 어젯밤에 누가 죽었는지 알아야 하잖아? 넌 정말 점성술사인 건가?'
  },
  {
    id: 7,
    senderName: '까마귀',
    text: '내가 말했잖아, 아직 밤에 뭐가 일어났는지 확인하지 못했다고'
  },
  {
    id: 8,
    senderName: '사슴',
    text: '다들 너무 의심만 하고 있어. 이럴 때일수록 냉정하게 생각해야 해'
  },
  {
    id: 9,
    senderName: '피카',
    text: '하지만 까마귀가 진짜 점성술사라면, 어젯밤에 뭔가를 알고 있어야 할 텐데'
  },
  {
    id: 10,
    senderName: '장미',
    text: '장미로 이름 지은 이유가 뭐야? 너의 직업이 뭔지 말해봐!'
  },
  {
    id: 11,
    senderName: '늑대',
    text: '어젯밤에는 아무 일도 일어나지 않았어. 괜히 의심만 하고 있는 것 같아.'
  },
  {
    id: 12,
    senderName: '코끼리',
    text: '늑대는 늑대대로 믿을 수 없어. 항상 주의해야 할 것 같아.'
  },
  {
    id: 13,
    senderName: '쥐',
    text: '나는 어젯밤에 누군가가 집을 돌아다니는 소리를 들었어.'
  },
  {
    id: 14,
    senderName: '호랑이',
    text: '그건 내 소리였어. 밤에 잠을 못 자서 나갔다가 들어온 거야.'
  },
  // ... 중략 ...
  {
    id: 78,
    senderName: '토끼',
    text: '나는 마을에 살면서 이렇게 사람들이 의심하는 모습을 본 적이 없어.'
  },
  {
    id: 79,
    senderName: '여우',
    text: '얼마나 더 이렇게 의심하며 지낼 거야? 누군가는 희생당하고 있을텐데.'
  },
  {
    id: 80,
    senderName: '곰',
    text: '다들 각자의 역할을 잘 해야겠다. 이런 상황에서도 서로를 믿는 거야.'
  },
  {
    id: 81,
    senderName: '판다',
    text: '곰이 말한 것처럼, 서로 믿고 협력하면 누가 마피아인지 찾아낼 수 있을 거야.'
  },
  {
    id: 82,
    senderName: '돼지',
    text: '누구든지 밝히기 전에 너무 서두르지 말자. 정보가 필요해.'
  },
  // ... 계속 추가하실 내용을 넣으세요
  {
    id: 88,
    senderName: '사자',
    text: '내가 볼 때는 여우가 뭔가 알고 있는 것 같아. 조심하자.'
  },
  {
    id: 89,
    senderName: '기린',
    text: '나는 정말 아무것도 모르는데, 왜 나를 의심하는 거야?'
  },
  {
    id: 90,
    senderName: '고양이',
    text: '다들 아무리 의심해도 진실은 하나야. 밝혀내기만 하면 돼.'
  },
  {
    id: 91,
    senderName: '펭귄',
    text: '지금처럼 마음을 냉정하게 가져가야 해. 그래야 진실을 찾을 수 있을 거야.'
  },
  {
    id: 92,
    senderName: '물고기',
    text: '내가 바다에서 들었던 얘기로는...'
  },
  {
    id: 93,
    senderName: '매',
    text: '물고기, 네가 알고 있는 걸 말해봐. 정보는 항상 도움이 되니까.'
  },
  {
    id: 94,
    senderName: '원숭이',
    text: '무엇이든 빨리 밝혀내자. 이런 분위기가 너무 무서워.'
  }
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

dummyData.reduce((promise, chat) => {
  return promise
    .then(() => delay(1000))
    .then(() => {
      addChat(chat)
    })
}, Promise.resolve())
</script>

<style lang="scss" scoped>
#chatArea {
  @import '@/assets/styles/colors.scss';
  background-color: $gray-03;
  height: 100%;
  padding: 2%;
  overflow-y: auto;
  width: 70%;
}
</style>
