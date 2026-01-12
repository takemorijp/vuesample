<template>
  <aside :class="[`fixed left-0 top-0 h-full transition-all duration-300 z-40`, isOpen ? 'w-64 bg-slate-900 text-white' : 'w-0']">
    <div class="flex flex-col h-full overflow-hidden">
      <div class="flex items-center justify-between p-4 border-b border-slate-700">
        <h2 :class="[`transition-opacity duration-300`, isOpen ? 'opacity-100' : 'opacity-0']">メニュー</h2>
        <button @click="$emit('toggle')" class="p-2 rounded-lg hover:bg-slate-800 transition-colors" aria-label="メニューを閉じる">
          <CloseIcon class="w-5 h-5 text-slate-200" />
        </button>
      </div>

      <nav class="flex-1 p-4">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.label">
            <button @click="$emit('page-change', item.page)" :class="[`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors`, currentPage===item.page ? 'bg-blue-600 text-white' : 'hover:bg-slate-800']">
              <component :is="item.icon || 'span'" :class="['w-5 h-5 flex-shrink-0', currentPage===item.page ? 'text-white' : 'text-slate-100']" />
              <span :class="[`transition-opacity duration-300`, isOpen ? 'opacity-100' : 'opacity-0']">{{ item.label }}</span>
            </button>
          </li>
        </ul>
      </nav>

      <div class="p-4 border-t border-slate-700">
        <button @click="$emit('drawer-toggle')" class="w-full flex items-center gap-3 hover:bg-slate-800 p-2 rounded-lg transition-colors">
          <div class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">U</div>
          <div :class="[`transition-opacity duration-300`, isOpen ? 'opacity-100' : 'opacity-0']">
            <p class="text-sm font-medium">ユーザー名</p>
            <p class="text-xs text-slate-400">user@example.com</p>
          </div>
        </button>
      </div>
    </div>

    <!-- overlay for mobile -->
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-30 lg:hidden" @click="$emit('toggle')" aria-label="オーバーレイ" />

    <!-- drawer menu -->
    <div v-if="drawerOpen">
      <div class="fixed inset-0 z-40" @click="$emit('drawer-toggle')" />
      <div class="fixed bottom-20 left-6 w-64 bg-white shadow-lg rounded-lg z-50 border border-slate-200">
        <div class="p-4 border-b border-slate-200">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">U</div>
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
                  <UserIcon class="w-5 h-5 text-slate-700" />
                  <span class="text-slate-700">プロフィール</span>
                </button>
            </li>
            <li>
                <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-left">
                  <SettingsIcon class="w-5 h-5 text-slate-700" />
                  <span class="text-slate-700">設定</span>
                </button>
            </li>
            <li class="pt-1 border-t border-slate-200">
                <button @click="handleLogout" class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors text-left">
                  <LogOutIcon class="w-5 h-5 text-red-600" />
                  <span class="text-red-600 font-medium">ログアウト</span>
                </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps<{ isOpen: boolean; currentPage?: string; drawerOpen?: boolean }>()
const emit = defineEmits<{
  (e: 'toggle'): void
  (e: 'page-change', page: string): void
  (e: 'drawer-toggle'): void
  (e: 'logout'): void
}>()
import { Home as HomeIcon, BarChart as ChartIcon, File as FileIcon, User as UserIcon, Settings as SettingsIcon, X as CloseIcon, LogOut as LogOutIcon } from 'lucide-vue-next'

const menuItems = [
  { label: 'ホーム', page: 'home', icon: HomeIcon },
  { label: 'ダッシュボード', page: 'dashboard', icon: ChartIcon },
  { label: 'ドキュメント', page: 'documents', icon: FileIcon },
  { label: 'ユーザー', page: 'users', icon: UserIcon },
  { label: '設定', page: 'settings', icon: SettingsIcon },
]
function handleLogout(){
  emit('drawer-toggle')
  emit('logout')
}
</script>

<style scoped></style>
