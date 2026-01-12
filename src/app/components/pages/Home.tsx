import { TrendingUp, Users, FileText, CheckCircle } from 'lucide-react';

export function Home() {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* ウェルカムセクション */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-slate-800 mb-2">ホーム</h2>
          <p className="text-slate-600">
            ダッシュボードへようこそ。最新の情報をご確認ください。
          </p>
        </div>

        {/* 統計カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Users, label: '総ユーザー数', value: '1,234', color: 'bg-blue-500' },
            { icon: FileText, label: 'ドキュメント', value: '567', color: 'bg-green-500' },
            { icon: TrendingUp, label: '成長率', value: '+23%', color: 'bg-purple-500' },
            { icon: CheckCircle, label: '完了タスク', value: '89', color: 'bg-orange-500' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* アクティビティフィード */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">最近のアクティビティ</h3>
          <div className="space-y-4">
            {[
              { user: '田中太郎', action: 'が新しいドキュメントを作成しました', time: '5分前' },
              { user: '佐藤花子', action: 'がプロジェクトを更新しました', time: '15分前' },
              { user: '鈴木一郎', action: 'がタスクを完了しました', time: '1時間前' },
              { user: '山田美咲', action: 'がコメントを追加しました', time: '2時間前' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-slate-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-800">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
