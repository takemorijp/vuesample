import type { Meta, StoryObj } from '@storybook/vue3'
import Table from '../components/ui/table.vue'

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => ({
    components: { Table },
    template: `
      <div class="w-full overflow-x-auto">
        <table class="w-full border-collapse border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Name</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Email</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Role</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-4 py-2">John Doe</td>
              <td class="border border-gray-200 px-4 py-2">john@example.com</td>
              <td class="border border-gray-200 px-4 py-2">Admin</td>
              <td class="border border-gray-200 px-4 py-2"><span class="px-2 py-1 bg-green-100 text-green-700 text-sm rounded">Active</span></td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-4 py-2">Jane Smith</td>
              <td class="border border-gray-200 px-4 py-2">jane@example.com</td>
              <td class="border border-gray-200 px-4 py-2">User</td>
              <td class="border border-gray-200 px-4 py-2"><span class="px-2 py-1 bg-green-100 text-green-700 text-sm rounded">Active</span></td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-4 py-2">Bob Wilson</td>
              <td class="border border-gray-200 px-4 py-2">bob@example.com</td>
              <td class="border border-gray-200 px-4 py-2">User</td>
              <td class="border border-gray-200 px-4 py-2"><span class="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Inactive</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
}

export const Striped: Story = {
  render: () => ({
    components: { Table },
    template: `
      <div class="w-full overflow-x-auto">
        <table class="w-full border-collapse border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Product</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Category</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Price</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50 bg-white">
              <td class="border border-gray-200 px-4 py-2">Laptop</td>
              <td class="border border-gray-200 px-4 py-2">Electronics</td>
              <td class="border border-gray-200 px-4 py-2">\$999</td>
              <td class="border border-gray-200 px-4 py-2">45</td>
            </tr>
            <tr class="hover:bg-gray-50 bg-gray-50">
              <td class="border border-gray-200 px-4 py-2">Mouse</td>
              <td class="border border-gray-200 px-4 py-2">Accessories</td>
              <td class="border border-gray-200 px-4 py-2">\$25</td>
              <td class="border border-gray-200 px-4 py-2">120</td>
            </tr>
            <tr class="hover:bg-gray-50 bg-white">
              <td class="border border-gray-200 px-4 py-2">Keyboard</td>
              <td class="border border-gray-200 px-4 py-2">Accessories</td>
              <td class="border border-gray-200 px-4 py-2">\$75</td>
              <td class="border border-gray-200 px-4 py-2">85</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
}

export const Compact: Story = {
  render: () => ({
    components: { Table },
    template: `
      <div class="w-96 overflow-x-auto">
        <table class="w-full border-collapse border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-3 py-1 text-left font-medium">ID</th>
              <th class="border border-gray-200 px-3 py-1 text-left font-medium">Name</th>
              <th class="border border-gray-200 px-3 py-1 text-left font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-3 py-1">1</td>
              <td class="border border-gray-200 px-3 py-1">Item A</td>
              <td class="border border-gray-200 px-3 py-1">100</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-3 py-1">2</td>
              <td class="border border-gray-200 px-3 py-1">Item B</td>
              <td class="border border-gray-200 px-3 py-1">200</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-3 py-1">3</td>
              <td class="border border-gray-200 px-3 py-1">Item C</td>
              <td class="border border-gray-200 px-3 py-1">150</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
}

export const WithActions: Story = {
  render: () => ({
    components: { Table },
    template: `
      <div class="w-full overflow-x-auto">
        <table class="w-full border-collapse border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Name</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Status</th>
              <th class="border border-gray-200 px-4 py-2 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-4 py-2">User 1</td>
              <td class="border border-gray-200 px-4 py-2"><span class="px-2 py-1 bg-green-100 text-green-700 text-sm rounded">Active</span></td>
              <td class="border border-gray-200 px-4 py-2">
                <button class="px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">Edit</button>
                <button class="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded">Delete</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-200 px-4 py-2">User 2</td>
              <td class="border border-gray-200 px-4 py-2"><span class="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Inactive</span></td>
              <td class="border border-gray-200 px-4 py-2">
                <button class="px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">Edit</button>
                <button class="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
}

export const ScrollableX: Story = {
  render: () => ({
    components: { Table },
    template: `
      <div class="w-96 overflow-x-auto border border-gray-200 rounded-lg">
        <table class="w-full border-collapse">
          <thead class="bg-gray-50">
            <tr>
              <th class="border-b border-gray-200 px-4 py-2 text-left font-medium whitespace-nowrap">Column 1</th>
              <th class="border-b border-gray-200 px-4 py-2 text-left font-medium whitespace-nowrap">Column 2</th>
              <th class="border-b border-gray-200 px-4 py-2 text-left font-medium whitespace-nowrap">Column 3</th>
              <th class="border-b border-gray-200 px-4 py-2 text-left font-medium whitespace-nowrap">Column 4</th>
              <th class="border-b border-gray-200 px-4 py-2 text-left font-medium whitespace-nowrap">Column 5</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50">
              <td class="border-b border-gray-200 px-4 py-2">Data 1</td>
              <td class="border-b border-gray-200 px-4 py-2">Data 2</td>
              <td class="border-b border-gray-200 px-4 py-2">Data 3</td>
              <td class="border-b border-gray-200 px-4 py-2">Data 4</td>
              <td class="border-b border-gray-200 px-4 py-2">Data 5</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
}
