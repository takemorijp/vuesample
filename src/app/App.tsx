import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Login } from './components/Login';
import { ForgotPassword } from './components/ForgotPassword';
import { SignUp } from './components/SignUp';
import { Home } from './components/pages/Home';
import { Dashboard } from './components/pages/Dashboard';
import { Documents } from './components/pages/Documents';
import { Users } from './components/pages/Users';
import { Settings } from './components/pages/Settings';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'forgotPassword' | 'signUp'>('login');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setAuthView('login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
    setDrawerOpen(false);
    setAuthView('login');
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  // ログインしていない場合は認証画面を表示
  if (!isLoggedIn) {
    if (authView === 'forgotPassword') {
      return <ForgotPassword onBack={() => setAuthView('login')} />;
    }
    if (authView === 'signUp') {
      return <SignUp onBack={() => setAuthView('login')} onSignUpSuccess={handleLogin} />;
    }
    return <Login onLogin={handleLogin} onForgotPassword={() => setAuthView('forgotPassword')} onSignUp={() => setAuthView('signUp')} />;
  }

  // ページコンテンツを選択
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return <Dashboard />;
      case 'documents':
        return <Documents />;
      case 'users':
        return <Users />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* サイドバー */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={toggleSidebar} 
        onPageChange={handlePageChange} 
        currentPage={currentPage}
        drawerOpen={drawerOpen}
        onDrawerToggle={() => setDrawerOpen(!drawerOpen)}
        onLogout={handleLogout}
      />

      {/* メインコンテンツエリア */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'ml-0'
        }`}
      >
        {/* ヘッダー */}
        <Header onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />

        {/* ボディ部 */}
        {renderPage()}
      </div>
    </div>
  );
}