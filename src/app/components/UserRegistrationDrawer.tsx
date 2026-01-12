import { X, User, Mail, Lock, Phone, Building, Save } from 'lucide-react';

interface UserRegistrationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserRegistrationDrawer({ isOpen, onClose }: UserRegistrationDrawerProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 登録処理のシミュレーション
    console.log('ユーザー登録');
    onClose();
  };

  return (
    <>
      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-500"
          onClick={onClose}
        />
      )}

      {/* ドロワー */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* ヘッダー */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">新規ユーザー登録</h2>
                <p className="text-sm text-slate-600">新しいチームメンバーを追加</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="閉じる"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          {/* フォームコンテンツ */}
          <div className="flex-1 overflow-y-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 基本情報セクション */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">基本情報</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        姓
                      </label>
                      <input
                        type="text"
                        placeholder="山田"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        名
                      </label>
                      <input
                        type="text"
                        placeholder="太郎"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      メールアドレス
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="user@example.com"
                        required
                        className="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      電話番号
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="090-1234-5678"
                        className="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 組織情報セクション */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">組織情報</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      部署
                    </label>
                    <div className="relative">
                      <Building className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="営業部"
                        className="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      役職
                    </label>
                    <input
                      type="text"
                      placeholder="マネージャー"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      権限
                    </label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="viewer">閲覧者</option>
                      <option value="editor">編集者</option>
                      <option value="admin">管理者</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* セキュリティセクション */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">セキュリティ</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      初期パスワード
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        required
                        className="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      ※ 初回ログイン時にパスワード変更を求められます
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      パスワード確認
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        required
                        className="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* オプション */}
              <div className="bg-slate-50 p-4 rounded-lg">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-blue-500 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-slate-700">
                      招待メールを送信
                    </span>
                    <p className="text-xs text-slate-600 mt-1">
                      登録完了後、ユーザーに招待メールを自動送信します
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>

          {/* フッター（アクションボタン） */}
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-white transition-colors"
              >
                キャンセル
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                ユーザーを登録
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}