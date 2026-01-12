<template>
  <div v-if="isOpen">
    <div class="fixed inset-0 bg-black/50 z-40" @click="onClose"></div>
    <aside role="dialog" aria-modal="true" aria-labelledby="drawer-title" class="fixed right-0 top-0 h-full w-[60%] bg-white shadow-2xl z-50 transform transition-transform">
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <UserIcon class="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 id="drawer-title" class="text-xl font-semibold text-slate-800">新規ユーザー登録</h2>
              <p class="text-sm text-slate-600">新しいチームメンバーを追加</p>
            </div>
          </div>
          <button @click="onClose" class="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="閉じる">
            <CloseIcon class="w-6 h-6 text-slate-600" />
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-slate-800 mb-4">基本情報</h3>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="lastName" class="block text-sm font-medium text-slate-700 mb-2">姓</label>
                  <input id="lastName" v-model="form.lastName" type="text" placeholder="山田" required class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label for="firstName" class="block text-sm font-medium text-slate-700 mb-2">名</label>
                  <input id="firstName" v-model="form.firstName" type="text" placeholder="太郎" required class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-slate-700 mb-2">メールアドレス</label>
                <div class="relative">
                  <MailIcon class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input id="email" v-model="form.email" type="email" placeholder="user@example.com" required class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-slate-700 mb-2">電話番号</label>
                <div class="relative">
                  <PhoneIcon class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input id="phone" v-model="form.phone" type="tel" placeholder="090-1234-5678" class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-800 mb-4">組織情報</h3>
            <div class="space-y-4">
              <div>
                <label for="department" class="block text-sm font-medium text-slate-700 mb-2">部署</label>
                <div class="relative">
                  <BuildingIcon class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input id="department" v-model="form.department" type="text" placeholder="営業部" class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label for="title" class="block text-sm font-medium text-slate-700 mb-2">役職</label>
                <input id="title" v-model="form.title" type="text" placeholder="マネージャー" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label for="role" class="block text-sm font-medium text-slate-700 mb-2">権限</label>
                <select id="role" v-model="form.role" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="viewer">閲覧者</option>
                  <option value="editor">編集者</option>
                  <option value="admin">管理者</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-800 mb-4">セキュリティ</h3>
            <div class="space-y-4">
              <div>
                <label for="password" class="block text-sm font-medium text-slate-700 mb-2">初期パスワード</label>
                <div class="relative">
                  <LockIcon class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input id="password" v-model="form.password" type="password" placeholder="••••••••" required class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <p class="text-xs text-slate-500 mt-1">※ 初回ログイン時にパスワード変更を求められます</p>
              </div>

              <div>
                <label for="passwordConfirm" class="block text-sm font-medium text-slate-700 mb-2">パスワード確認</label>
                <div class="relative">
                  <LockIcon class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input id="passwordConfirm" v-model="form.passwordConfirm" type="password" placeholder="••••••••" required class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>
          </div>

          <div class="bg-slate-50 p-4 rounded-lg">
            <label for="sendInvite" class="flex items-start gap-3">
              <input id="sendInvite" type="checkbox" v-model="form.sendInvite" class="mt-1 w-4 h-4 text-blue-500 border-slate-300 rounded focus:ring-blue-500" />
              <div>
                <span class="text-sm font-medium text-slate-700">招待メールを送信</span>
                <p class="text-xs text-slate-600 mt-1">登録完了後、ユーザーに招待メールを自動送信します</p>
              </div>
            </label>
          </div>

          <div class="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
            <button type="button" @click="onClose" class="px-6 py-2 border border-slate-300 rounded-lg hover:bg-white">キャンセル</button>
            <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"> <SaveIcon class="w-5 h-5" /> ユーザーを登録</button>
          </div>
        </form>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { User as UserIcon, Mail as MailIcon, Lock as LockIcon, Phone as PhoneIcon, Building as BuildingIcon, Save as SaveIcon, X as CloseIcon } from 'lucide-vue-next'

const props = defineProps<{ isOpen?: boolean }>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'register', payload: any): void
}>()

const isOpen = computed(() => props.isOpen ?? false)

const form = ref({ lastName: '', firstName: '', email: '', phone: '', department: '', title: '', role: 'viewer', password: '', passwordConfirm: '', sendInvite: true })

// ボディスクロールロックとEscapeキー対応
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    onClose()
  }
}

watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleEscape)
})

function onClose(){ emit('close') }
function handleSubmit(){
  // simple validation
  if (form.value.password !== form.value.passwordConfirm) { alert('パスワードが一致しません'); return }
  emit('register', { ...form.value })
  emit('close')
}
</script>

<style scoped></style>
