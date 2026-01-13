<template>
  <!-- サイドバー -->
  <aside
    :class="[
      'h-screen bg-slate-900 text-white transition-all duration-300 overflow-hidden flex-shrink-0 flex flex-col',
      isOpen ? 'w-64' : 'w-0'
    ]"
    aria-label="サイドバー"
  >
    <div
      class="flex flex-col flex-1 transition-opacity duration-200"
      :class="isOpen ? 'opacity-100' : 'opacity-0'"
    >
      <!-- サイドバーヘッダー -->
      <div class="flex items-center justify-between p-4 border-b border-slate-700">
        <h2 :class="['transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0']">
          メニュー
        </h2>
        <button
          @click="$emit('toggle')"
          class="p-2 rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0"
          aria-label="メニューを閉じる"
        >
          <Menu class="w-5 h-5" />
        </button>
      </div>

      <!-- ナビゲーションメニュー -->
      <nav class="flex-1 p-4 overflow-y-auto">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.label">
            <button
              @click="$emit('page-change', item.page)"
              :class="[
                'w-full flex items-center rounded-lg transition-colors',
                isOpen ? 'gap-3 px-4 py-3 justify-start' : 'gap-0 px-3 py-3 justify-center',
                currentPage === item.page ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
              ]"
            >
              <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
                <span v-if="isOpen" class="transition-opacity duration-300">
                {{ item.label }}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- サイドバーフッター -->
      <div class="p-4 border-t border-slate-700">
        <button
          @click="$emit('drawer-toggle')"
          class="w-full flex items-center gap-3 hover:bg-slate-800 p-2 rounded-lg transition-colors"
            :class="[
              isOpen ? 'justify-start' : 'justify-center'
            ]"
        >
          <div class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
            <Users class="w-5 h-5" />
          </div>
            <div v-if="isOpen" class="transition-opacity duration-300">
            <p class="text-sm font-medium">ユーザー名</p>
            <p class="text-xs text-slate-400">user@example.com</p>
          </div>
        </button>
      </div>
    </div>
  </aside>

  <!-- ドロワーメニュー（サイドバー下部に表示） -->
  <div v-if="drawerOpen" class="fixed bottom-4 left-2 w-60 bg-white shadow-lg rounded-lg z-50 border border-slate-200">
    <div class="p-4 border-b border-slate-200">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
          U
        </div>
        <div>
          <p class="font-medium text-slate-800">ユーザー名</p>
          <p class="text-xs text-slate-600">user@example.com</p>
        </div>
      </div>
    </div>
    <nav class="p-2">
      <ul class="space-y-1">
        <li>
          <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-left">
            <User class="w-5 h-5 text-slate-700" />
            <span class="text-slate-700">プロフィール</span>
          </button>
        </li>
        <li>
          <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-left">
            <Settings class="w-5 h-5 text-slate-700" />
            <span class="text-slate-700">設定</span>
          </button>
        </li>
        <li class="pt-1 border-t border-slate-200">
          <button
            @click="handleLogout"
            class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors text-left"
          >
            <LogOut class="w-5 h-5 text-red-600" />
            <span class="text-red-600 font-medium">ログアウト</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script setup lang="ts">
import { Home, BarChart, FileText, Users, Settings, Menu, User, LogOut } from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
  currentPage: string
  drawerOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
  (e: 'page-change', page: string): void
  (e: 'drawer-toggle'): void
  (e: 'logout'): void
}>()

const menuItems = [
  { icon: Home, label: 'ホーム', page: 'home' },
  { icon: BarChart, label: 'ダッシュボード', page: 'dashboard' },
  { icon: FileText, label: 'ドキュメント', page: 'documents' },
  { icon: Users, label: 'ユーザー', page: 'users' },
  { icon: Settings, label: '設定', page: 'settings' },
]

function handleLogout() {
  emit('drawer-toggle')
  emit('logout')
}
</script>

<style scoped></style>
