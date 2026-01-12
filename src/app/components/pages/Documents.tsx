import { FileText, Search, Plus, Filter, Download, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ConfirmDialog } from '../ConfirmDialog';

const allDocuments = [
  { name: 'プロジェクト企画書.pdf', type: 'PDF', date: '2026/01/10', size: '2.4 MB' },
  { name: '年次報告書.docx', type: 'Word', date: '2026/01/09', size: '1.8 MB' },
  { name: '売上データ.xlsx', type: 'Excel', date: '2026/01/08', size: '856 KB' },
  { name: 'プレゼン資料.pptx', type: 'PowerPoint', date: '2026/01/07', size: '3.2 MB' },
  { name: '議事録_2026_01.txt', type: 'Text', date: '2026/01/06', size: '24 KB' },
  { name: 'マーケティング戦略.pdf', type: 'PDF', date: '2026/01/05', size: '1.5 MB' },
  { name: '予算計画.xlsx', type: 'Excel', date: '2026/01/04', size: '678 KB' },
  { name: '顧客リスト.csv', type: 'CSV', date: '2026/01/03', size: '145 KB' },
  { name: '製品カタログ.pdf', type: 'PDF', date: '2026/01/02', size: '4.1 MB' },
  { name: '営業報告書.docx', type: 'Word', date: '2026/01/01', size: '1.2 MB' },
  { name: '在庫管理表.xlsx', type: 'Excel', date: '2025/12/30', size: '542 KB' },
  { name: '研修資料.pptx', type: 'PowerPoint', date: '2025/12/29', size: '2.8 MB' },
  { name: '契約書テンプレート.docx', type: 'Word', date: '2025/12/28', size: '156 KB' },
  { name: '経費精算書.xlsx', type: 'Excel', date: '2025/12/27', size: '234 KB' },
  { name: '組織図.pdf', type: 'PDF', date: '2025/12/26', size: '987 KB' },
  { name: '採用計画.docx', type: 'Word', date: '2025/12/25', size: '678 KB' },
  { name: '月次レポート.xlsx', type: 'Excel', date: '2025/12/24', size: '1.1 MB' },
  { name: 'FAQ資料.pdf', type: 'PDF', date: '2025/12/23', size: '2.3 MB' },
  { name: '業務マニュアル.docx', type: 'Word', date: '2025/12/22', size: '3.5 MB' },
  { name: '取引先リスト.csv', type: 'CSV', date: '2025/12/21', size: '89 KB' },
];

export function Documents() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(allDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDocuments = allDocuments.slice(startIndex, endIndex);

  const handleDeleteClick = (docName: string) => {
    setSelectedDoc(docName);
    setDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log('削除:', selectedDoc);
    // 削除処理のシミュレーション
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-800 mb-2">ドキュメント</h2>
              <p className="text-slate-600">ファイルとドキュメントの管理</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Plus className="w-5 h-5" />
              新規作成
            </button>
          </div>

          {/* 検索とフィルター */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="ドキュメントを検索..."
                className="w-full pl-11 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Filter className="w-5 h-5" />
              フィルター
            </button>
          </div>
        </div>

        {/* ドキュメントリスト */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-slate-700">名前</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-slate-700">種類</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-slate-700">更新日</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-slate-700">サイズ</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-slate-700">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {currentDocuments.map((doc, index) => (
                <tr key={startIndex + index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="font-medium text-slate-800">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{doc.date}</td>
                  <td className="px-6 py-4 text-slate-600">{doc.size}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 rounded transition-colors">
                        <Download className="w-4 h-4 text-slate-600" />
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(doc.name)}
                        className="p-2 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ページネーション */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-slate-600">
            {startIndex + 1}-{Math.min(endIndex, allDocuments.length)} / {allDocuments.length}件のドキュメント
          </p>
          <div className="flex gap-2">
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              前へ
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-3 py-1 rounded transition-colors text-sm ${
                  currentPage === page
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'border border-slate-300 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              次へ
            </button>
          </div>
        </div>
      </div>

      {/* 削除確認ダイアログ */}
      <ConfirmDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title="ファイルを削除しますか？"
        message={`「${selectedDoc}」を削除してもよろしいですか？この操作は取り消せません。`}
        confirmText="削除"
        cancelText="キャンセル"
        type="danger"
      />
    </main>
  );
}