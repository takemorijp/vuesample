import { Menu, Bell, Search, User, Settings, LogOut, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

export function Header({ onMenuClick, sidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="flex items-center justify-between px-6 py-4">
        {/* 左側: メニューボタンとタイトル */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="メニューを開く"
          >
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
          <h1 className="text-xl font-semibold text-slate-800">アプリケーション</h1>
        </div>

        {/* 右側: 検索と通知 */}
        <div className="flex items-center gap-4">
          {/* 検索バー */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="検索..."
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* 通知アイコン */}
          <button
            className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="通知"
          >
            <Bell className="w-6 h-6 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* プロフィールアイコン */}
          <button
            className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium hover:bg-blue-600 transition-colors"
          >
            U
          </button>
        </div>
      </div>
    </header>
  );
}