<template>
  <main class="p-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h2 class="text-3xl font-semibold text-slate-800 mb-2">ホーム</h2>
        <p class="text-slate-600">ダッシュボードへようこそ。最新の情報をご確認ください。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div :class="[stat.color, 'w-12 h-12 rounded-lg flex items-center justify-center']">
              <component :is="stat.icon" class="w-6 h-6 text-white" />
            </div>
          </div>
          <p class="text-sm text-slate-600 mb-1">{{ stat.label }}</p>
          <p class="text-2xl font-semibold text-slate-800">{{ stat.value }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg border border-slate-200 p-6">
        <h3 class="text-lg font-semibold text-slate-800 mb-4">最近のアクティビティ</h3>
        <div class="space-y-4">
          <div v-for="(activity, index) in activities" :key="index" class="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
            <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
              <UsersIcon class="w-5 h-5 text-slate-600" />
            </div>
            <div class="flex-1">
              <p class="text-sm text-slate-800"><span class="font-medium">{{ activity.user }}</span> {{ activity.action }}</p>
              <p class="text-xs text-slate-500 mt-1">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TrendingUp, Users as UsersIcon, FileText, CheckCircle } from 'lucide-vue-next'

const stats = [
  { icon: UsersIcon, label: '総ユーザー数', value: '1,234', color: 'bg-blue-500' },
  { icon: FileText, label: 'ドキュメント', value: '567', color: 'bg-green-500' },
  { icon: TrendingUp, label: '成長率', value: '+23%', color: 'bg-purple-500' },
  { icon: CheckCircle, label: '完了タスク', value: '89', color: 'bg-orange-500' },
]

const activities = ref([
  { user: '田中太郎', action: 'が新しいドキュメントを作成しました', time: '5分前' },
  { user: '佐藤花子', action: 'がプロジェクトを更新しました', time: '15分前' },
  { user: '鈴木一郎', action: 'がタスクを完了しました', time: '1時間前' },
  { user: '山田美咲', action: 'がコメントを追加しました', time: '2時間前' },
])
</script>

<style scoped></style>
