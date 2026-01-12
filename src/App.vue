<template>
  <div class="min-h-screen bg-slate-50">
    <template v-if="!isLoggedIn">
      <div class="min-h-screen flex items-center justify-center">
        <Login v-if="authView === 'login'" @login="handleLogin" @forgot="showForgot" @signup="showSignup" />
        <ForgotPassword v-else-if="authView === 'forgotPassword'" @back="showLogin" />
        <SignUp v-else-if="authView === 'signUp'" @back="showLogin" @signup-success="handleLogin" />
      </div>
    </template>

    <template v-else>
      <Sidebar
        :is-open="sidebarOpen"
        @toggle="toggleSidebar"
        @page-change="handlePageChange"
        :current-page="currentPage"
        :drawer-open="drawerOpen"
        @drawer-toggle="drawerOpen = !drawerOpen"
        @logout="handleLogout"
      />

      <div :class="['transition-all duration-300', sidebarOpen ? 'lg:ml-64' : 'ml-0']">
        <Header @menu-click="toggleSidebar" :sidebar-open="sidebarOpen" />
        <component
          :is="currentView"
          @signup-success="handleLogin"
          @back="showLogin"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/pages/Home.vue'
import Dashboard from './components/pages/Dashboard.vue'
import Documents from './components/pages/Documents.vue'
import Users from './components/pages/Users.vue'
import Settings from './components/pages/Settings.vue'

const sidebarOpen = ref(true)
const isLoggedIn = ref(false)
const currentPage = ref('home')
const drawerOpen = ref(false)
const authView = ref<'login' | 'forgotPassword' | 'signUp'>('login')

const toggleSidebar = () => { sidebarOpen.value = !sidebarOpen.value }
const handleLogin = () => { isLoggedIn.value = true; authView.value = 'login' }
const handleLogout = () => {
  isLoggedIn.value = false
  currentPage.value = 'home'
  drawerOpen.value = false
  authView.value = 'login'
}
const handlePageChange = (page: string) => { currentPage.value = page }

function showForgot(){ authView.value = 'forgotPassword' }
function showSignup(){ authView.value = 'signUp' }
function showLogin(){ authView.value = 'login' }

const currentView = computed(() => {
  if (!isLoggedIn.value) {
    if (authView.value === 'forgotPassword') return ForgotPassword
    if (authView.value === 'signUp') return SignUp
    return Login
  }

  switch (currentPage.value) {
    case 'home': return Home
    case 'dashboard': return Dashboard
    case 'documents': return Documents
    case 'users': return Users
    case 'settings': return Settings
    default: return Home
  }
})
</script>

<style>
/* local styles if needed */
</style>
