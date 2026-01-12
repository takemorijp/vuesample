import { X, Search } from 'lucide-react';
import { useState } from 'react';

interface UserFilterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
}

export interface FilterValues {
  name: string;
  email: string;
  role: string;
  status: string;
  dateFrom: string;
  dateTo: string;
}

export function UserFilterDialog({ isOpen, onClose, onApplyFilters }: UserFilterDialogProps) {
  const [filters, setFilters] = useState<FilterValues>({
    name: '',
    email: '',
    role: '',
    status: '',
    dateFrom: '',
    dateTo: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      name: '',
      email: '',
      role: '',
      status: '',
      dateFrom: '',
      dateTo: '',
    };
    setFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  return (
    <>
      {/* オーバーレイ */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-200"
        onClick={onClose}
      />

      {/* ダイアログ */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ヘッダー */}
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">詳細検索</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* コンテンツ */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="space-y-5">
              {/* 名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  名前
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={filters.name}
                  onChange={handleChange}
                  placeholder="ユーザー名を入力"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={filters.email}
                  onChange={handleChange}
                  placeholder="メールアドレスを入力"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 役割 */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                  役割
                </label>
                <select
                  id="role"
                  name="role"
                  value={filters.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">すべての役割</option>
                  <option value="管理者">管理者</option>
                  <option value="編集者">編集者</option>
                  <option value="閲覧者">閲覧者</option>
                </select>
              </div>

              {/* ステータス */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-2">
                  ステータス
                </label>
                <select
                  id="status"
                  name="status"
                  value={filters.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">すべてのステータス</option>
                  <option value="アクティブ">アクティブ</option>
                  <option value="休止中">休止中</option>
                </select>
              </div>

              {/* 登録日（開始） */}
              <div>
                <label htmlFor="dateFrom" className="block text-sm font-medium text-slate-700 mb-2">
                  登録日（開始）
                </label>
                <input
                  id="dateFrom"
                  name="dateFrom"
                  type="date"
                  value={filters.dateFrom}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 登録日（終了） */}
              <div>
                <label htmlFor="dateTo" className="block text-sm font-medium text-slate-700 mb-2">
                  登録日（終了）
                </label>
                <input
                  id="dateTo"
                  name="dateTo"
                  type="date"
                  value={filters.dateTo}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* ヒント */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>検索のヒント:</strong> 複数の条件を組み合わせて絞り込むことができます。
                </p>
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              リセット
            </button>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                キャンセル
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 font-medium"
              >
                <Search className="w-4 h-4" />
                検索
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
