<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <button @click="goBack" class="flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-6 transition-colors">
          <ArrowLeft class="w-5 h-5" />
          <span class="text-sm">ログイン画面に戻る</span>
        </button>

        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <User class="w-8 h-8 text-white" />
          </div>
          <h1 class="text-2xl font-bold text-slate-800 mb-2">新規アカウント登録</h1>
          <p class="text-slate-600">必要な情報を入力してアカウントを作成</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="lastName" class="block text-sm font-medium text-slate-700 mb-2">姓</label>
              <div class="relative">
                <User class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input id="lastName" name="lastName" type="text" v-model="formData.lastName" placeholder="山田" required class="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label for="firstName" class="block text-sm font-medium text-slate-700 mb-2">名</label>
              <input id="firstName" name="firstName" type="text" v-model="formData.firstName" placeholder="太郎" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-slate-700 mb-2">メールアドレス</label>
            <div class="relative">
              <Mail class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input id="email" name="email" type="email" v-model="formData.email" placeholder="example@email.com" required class="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-slate-700 mb-2">電話番号</label>
            <div class="relative">
              <Phone class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input id="phone" name="phone" type="tel" v-model="formData.phone" placeholder="090-1234-5678" class="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          <div>
            <label for="company" class="block text-sm font-medium text-slate-700 mb-2">会社名（任意）</label>
            <div class="relative">
              <Building class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input id="company" name="company" type="text" v-model="formData.company" placeholder="株式会社〇〇" class="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="password" class="block text-sm font-medium text-slate-700 mb-2">パスワード</label>
              <div class="relative">
                <Lock class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input id="password" name="password" :type="showPassword ? 'text' : 'password'" v-model="formData.password" placeholder="••••••••" required minlength="8" class="w-full pl-11 pr-11 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <component :is="showPassword ? EyeOff : Eye" class="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-slate-700 mb-2">パスワード確認</label>
              <div class="relative">
                <Lock class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input id="confirmPassword" name="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" v-model="formData.confirmPassword" placeholder="••••••••" required minlength="8" class="w-full pl-11 pr-11 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <component :is="showConfirmPassword ? EyeOff : Eye" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div class="bg-slate-50 p-4 rounded-lg">
            <p class="text-xs text-slate-600 mb-2 font-medium">パスワード要件:</p>
            <ul class="text-xs text-slate-600 space-y-1">
              <li>• 8文字以上</li>
              <li>• 大文字と小文字を含む</li>
              <li>• 数字を含む</li>
              <li>• 特殊文字を含む（推奨）</li>
            </ul>
          </div>

          <label class="flex items-start gap-3">
            <input type="checkbox" v-model="agreedToTerms" class="mt-1 w-4 h-4 text-blue-500 border-slate-300 rounded focus:ring-blue-500" />
            <span class="text-sm text-slate-600">
              <a href="#" class="text-blue-500 hover:text-blue-600">利用規約</a> と <a href="#" class="text-blue-500 hover:text-blue-600">プライバシーポリシー</a> に同意します
            </span>
          </label>

          <button type="submit" :disabled="isLoading" class="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            <template v-if="isLoading">
              <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>登録中...</span>
            </template>
            <template v-else>
              <span>アカウントを作成</span>
            </template>
          </button>
        </form>

        <p class="text-center text-sm text-slate-600 mt-6">すでにアカウントをお持ちですか？ <button @click="goBack" class="text-blue-500 hover:text-blue-600 font-medium">ログイン</button></p>
      </div>

      <p class="text-center text-sm text-slate-600 mt-6">© 2026 Your Company. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, Building, Phone } from 'lucide-vue-next'

const emit = defineEmits(['back', 'signup-success'])

const formData = reactive({
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  company: '',
  password: '',
  confirmPassword: '',
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isLoading = ref(false)
const agreedToTerms = ref(false)

function handleSubmit() {
  if (formData.password !== formData.confirmPassword) {
    alert('パスワードが一致しません')
    return
  }
  if (!agreedToTerms.value) {
    alert('利用規約に同意してください')
    return
  }

  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    emit('signup-success')
  }, 1500)
}

function goBack() {
  emit('back')
}
</script>

<style scoped>
/* local styles if needed */
</style>

