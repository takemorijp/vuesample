<template>
  <header class="bg-white border-b border-slate-200 sticky top-0 z-20">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- 左側: ハンバーガー + タイトル -->
      <div class="flex items-center gap-3">
        <button
          @click="$emit('menu-click')"
          class="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="メニューを開閉"
        >
          <Menu class="w-6 h-6 text-slate-700" />
        </button>
        <h1 class="text-xl font-semibold text-slate-800">アプリケーション</h1>
      </div>

      <!-- 右側: 検索と通知 -->
      <div class="flex items-center gap-4">
        <!-- 検索バー -->
        <div class="relative hidden md:block">
          <Search class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="検索..."
            class="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>

        <!-- 通知アイコン -->
        <button
          class="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="通知"
        >
          <Bell class="w-6 h-6 text-slate-600" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <!-- プロフィールアイコン -->
        <button class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium hover:bg-blue-600 transition-colors">
          U
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Bell, Search, Menu } from 'lucide-vue-next'

defineEmits<{
  (e: 'menu-click'): void
}>()
</script>

<style scoped></style>
