<template>
  <main class="p-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-3xl font-semibold text-slate-800 mb-2">ユーザー管理</h2>
            <p class="text-slate-600">チームメンバーとアクセス権限の管理</p>
          </div>
          <button @click="drawerOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
            <Plus class="w-5 h-5" />
            ユーザーを追加
          </button>
        </div>

        <div class="flex gap-3">
          <div class="relative flex-1">
            <Search class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" v-model="searchQuery" placeholder="ユーザーを検索..." class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button @click="filterDialogOpen = true" class="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 relative">
            <Filter class="w-5 h-5 text-slate-600" />
            <span class="text-slate-700 font-medium">フィルター</span>
            <span v-if="activeFilterCount>0" class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">{{ activeFilterCount }}</span>
          </button>
        </div>

        <div v-if="activeFilterCount>0" class="mt-3 flex flex-wrap gap-2">
          <span v-if="activeFilters.name" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">名前: {{ activeFilters.name }}</span>
          <span v-if="activeFilters.email" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">メール: {{ activeFilters.email }}</span>
          <span v-if="activeFilters.role" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">役割: {{ activeFilters.role }}</span>
          <span v-if="activeFilters.status" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ステータス: {{ activeFilters.status }}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-lg border border-slate-200 p-6">
          <div :class="[stat.color, 'w-12 h-12 rounded-lg flex items-center justify-center mb-4']">
            <UsersIcon class="w-6 h-6 text-white" />
          </div>
          <p class="text-sm text-slate-600 mb-1">{{ stat.label }}</p>
          <p class="text-2xl font-semibold text-slate-800">{{ stat.value }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg border border-slate-200">
        <div class="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-800">チームメンバー</h3>
          <p class="text-sm text-slate-600">{{ filteredUsers.length }}名のユーザー</p>
        </div>
        <div class="divide-y divide-slate-200">
          <div v-for="(user, index) in filteredUsers" :key="index" class="p-6 hover:bg-slate-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">{{ user.name.charAt(0) }}</div>
                <div>
                  <p class="font-medium text-slate-800">{{ user.name }}</p>
                  <div class="flex items-center gap-2 mt-1"><Mail class="w-4 h-4 text-slate-400" /><p class="text-sm text-slate-600">{{ user.email }}</p></div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{{ user.role }}</span>
                <span :class="['px-3 py-1 rounded-full text-sm', user.status==='アクティブ' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700']">{{ user.status }}</span>
                <button class="p-2 hover:bg-slate-100 rounded transition-colors"><MoreVertical class="w-5 h-5 text-slate-600" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserRegistrationDrawer :is-open="drawerOpen" @close="drawerOpen=false" @register="handleRegister">
        <!-- slot content could be a form -->
      </UserRegistrationDrawer>

      <UserFilterDialog :is-open="filterDialogOpen" @close="filterDialogOpen=false" @apply-filters="applyFilters" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { Users as UsersIcon, Search, Plus, Mail, MoreVertical, Filter } from 'lucide-vue-next'
import UserRegistrationDrawer from '../UserRegistrationDrawer.vue'
import UserFilterDialog from '../UserFilterDialog.vue'

const drawerOpen = ref(false)
const filterDialogOpen = ref(false)
const searchQuery = ref('')

const activeFilters = reactive({ name: '', email: '', role: '', status: '', dateFrom: '', dateTo: '' })

const allUsers = ref([
  { name: '田中太郎', email: 'tanaka@example.com', role: '管理者', status: 'アクティブ' },
  { name: '佐藤花子', email: 'sato@example.com', role: '編集者', status: 'アクティブ' },
  { name: '鈴木一郎', email: 'suzuki@example.com', role: '閲覧者', status: 'アクティブ' },
  { name: '山田美咲', email: 'yamada@example.com', role: '編集者', status: '休止中' },
  { name: '高橋健太', email: 'takahashi@example.com', role: '閲覧者', status: 'アクティブ' },
  { name: '伊藤真理', email: 'ito@example.com', role: '編集者', status: 'アクティブ' },
  { name: '渡辺誠', email: 'watanabe@example.com', role: '閲覧者', status: 'アクティブ' },
  { name: '中村優子', email: 'nakamura@example.com', role: '管理者', status: 'アクティブ' },
])

const stats = [
  { label: '総ユーザー数', value: '156', color: 'bg-blue-500' },
  { label: 'アクティブユーザー', value: '142', color: 'bg-green-500' },
  { label: '今月の新規', value: '12', color: 'bg-purple-500' },
]

const filteredUsers = computed(() => {
  return allUsers.value.filter(user => {
    const matchesSearch = searchQuery.value === '' || user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesName = activeFilters.name === '' || user.name.toLowerCase().includes(activeFilters.name.toLowerCase())
    const matchesEmail = activeFilters.email === '' || user.email.toLowerCase().includes(activeFilters.email.toLowerCase())
    const matchesRole = activeFilters.role === '' || user.role === activeFilters.role
    const matchesStatus = activeFilters.status === '' || user.status === activeFilters.status
    return matchesSearch && matchesName && matchesEmail && matchesRole && matchesStatus
  })
})

function applyFilters(filters: Record<string,string>){
  Object.assign(activeFilters, filters)
  filterDialogOpen.value = false
}

function handleRegister(payload: { name: string; email: string; role: string; status: string }){
  allUsers.value.unshift(payload)
  drawerOpen.value = false
}

const activeFilterCount = computed(() => Object.values(activeFilters).filter(v => v !== '').length)
</script>

<style scoped></style>
