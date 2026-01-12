<template>
  <main class="p-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h2 class="text-3xl font-semibold text-slate-800 mb-2">ダッシュボード</h2>
        <p class="text-slate-600">ビジネスメトリクスとパフォーマンス指標</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="metric in metrics" :key="metric.label" class="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-2">
            <p class="text-sm text-slate-600">{{ metric.label }}</p>
            <component :is="metric.isPositive ? ArrowUpRight : ArrowDownRight" class="w-5 h-5" :class="metric.isPositive ? 'text-green-500' : 'text-red-500'" />
          </div>
          <p class="text-2xl font-semibold text-slate-800 mb-2">{{ metric.value }}</p>
          <p :class="['text-sm', metric.isPositive ? 'text-green-600' : 'text-red-600']">{{ metric.change }} vs 先月</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center gap-2 mb-4">
            <BarChart3 class="w-5 h-5 text-blue-500" />
            <h3 class="text-lg font-semibold text-slate-800">月次売上推移</h3>
          </div>
          <div class="h-64 flex items-end justify-between gap-2">
            <div v-for="(h, i) in chartHeights" :key="i" class="flex-1 flex flex-col items-center">
              <div class="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors" :style="{ height: h + '%' }"></div>
              <p class="text-xs text-slate-500 mt-2">{{ i+1 }}月</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-slate-200 p-6">
          <div class="flex items-center gap-2 mb-4">
            <TrendingUp class="w-5 h-5 text-green-500" />
            <h3 class="text-lg font-semibold text-slate-800">トップ商品</h3>
          </div>
          <div class="space-y-4">
            <div v-for="(p, idx) in products" :key="idx" class="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0">
              <div>
                <p class="font-medium text-slate-800">{{ p.name }}</p>
                <p class="text-sm text-slate-500">{{ p.units }}</p>
              </div>
              <p class="font-semibold text-slate-800">{{ p.sales }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BarChart3, TrendingUp, ArrowUpRight, ArrowDownRight, Trash2 } from 'lucide-vue-next'

const dialogOpen = ref(false)
const selectedItem = ref('')

function showDeleteAlert(name: string){
  alert(`${name} を削除します`)
}

const metrics = [
  { label: '今月の売上', value: '¥1,234,567', change: '+12.5%', isPositive: true },
  { label: '新規顧客', value: '234', change: '+8.2%', isPositive: true },
  { label: 'コンバージョン率', value: '3.24%', change: '-2.1%', isPositive: false },
  { label: '平均注文額', value: '¥15,890', change: '+5.3%', isPositive: true },
]

const chartHeights = [65,85,75,90,95,88,100]

const products = [
  { name: '商品A', sales: '¥456,789', units: '123個' },
  { name: '商品B', sales: '¥345,678', units: '98個' },
  { name: '商品C', sales: '¥234,567', units: '87個' },
  { name: '商品D', sales: '¥198,765', units: '65個' },
  { name: '商品E', sales: '¥156,432', units: '54個' },
]
</script>

<style scoped></style>
