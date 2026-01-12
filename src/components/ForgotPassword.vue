<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div v-if="isSuccess" class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle class="w-8 h-8 text-green-500" />
          </div>
          <h1 class="text-2xl font-bold text-slate-800 mb-2">メールを送信しました</h1>
          <p class="text-slate-600 mb-6">{{ email }} にパスワードリセット用のリンクを送信しました。メールを確認してください。</p>
          <div class="bg-blue-50 p-4 rounded-lg mb-6">
            <p class="text-sm text-slate-700">メールが届かない場合は、迷惑メールフォルダをご確認ください。</p>
          </div>
          <button @click="goBack" class="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">ログイン画面に戻る</button>
        </div>
      </div>

      <div v-else class="bg-white rounded-2xl shadow-xl p-8">
        <button @click="goBack" class="flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-6 transition-colors">
          <ArrowLeft class="w-5 h-5" />
          <span class="text-sm">ログイン画面に戻る</span>
        </button>

        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail class="w-8 h-8 text-white" />
          </div>
          <h1 class="text-2xl font-bold text-slate-800 mb-2">パスワードをリセット</h1>
          <p class="text-slate-600">登録済みのメールアドレスを入力してください。パスワードリセット用のリンクをお送りします。</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700 mb-2">メールアドレス</label>
            <div class="relative">
              <Mail class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="example@email.com"
                required
                class="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button type="submit" :disabled="isLoading" class="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            <template v-if="isLoading">
              <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>送信中...</span>
            </template>
            <template v-else>
              <span>リセットリンクを送信</span>
            </template>
          </button>
        </form>

        <div class="mt-6 p-4 bg-slate-50 rounded-lg">
          <p class="text-xs text-slate-600">※ セキュリティ保護のため、リセットリンクは24時間で無効になります。</p>
        </div>
      </div>

      <p class="text-center text-sm text-slate-600 mt-6">© 2026 Your Company. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-vue-next'

const emit = defineEmits(['back'])

const email = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)

function handleSubmit() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSuccess.value = true
  }, 1500)
}

function goBack() {
  emit('back')
}
</script>

<style scoped>
/* Add local styles if needed */
</style>

