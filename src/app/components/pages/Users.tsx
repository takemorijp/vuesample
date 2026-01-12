import { Users as UsersIcon, Search, Plus, Mail, MoreVertical, Filter } from 'lucide-react';
import { useState } from 'react';
import { UserRegistrationDrawer } from '../UserRegistrationDrawer';
import { UserFilterDialog, FilterValues } from '../UserFilterDialog';

const allUsers = [
  { name: '田中太郎', email: 'tanaka@example.com', role: '管理者', status: 'アクティブ' },
  { name: '佐藤花子', email: 'sato@example.com', role: '編集者', status: 'アクティブ' },
  { name: '鈴木一郎', email: 'suzuki@example.com', role: '閲覧者', status: 'アクティブ' },
  { name: '山田美咲', email: 'yamada@example.com', role: '編集者', status: '休止中' },
  { name: '高橋健太', email: 'takahashi@example.com', role: '閲覧者', status: 'アクティブ' },
  { name: '伊藤真理', email: 'ito@example.com', role: '編集者', status: 'アクティブ' },
  { name: '渡辺誠', email: 'watanabe@example.com', role: '閲覧者', status: 'アクティブ' },
  { name: '中村優子', email: 'nakamura@example.com', role: '管理者', status: 'アクティブ' },
];

export function Users() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterValues>({
    name: '',
    email: '',
    role: '',
    status: '',
    dateFrom: '',
    dateTo: '',
  });

  const handleApplyFilters = (filters: FilterValues) => {
    setActiveFilters(filters);
  };

  // フィルタリングロジック
  const filteredUsers = allUsers.filter((user) => {
    // 簡易検索
    const matchesSearch = searchQuery === '' || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    // 詳細検索フィルター
    const matchesName = activeFilters.name === '' || 
      user.name.toLowerCase().includes(activeFilters.name.toLowerCase());
    
    const matchesEmail = activeFilters.email === '' || 
      user.email.toLowerCase().includes(activeFilters.email.toLowerCase());
    
    const matchesRole = activeFilters.role === '' || 
      user.role === activeFilters.role;
    
    const matchesStatus = activeFilters.status === '' || 
      user.status === activeFilters.status;

    return matchesSearch && matchesName && matchesEmail && matchesRole && matchesStatus;
  });

  // アクティブなフィルター数をカウント
  const activeFilterCount = Object.values(activeFilters).filter(value => value !== '').length;

  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-800 mb-2">ユーザー管理</h2>
              <p className="text-slate-600">チームメンバーとアクセス権限の管理</p>
            </div>
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              ユーザーを追加
            </button>
          </div>

          {/* 検索バーとフィルターボタン */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="ユーザーを検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setFilterDialogOpen(true)}
              className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 relative"
            >
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700 font-medium">フィルター</span>
              {activeFilterCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* アクティブフィルター表示 */}
          {activeFilterCount > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {activeFilters.name && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2">
                  名前: {activeFilters.name}
                </span>
              )}
              {activeFilters.email && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2">
                  メール: {activeFilters.email}
                </span>
              )}
              {activeFilters.role && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2">
                  役割: {activeFilters.role}
                </span>
              )}
              {activeFilters.status && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2">
                  ステータス: {activeFilters.status}
                </span>
              )}
            </div>
          )}
        </div>

        {/* 統計 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: '総ユーザー数', value: '156', color: 'bg-blue-500' },
            { label: 'アクティブユーザー', value: '142', color: 'bg-green-500' },
            { label: '今月の新規', value: '12', color: 'bg-purple-500' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg border border-slate-200 p-6"
            >
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* ユーザーリスト */}
        <div className="bg-white rounded-lg border border-slate-200">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">チームメンバー</h3>
            <p className="text-sm text-slate-600">{filteredUsers.length}名のユーザー</p>
          </div>
          <div className="divide-y divide-slate-200">
            {filteredUsers.map((user, index) => (
              <div key={index} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* アバター */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                      {user.name.charAt(0)}
                    </div>
                    
                    {/* ユーザー情報 */}
                    <div>
                      <p className="font-medium text-slate-800">{user.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="w-4 h-4 text-slate-400" />
                        <p className="text-sm text-slate-600">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* ロールとステータス */}
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {user.role}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === 'アクティブ'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {user.status}
                    </span>
                    <button className="p-2 hover:bg-slate-100 rounded transition-colors">
                      <MoreVertical className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ユーザー登録ドロワー */}
      <UserRegistrationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      
      {/* ユーザーフィルターダイアログ */}
      <UserFilterDialog
        isOpen={filterDialogOpen}
        onClose={() => setFilterDialogOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </main>
  );
}