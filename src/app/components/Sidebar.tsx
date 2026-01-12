import { Home, Users, Settings, BarChart, FileText, Menu } from 'lucide-react';
import { User, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
  drawerOpen: boolean;
  onDrawerToggle: () => void;
  onLogout: () => void;
}

export function Sidebar({ isOpen, onToggle, onPageChange, currentPage, drawerOpen, onDrawerToggle, onLogout }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'ホーム', page: 'home' },
    { icon: BarChart, label: 'ダッシュボード', page: 'dashboard' },
    { icon: FileText, label: 'ドキュメント', page: 'documents' },
    { icon: Users, label: 'ユーザー', page: 'users' },
    { icon: Settings, label: '設定', page: 'settings' },
  ];

  return (
    <>
      {/* サイドバー */}
      <aside
        className={`fixed left-0 top-0 h-full bg-slate-900 text-white transition-all duration-300 z-40 ${
          isOpen ? 'w-64' : 'w-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* サイドバーヘッダー */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h2 className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              メニュー
            </h2>
            <button
              onClick={onToggle}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="メニューを閉じる"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* ナビゲーションメニュー */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => onPageChange(item.page)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* サイドバーフッター */}
          <div className="p-4 border-t border-slate-700">
            <button
              onClick={onDrawerToggle}
              className="w-full flex items-center gap-3 hover:bg-slate-800 p-2 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-sm font-medium">ユーザー名</p>
                <p className="text-xs text-slate-400">user@example.com</p>
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* オーバーレイ（モバイル用） */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
          aria-label="オーバーレイ"
        />
      )}

      {/* ドロワーメニュー */}
      {drawerOpen && (
        <>
          {/* オーバーレイ */}
          <div
            className="fixed inset-0 z-40"
            onClick={onDrawerToggle}
          />

          {/* ダイアログメニュー */}
          <div className="fixed bottom-20 left-6 w-64 bg-white shadow-lg rounded-lg z-50 border border-slate-200">
            {/* ユーザー情報 */}
            <div className="p-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  U
                </div>
                <div>
                  <p className="font-medium text-slate-800">ユーザー名</p>
                  <p className="text-xs text-slate-600">user@example.com</p>
                </div>
              </div>
            </div>

            {/* メニュー項目 */}
            <nav className="p-2">
              <ul className="space-y-1">
                <li>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-left">
                    <User className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-700">プロフィール</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-left">
                    <Settings className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-700">設定</span>
                  </button>
                </li>
                <li className="pt-1 border-t border-slate-200">
                  <button
                    onClick={() => {
                      onDrawerToggle();
                      onLogout();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors text-left"
                  >
                    <LogOut className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-medium">ログアウト</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}