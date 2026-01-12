export function MainContent() {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* ウェルカムセクション */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">ようこそ</h2>
          <p className="text-slate-600">
            これはサイドバー、ヘッダー、メインコンテンツを持つレイアウトです。
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                カード {item}
              </h3>
              <p className="text-slate-600 mb-4">
                これはサンプルのカードコンテンツです。ここに任意の情報を表示できます。
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                詳細を見る
              </button>
            </div>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: '総ユーザー数', value: '1,234' },
            { label: '今月の訪問数', value: '5,678' },
            { label: 'アクティブプロジェクト', value: '42' },
            { label: '完了タスク', value: '289' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg border border-slate-200 p-4"
            >
              <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
