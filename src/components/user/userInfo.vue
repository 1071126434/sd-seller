<template>
  <div class="wrap">
    <div class="shop">
      <em class="gray">账号信息</em>
    </div>
    <div class="personInfo">
      <div class="pic">
        <el-upload class="avatar-uploader" action="" :show-file-list="false" :http-request="uploadImg" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="upPic">点击上传图片</i>
        </el-upload>
      </div>
      <div class="id">
        <span>账户ID</span>
        <p style="margin-top:16px">{{ userInfo.telephone }}&nbsp;&nbsp;
          <span class="link" @click="showPhone=true">修改</span>
        </p>
      </div>
      <ul class="infoMsg">
        <li>
          登陆密码
          <span class="span blue">已设置</span>
          <button class="btn" @click="showPass=true">修改</button>
        </li>
        <li v-if="!userInfo.withdrawPassword">
          提现密码
          <span class="span red">未设置</span>
          <button class="btn" @click="showWithdraw=true">设置</button>
        </li>
        <li v-else>
          提现密码
          <span class="span blue">已设置</span>
          <button class="btn" @click="showWithdraw=true">修改</button>
        </li>
        <li class="phone">联系方式
          <span>完善以下信息将有助于平台及时联系您</span>
        </li>
        <li style="margin-top:32px">
          <span style="margin-right:65px">姓名</span>
          <el-input v-model="userObj.userName" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span style="margin-right:68px">QQ</span>
          <el-input v-model="userObj.qqNum" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span style="margin-right:64px">邮箱</span>
          <el-input v-model="userObj.email" placeholder="请输入内容"></el-input>
        </li>
        <li class="choose">
          <button class="btn" style="margin-right:32px" @click="sureToChangeName(1)">保存</button>
          <button class=" btn disabled" @click="sureToChangeName(0)">取消</button>
        </li>
      </ul>
    </div>
    <div class="alertGroup">
      <!-- 修改密码提示框 -->
      <el-dialog class="alertReturn" title="修改登录密码" :modal-append-to-body="false" :visible.sync="showPass" width="600px">
        <ul class="cont">
          <li>
            <span>原密码</span>
            <el-input type="password" v-model="passObj.oldPass" placeholder="请输入原密码" @focus="clearWarn(1)" style="width: 320px;"></el-input>
            <p class="red">{{ passObj.warn1 }}</p>
          </li>
          <li>
            <span>新密码</span>
            <el-input type="password" v-model="passObj.newPass1" placeholder="请输入新密码" @focus="clearWarn(2)" style="width: 320px;"></el-input>
            <p class="red">{{ passObj.warn2 }}</p>
          </li>
          <li>
            <span>确认新密码</span>
            <el-input type="password" v-model="passObj.newPass2" placeholder="请再次输入新密码" @focus="clearWarn(3)" style="width: 320px;"></el-input>
            <p class="red">{{ passObj.warn3 }}</p>
          </li>
        </ul>
        <div class="footBtns">
          <button class="btn" @click="sureToFixPass">确认</button>
          <button class="btn disabled" @click="showPass = false">取消</button>
        </div>
      </el-dialog>
      <!-- 修改提现密码提示框 -->
      <el-dialog class="alertReturn" title="设置提现密码" :modal-append-to-body="false" :visible.sync="showWithdraw" width="600px">
        <ul class="cont">
          <li v-if="userInfo.withdrawPassword">
            <span>原提现密码</span>
            <el-input type="password" v-model="withdrawObj.oldPass" placeholder="请输入原密码" @focus="clearWarn(4)" style="width: 320px;"></el-input>
            <p class="red">{{ withdrawObj.warn1 }}</p>
          </li>
          <li>
            <span>提现密码</span>
            <el-input type="password" v-model="withdrawObj.newPass1" placeholder="请输入新密码" @focus="clearWarn(5)" style="width: 320px;"></el-input>
            <p class="red">{{ withdrawObj.warn2 }}</p>
          </li>
          <li>
            <span>确认提现密码</span>
            <el-input type="password" v-model="withdrawObj.newPass2" placeholder="请再次输入新密码" @focus="clearWarn(6)" style="width: 320px;"></el-input>
            <p class="red">{{ withdrawObj.warn3 }}</p>
          </li>
        </ul>
        <div class="footBtns">
          <button class="btn" @click="sureToFixWithdraw">确认</button>
          <button class="btn disabled" @click="showWithdraw = false">取消</button>
        </div>
      </el-dialog>
      <!-- 修改手机号码提示框 -->
      <el-dialog class="alertReturn" title="修改手机号码" :modal-append-to-body="false" :visible.sync="showPhone" width="600px">
        <ul class="cont">
          <li>
            <span>新的手机号</span>
            <el-input type="number" v-model="phoneObj.phone" placeholder="请输入新的手机号" style="width: 320px;"></el-input>
            <p></p>
          </li>
          <li>
            <span>输入验证码</span>
            <el-input type="number" v-model="phoneObj.key" placeholder="请再次输入验证码" style="width: 160px;"></el-input>
            <strong class="testKey" :class="{ 'canClick': canClick }" @click="getKey">{{ phoneObj.text }}</strong>
            <p></p>
          </li>
        </ul>
        <div class="footBtns">
          <button class="btn" @click="sureToFixPhone">确认</button>
          <button class="btn disabled" @click="showPhone = false">取消</button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'
import { uploadPromise, uploadFile } from '../../assets/js/upload'
import md5 from 'md5'
export default {
  name: 'usrInfo',
  data () {
    return {
      // 密码修改
      showPass: false,
      passObj: {
        oldPass: '',
        newPass1: '',
        newPass2: '',
        warn1: '',
        warn2: '',
        warn3: ''
      },
      // 提现密码修改
      showWithdraw: false,
      withdrawObj: {
        oldPass: '',
        newPass1: '',
        newPass2: '',
        warn1: '',
        warn2: '',
        warn3: ''
      },
      // 显示修改手机号吗
      showPhone: false,
      phoneObj: {
        phone: '',
        key: '',
        text: '获取验证码'
      },
      canClick: true
    }
  },
  computed: {
    userObj: function () { // 设置个人信息
      let userInfo = this.userInfo
      let obj = {
        userName: userInfo.userName,
        qqNum: userInfo.qqNum,
        email: userInfo.email
      }
      return obj
    },
    imageUrl: function () {
      let userInfo = this.userInfo
      let url = userInfo.avatarPicId || 'http://bj.bcebos.com/v1/scalp/1508758557625c601fdea9f4b5fdf805d07334d1aff77u%3D2738007598%2C2643466217%26fm%3D27%26gp%3D0.jpg'
      return url
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 1
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return isJPG && isLt2M
    },
    uploadImg (img) {
      uploadPromise.then((res) => {
        if (res.statusText === 'OK') {
          uploadFile(res.data, img.file).then((res) => {
            this.imageUrl = res
            this.changeImg(res)
          }).catch(() => {
            this.$message.error('网络错误，请刷新试试')
          })
        }
      }).catch(() => {
        this.$message.error('网络错误，请刷新试试')
      })
    },
    changeImg (url) {
      this.$ajax.post('/api/sellerAccout/updateHeaderImage', {
        avatarPicId: url,
        sellerUserId: this.userInfo.sellerUserId
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.refresh()
        } else {
          this.$message({
            type: 'warning',
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    clearWarn (index) {
      switch (index) {
        case 1:
          this.passObj.warn1 = ''
          break
        case 2:
          this.passObj.warn2 = ''
          break
        case 3:
          this.passObj.warn3 = ''
          break
        case 4:
          this.withdrawObj.warn1 = ''
          break
        case 5:
          this.withdrawObj.warn2 = ''
          break
        case 6:
          this.withdrawObj.warn3 = ''
          break
        default:
          break
      }
    },
    sureToFixPass () {
      if (this.passObj.oldPass === '') {
        this.passObj.warn1 = '请输入原密码'
      } else if (this.passObj.newPass1 === '') {
        this.passObj.warn2 = '请输入新密码'
      } else if (this.passObj.newPass2 === '') {
        this.passObj.warn3 = '请再次输入新密码'
      } else if (this.passObj.newPass1 !== this.passObj.newPass2) {
        this.passObj.warn3 = '两次输入密码不一致'
      } else {
        this.$ajax.post('/api/sellerAccout/resetPassword', {
          oldPassword: md5(this.passObj.oldPass),
          newPassword: md5(this.passObj.oldPass),
          telephone: this.userInfo.telephone
        }).then((data) => {
          if (data.data.code === '200') {
            this.showPass = false
            this.$message({
              type: 'success',
              message: '修改成功!'
            })
            this.passObj = {
              oldPass: '',
              newPass1: '',
              newPass2: '',
              warn1: '',
              warn2: '',
              warn3: ''
            }
            this.refresh()
          } else {
            this.$message({
              type: 'warning',
              message: data.data.message
            })
            this.passObj.warn1 = data.data.message
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    // 修改提现密码
    sureToFixWithdraw () {
      if ((this.withdrawObj.oldPass === '') && (this.userInfo.withdrawPassword)) {
        this.withdrawObj.warn1 = '请输入原提现密码'
      } else if (this.withdrawObj.newPass1 === '') {
        this.withdrawObj.warn2 = '请输入新提现密码'
      } else if (this.withdrawObj.newPass2 === '') {
        this.withdrawObj.warn3 = '请再次输入新提现密码'
      } else if (this.withdrawObj.newPass1 !== this.withdrawObj.newPass2) {
        this.withdrawObj.warn3 = '两次输入密码不一致'
      } else if (!this.userInfo.withdrawPassword) { // 无设置提现密码
        this.$ajax.post('/api/sellerAccout/setWithdrawPassword', {
          withdrawPassword: md5(this.withdrawObj.newPass1),
          telephone: this.userInfo.telephone
        }).then((data) => {
          if (data.data.code === '200') {
            this.showWithdraw = false
            this.$message({
              type: 'success',
              message: '设置成功!'
            })
            this.withdrawObj = {
              oldPass: '',
              newPass1: '',
              newPass2: '',
              warn1: '',
              warn2: '',
              warn3: ''
            }
            this.refresh()
          } else {
            this.$message({
              type: 'warning',
              message: data.data.message
            })
            this.withdrawObj.warn1 = data.data.message
          }
        }).catch((err) => {
          console.log(err)
        })
      } else { // 已设置提现密码 直接修改
        this.$ajax.post('/api/sellerAccout/resetWithdrawPassword', {
          oldWithdrawPassword: md5(this.withdrawObj.oldPass),
          newWithdrawPassword: md5(this.withdrawObj.newPass1),
          telephone: this.userInfo.telephone
        }).then((data) => {
          if (data.data.code === '200') {
            this.showWithdraw = false
            this.$message({
              type: 'success',
              message: '修改成功!'
            })
            this.withdrawObj = {
              oldPass: '',
              newPass1: '',
              newPass2: '',
              warn1: '',
              warn2: '',
              warn3: ''
            }
            this.refresh()
          } else {
            this.$message({
              type: 'warning',
              message: data.data.message
            })
            this.withdrawObj.warn1 = data.data.message
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    sureToFixPhone () {
      if (this.phoneObj.phone === this.userInfo.telephone) {
        this.$message({
          type: 'warning',
          message: '输入的手机号码与原手机号一致!'
        })
      } else if (this.phoneObj.phone === '') {
        this.$message({
          type: 'warning',
          message: '请输入手机号码!'
        })
      } else if (this.phoneObj.key === '') {
        this.$message({
          type: 'warning',
          message: '请输入验证码!'
        })
      } else {
        this.$ajax.post('/api/config/sms/vertify', {
          type: 1,
          code: this.phoneObj.key,
          telephone: this.phoneObj.phone
        }).then((data) => {
          if (data.data.code === '200') {
            this.testKeySuccess()
          } else {
            this.$message({
              type: 'warning',
              message: data.data.message
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    getKey () {
      if (this.canClick) {
        if (this.phoneObj.phone === '') {
          this.$message({
            type: 'warning',
            message: '请输入手机号码!'
          })
        } else if (this.phoneObj.phone === this.userInfo.telephone) {
          this.$message({
            type: 'warning',
            message: '输入的手机号码与原手机号一致!'
          })
        } else {
          this.$ajax.post('/api/config/sms/sendSms', {
            telephone: this.phoneObj.phone,
            type: 1
          }).then((data) => {
            if (data.data.code === '200') {
              let leastTime = 59
              this.canClick = false
              let time = setInterval(() => {
                this.phoneObj.text = '获取验证码（' + leastTime + '秒）'
                leastTime--
                if (leastTime <= 0) {
                  clearInterval(time)
                  this.canClick = true
                  this.phoneObj.text = '重新获取'
                }
              }, 1000)
            } else {
              this.$message({
                type: 'warning',
                message: data.data.message
              })
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    },
    testKeySuccess () {
      this.$ajax.post('/api/sellerAccout/updateUserTelephone', {
        sellerUserId: this.userInfo.sellerUserId,
        telephone: this.phoneObj.phone
      }).then((data) => {
        if (data.data.code === '200') {
          this.showPhone = false
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.phoneObj = {
            phone: '',
            key: '',
            text: '获取验证码'
          }
          this.$router.push({ name: 'login' })
        } else {
          this.$message({
            type: 'warning',
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 修改姓名信息
    sureToChangeName (type) {
      if (type === 0) {
        this.$message({
          type: 'warning',
          message: '已取消修改!'
        })
      } else if (type === 1) {
        this.$ajax.post('/api/sellerAccout/updateSellerUserInfo', {
          userName: this.userObj.userName,
          qqNum: this.userObj.qqNum,
          email: this.userObj.email,
          sellerUserId: this.userInfo.sellerUserId
        }).then((data) => {
          if (data.data.code === '200') {
            this.$message({
              type: 'success',
              message: '修改成功!'
            })
            this.refresh()
          } else {
            this.$message({
              type: 'warning',
              message: data.data.message
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    // 刷新用户信息
    refresh () {
      this.$ajax.post('/api/sellerAccout/refresh', {
        telephone: this.userInfo.telephone
      }).then((data) => {
        if (data.data.code === '200') {
          this.setUserInfo(data.data.data)
        } else {
          this.$message({
            type: 'warning',
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    ...mapActions([
      'setUserInfo'
    ])
  },
  mounted () {
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  padding 0 20px 0 20px
  .red
    color #FF2933
  .blue
    color #029E4A
  .link
    color #1083E6
    cursor pointer
  .shop
    background #fff
    height 36px
    line-height 36px
    padding-left 20px
    font-size 14px
    color rgba(60, 60, 60, 1)
    .gray
      color rgba(137, 137, 137, 1)
  .personInfo
    background #fff
    margin-top 24px
    padding 0 20px 20px
    font-size 14px
    color rgba(155, 155, 155, 1)
    padding-left 60px
    .avatar-uploader
      border 1px solid #d9d9d9
      cursor pointer
      width 120px
      height 120px
      background rgba(250, 250, 250, 1)
      border-radius 50%
    .upPic
      font-size 14px
      display inline-block
      margin-top 50px
      margin-left 20px
    .avatar
      width 120px
      height 120px
      border-radius 50%
    .pic
      padding-top 40px
    .id
      float left
      margin-top -80px
      margin-left 150px
      font-size 14px
      color #444444
      >span
        color #9B9B9B
    .infoMsg
      margin-top 51px
      li
        margin-top 51px
        .span
          margin-left 40px
          margin-right 190px
      .phone
        border-bottom 1px solid #e5e5e5
        padding-bottom 10px
        color #444444
      .choose
        text-align center
  .alertGroup
    .cont
      margin-left 20px
      li
        span
          display inline-block
          width 90px
          text-align right
          margin-right 25px
        p
          margin-left 120px
          margin-bottom 10px
          line-height 20px
          font-size 12px
          height 20px
    .footBtns
      margin-top 20px
      text-align center
    .testKey
      display inline-block
      width 140px
      height 36px
      line-height 36px
      background #DEDEDE
      font-size 14px
      border-radius 4px
      color #9B9B9B
      text-align center
      margin-left 15px
      cursor not-allowed
    .canClick
      background #FF2933
      color #ffffff
      cursor pointer
</style>