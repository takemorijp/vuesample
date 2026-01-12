import type { Meta, StoryObj } from '@storybook/vue3'
import Documents from '../components/pages/Documents.vue'

const meta: Meta<typeof Documents> = {
  title: 'Pages/Documents',
  component: Documents,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Documents>

export const Default: Story = {
  render: () => ({
    components: { Documents },
    template: '<div class="bg-slate-50"><Documents /></div>',
  }),
}

export const WithSearch: Story = {
  render: () => ({
    components: { Documents },
    template: `
      <div class="bg-slate-50 p-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-3xl font-semibold text-slate-800 mb-2">ドキュメント</h2>
                <p class="text-slate-600">ファイルとドキュメントの管理</p>
              </div>
              <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                新規作成
              </button>
            </div>
            <div class="flex gap-4">
              <div class="flex-1 relative">
                <input type="text" value="search keyword" placeholder="ドキュメントを検索..." class="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button class="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                フィルター
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Empty: Story = {
  render: () => ({
    components: { Documents },
    template: `
      <div class="bg-slate-50 p-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <h2 class="text-3xl font-semibold text-slate-800 mb-2">ドキュメント</h2>
            <p class="text-slate-600">ファイルとドキュメントの管理</p>
          </div>
          <div class="bg-white rounded-lg border border-slate-200 p-12 text-center">
            <div class="mb-4">
              <svg class="w-12 h-12 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-800 mb-2">ドキュメントがありません</h3>
            <p class="text-slate-600">新しいドキュメントを作成してください</p>
          </div>
        </div>
      </div>
    `,
  }),
}
