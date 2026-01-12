<template>
	<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
		<div class="w-full max-w-md">
			<div class="bg-white rounded-2xl shadow-xl p-8">
				<div class="text-center mb-8">
					<div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
						<LockIcon class="w-8 h-8 text-white" />
					</div>
					<h1 class="text-2xl font-bold text-slate-800 mb-2">ログイン</h1>
					<p class="text-slate-600">アカウントにアクセス</p>
				</div>

				<form @submit.prevent="handleSubmit" class="space-y-6">
					<div>
						<label for="email" class="block text-sm font-medium text-slate-700 mb-2">メールアドレス</label>
						<div class="relative">
							<MailIcon class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
							<input id="email" v-model="email" type="email" placeholder="example@email.com" required class="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
						</div>
						<p v-if="errors.email" class="text-sm text-red-600 mt-1">{{ errors.email }}</p>
					</div>

					<div>
						<label for="password" class="block text-sm font-medium text-slate-700 mb-2">パスワード</label>
						<div class="relative">
							<LockIcon class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
							<input id="password" :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="••••••••" required class="w-full pl-11 pr-11 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
							<button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
								<component :is="showPassword ? EyeOffIcon : EyeIcon" class="w-5 h-5" />
							</button>
						</div>
						<p v-if="errors.password" class="text-sm text-red-600 mt-1">{{ errors.password }}</p>
					</div>

					<div class="flex items-center justify-between">
						<label class="flex items-center">
							<input type="checkbox" class="w-4 h-4 text-blue-500 border-slate-300 rounded focus:ring-blue-500" v-model="remember" />
							<span class="ml-2 text-sm text-slate-600">ログイン状態を保持</span>
						</label>
						<button type="button" class="text-sm text-blue-500 hover:text-blue-600" @click="emit('forgot')">パスワードを忘れた</button>
					</div>

					<button type="submit" :disabled="isLoading" class="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2">
						<template v-if="isLoading">
							<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							<span>ログイン中...</span>
						</template>
						<template v-else>
							<span>ログイン</span>
						</template>
					</button>
				</form>

				<p class="text-center text-sm text-slate-600 mt-6">
					アカウントをお持ちでない方は
					<button type="button" class="text-blue-500 hover:text-blue-600 font-medium ml-1" @click="emit('signup')">新規登録</button>
				</p>
			</div>

			<p class="text-center text-sm text-slate-600 mt-6">© 2026 Your Company. All rights reserved.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Mail as MailIcon, Lock as LockIcon, Eye as EyeIcon, EyeOff as EyeOffIcon } from 'lucide-vue-next'

const emit = defineEmits<{
	(e: 'login'): void
	(e: 'forgot'): void
	(e: 'signup'): void
}>()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const remember = ref(false)
const isLoading = ref(false)
const errors = reactive<{ email?: string; password?: string }>({})

function validate(){
	errors.email = ''
	errors.password = ''
	let ok = true
	if (!email.value) { errors.email = 'メールアドレスを入力してください'; ok = false }
	else if (!/^\S+@\S+\.\S+$/.test(email.value)) { errors.email = '有効なメールアドレスを入力してください'; ok = false }
	if (!password.value) { errors.password = 'パスワードを入力してください'; ok = false }
	return ok
}

function handleSubmit(){
	if (!validate()) return
	isLoading.value = true
	setTimeout(()=>{ isLoading.value = false; emit('login') }, 800)
}
</script>

<style scoped></style>
*** End Patch
