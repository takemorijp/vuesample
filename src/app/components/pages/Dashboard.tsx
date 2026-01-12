import { BarChart3, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function Dashboard() {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-slate-800 mb-2">ダッシュボード</h2>
          <p className="text-slate-600">
            ビジネスメトリクスとパフォーマンス指標
          </p>
        </div>

        {/* メトリクスカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: '今月の売上', value: '¥1,234,567', change: '+12.5%', isPositive: true },
            { label: '新規顧客', value: '234', change: '+8.2%', isPositive: true },
            { label: 'コンバージョン率', value: '3.24%', change: '-2.1%', isPositive: false },
            { label: '平均注文額', value: '¥15,890', change: '+5.3%', isPositive: true },
          ].map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-600">{metric.label}</p>
                {metric.isPositive ? (
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-red-500" />
                )}
              </div>
              <p className="text-2xl font-semibold text-slate-800 mb-2">{metric.value}</p>
              <p className={`text-sm ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change} vs 先月
              </p>
            </div>
          ))}
        </div>

        {/* チャートとテーブル */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 売上チャート */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-slate-800">月次売上推移</h3>
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 85, 75, 90, 95, 88, 100].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                    style={{ height: `${height}%` }}
                  ></div>
                  <p className="text-xs text-slate-500 mt-2">{index + 1}月</p>
                </div>
              ))}
            </div>
          </div>

          {/* トップ商品 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-slate-800">トップ商品</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: '商品A', sales: '¥456,789', units: '123個' },
                { name: '商品B', sales: '¥345,678', units: '98個' },
                { name: '商品C', sales: '¥234,567', units: '87個' },
                { name: '商品D', sales: '¥198,765', units: '65個' },
                { name: '商品E', sales: '¥156,432', units: '54個' },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0">
                  <div>
                    <p className="font-medium text-slate-800">{product.name}</p>
                    <p className="text-sm text-slate-500">{product.units}</p>
                  </div>
                  <p className="font-semibold text-slate-800">{product.sales}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
