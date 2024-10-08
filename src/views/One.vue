<template>
  <div class="h-screen flex">
    <!-- 左侧 -->
    <div class="w-1/2">
      <img :src="imgs[showImg]" class="h-full w-full object-cover" />
    </div>
    <!-- 右侧 -->
    <div class="w-1/2 flex flex-col gap-20 items-center justify-center">
      <h1 class="text-4xl">登陆，即刻创造您的应用</h1>
      <div class="flex flex-row items-center gap-20">
        <h1 class="text-xl">手机号登录</h1>
        <h3 class="text-xl text-blue-800 border-blue-800 rounded-1g border-b-2">账号密码登录</h3>
      </div>
      <form class="flex flex-col gap-20 w-96" @submit.prevent="login">
        <div class="flex flex-col gap-4">
          <input
            v-model="account"
            required
            type="text"
            placeholder="账号"
            class="input input-bordered"
          />

          <input
            v-model="password"
            required
            type="password"
            placeholder="密码"
            class="input input-bordered"
          />

          <label class="cursor-pointer label p-0 justify-start gap-2">
            <input
              required
              type="checkbox"
              class="checkbox checkbox-xs"
              @click="acceptTerm = !acceptTerm"
            />
            <span class="label-text">我已阅读并同意 服务协议 和 隐私政策</span>
          </label>
        </div>

        <div class="form-control w-96 flex flex-col gap-4 items-center">
          <button class="btn w-96 bg-blue-500 text-white">登陆</button>
          <div class="text-base-content/50">还未注册？立即注册</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const imgs = ['./login/3.png', './login/2.png', './login/1.png', './login/2.png']
const showImg = Math.floor(Math.random() * 3) + 1

const account = ref('yang123')
const password = ref('123')
const acceptTerm = ref(false)

const login = async () => {
  // 检查输入的账号和密码
  if (account.value === 'yang123' && password.value === '123') {
    // 如果账号和密码正确，跳转
    alert('登陆成功')
    localStorage.setItem('isLogin', '1')
    router.push('/') // 跳转到主页
  } else {
    // 如果账号或密码错误，提醒用户
    alert('账号或密码错误')
  }
}
</script>
