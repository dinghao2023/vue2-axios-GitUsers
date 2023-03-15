# vue2-axios-GitUsers

基于vue2、axios请求的一个小案例，通过输入关键字搜索github相关用户，并根据请求的不同状态展示不同信息。

### List组件

页面主体，首次打开页面展现欢迎词；点击搜索后显示“加载中”，搜索成功展示用户列表，搜索则展示错误信息。

在`mounted`钩子中为全局时间总线`$bus`绑定`updateListData`事件，接收Search组件传递过来的数据以便进行后续页面的展示：

```js
mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
        this.info = {...this.info, ...dataObj}
    })
}
```

### Search组件

展现页面头部搜索框，在此输入关键字进行搜索。

点击按钮搜索之后触发`updateListData`事件，将数据以参数形式传递给List组件。

通过axios请求获取github用户，并根据成功和失败的状态分别传递不同的数据：

```js
this.$bus.$emit("updateListData",{isFirst:false,isLoading:true,errMsg:"",users:[]})
axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
    response => {
        this.$bus.$emit("updateListData", {isLoading: false, errMsg: "", users: response.data.items})
    },
    error => {
        this.$bus.$emit("updateListData", { isLoading: false, errMsg: error.message, users: [] })
    }
)
```
