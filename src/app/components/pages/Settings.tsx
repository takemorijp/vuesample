import { User, Bell, Shield, Palette, Globe, Save } from 'lucide-react';
import { useState } from 'react';

export function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <main className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-slate-800 mb-2">設定</h2>
          <p className="text-slate-600">アカウントとアプリケーションの設定を管理</p>
        </div>

        <div className="space-y-6">
          {/* プロフィール設定 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-slate-800">プロフィール</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    名前
                  </label>
                  <input
                    type="text"
                    defaultValue="田中太郎"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    defaultValue="tanaka@example.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  自己紹介
                </label>
                <textarea
                  rows={3}
                  defaultValue="プロジェクトマネージャーとして働いています。"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* 通知設定 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-slate-800">通知設定</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-800">プッシュ通知</p>
                  <p className="text-sm text-slate-600">重要なアップデートを通知します</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    notifications ? 'bg-blue-500' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      notifications ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-800">メール通知</p>
                  <p className="text-sm text-slate-600">週次レポートをメールで受け取ります</p>
                </div>
                <button
                  onClick={() => setEmailUpdates(!emailUpdates)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    emailUpdates ? 'bg-blue-500' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      emailUpdates ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* セキュリティ設定 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-slate-800">セキュリティ</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  現在のパスワード
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    新しいパスワード
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    パスワード確認
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 表示設定 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-slate-800">表示設定</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  テーマ
                </label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>ライトモード</option>
                  <option>ダークモード</option>
                  <option>システム設定に従う</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  言語
                </label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>日本語</option>
                  <option>English</option>
                  <option>中文</option>
                </select>
              </div>
            </div>
          </div>

          {/* 保存ボタン */}
          <div className="flex justify-end gap-3">
            <button className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              キャンセル
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Save className="w-5 h-5" />
              変更を保存
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
