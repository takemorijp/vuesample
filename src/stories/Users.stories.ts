import type { Meta, StoryObj } from '@storybook/vue3'
import Users from '../components/pages/Users.vue'

const meta: Meta<typeof Users> = {
  title: 'Pages/Users',
  component: Users,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Users>

export const Default: Story = {
  render: () => ({
    components: { Users },
    template: '<div class="bg-slate-50 min-h-screen"><Users /></div>',
  }),
}

export const WithFilter: Story = {
  render: () => ({
    components: { Users },
    template: `
      <div class="bg-slate-50 p-6 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-3xl font-semibold text-slate-800 mb-2">ユーザー管理</h2>
                <p class="text-slate-600">チームメンバーとアクセス権限の管理</p>
              </div>
              <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                ユーザーを追加
              </button>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">役割: Admin</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ステータス: Active</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { Users },
    template: `
      <div class="bg-slate-50 p-6 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <div class="h-8 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div class="h-4 w-60 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div class="space-y-3">
            <div v-for="i in 5" :key="i" class="h-12 bg-white rounded-lg border border-slate-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    `,
  }),
}
