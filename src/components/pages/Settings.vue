<template>
  <main class="p-6">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h2 class="text-3xl font-semibold text-slate-800 mb-2">設定</h2>
        <p class="text-slate-600">アカウントとアプリケーションの設定を管理</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center gap-3 mb-6">
            <UserIcon class="w-5 h-5 text-blue-500" />
            <h3 class="text-lg font-semibold text-slate-800">プロフィール</h3>
          </div>
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">名前</label>
                <input type="text" v-model="name" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">メールアドレス</label>
                <input type="email" v-model="email" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">自己紹介</label>
              <textarea v-model="bio" rows="3" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center gap-3 mb-6">
            <BellIcon class="w-5 h-5 text-green-500" />
            <h3 class="text-lg font-semibold text-slate-800">通知設定</h3>
          </div>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-slate-800">プッシュ通知</p>
                <p class="text-sm text-slate-600">重要なアップデートを通知します</p>
              </div>
              <button @click="notifications = !notifications" :class="['relative w-12 h-6 rounded-full transition-colors', notifications ? 'bg-blue-500' : 'bg-slate-300']">
                <div :class="['absolute top-1 w-4 h-4 bg-white rounded-full transition-transform', notifications ? 'translate-x-7' : 'translate-x-1']"></div>
              </button>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium text-slate-800">メール通知</p>
                <p class="text-sm text-slate-600">週次レポートをメールで受け取ります</p>
              </div>
              <button @click="emailUpdates = !emailUpdates" :class="['relative w-12 h-6 rounded-full transition-colors', emailUpdates ? 'bg-blue-500' : 'bg-slate-300']">
                <div :class="['absolute top-1 w-4 h-4 bg-white rounded-full transition-transform', emailUpdates ? 'translate-x-7' : 'translate-x-1']"></div>
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center gap-3 mb-6">
            <ShieldIcon class="w-5 h-5 text-red-500" />
            <h3 class="text-lg font-semibold text-slate-800">セキュリティ</h3>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">現在のパスワード</label>
              <input type="password" placeholder="••••••••" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">新しいパスワード</label>
                <input type="password" placeholder="••••••••" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">パスワード確認</label>
                <input type="password" placeholder="••••••••" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center gap-3 mb-6">
            <PaletteIcon class="w-5 h-5 text-purple-500" />
            <h3 class="text-lg font-semibold text-slate-800">表示設定</h3>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">テーマ</label>
              <select v-model="theme" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>ライトモード</option>
                <option>ダークモード</option>
                <option>システム設定に従う</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2"><GlobeIcon class="w-4 h-4" />言語</label>
              <select v-model="language" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>日本語</option>
                <option>English</option>
                <option>中文</option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3">
          <button class="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">キャンセル</button>
          <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"><SaveIcon class="w-5 h-5" />変更を保存</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User as UserIcon, Bell as BellIcon, Shield as ShieldIcon, Palette as PaletteIcon, Globe as GlobeIcon, Save as SaveIcon } from 'lucide-vue-next'

const name = ref('田中太郎')
const email = ref('tanaka@example.com')
const bio = ref('プロジェクトマネージャーとして働いています。')
const notifications = ref(true)
const emailUpdates = ref(false)
const theme = ref('ライトモード')
const language = ref('日本語')
</script>

<style scoped></style>
