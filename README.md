大数据管控中心（BDMC：Big Data Management Center）的前端项目。

配置需求：
vue需要2.5及以上版本。
IED使用vscode，需安装插件vetur，vue TypeScript Snippets。其他插件按个人需求随意安装
npm包需要 "vue-class-component", "vue-property-decorator"
webpack需要4.0及以上版本

插件说明：
1、使用 axios 来实现vue中ajax的请求


项目首页入口  /index.html

多页面打包方式：
    1、在/src/scripts 目录下创建页面所需的 页面模版 a.vue ,页面脚本 a.ts
    2、在项目根目录下创建 访问的静态页 a.html
    3、在/build/webpack.base.conf.js, entry{} 里指明创建的新文件入口名和入口js 如:
        entry {
            ...,
            a: path.resolve(__dirname, '../src/scripts') + '/a.ts'
        }

        然后在plugins中添加页面合并的配置
        new HtmlWebpackPlugin({
        template: 'a.html',  //模版页位置
        filename: 'a.html',  //打包后的文件名
        chunks: ['a'],    //entry中对应的模块名
        }),

项目本地构建 --   npm run build 
项目本地运行 -- npm run dev 访问地址为 http://localhost:8080/ + 你自己创建的页面如 http://localhost:8080/a.html

示例地址为
http://localhost:8080/test.html
http://localhost:8080/parent.html （示例组件导入和引用）


页面接口本地代理
    1、线上请求路径为 （相对路径）：/schoolAppInfoStatisticsTodayTopN
    2、在本项目中使用axios来实现ajax请求
        axios.get("/schoolAppInfoStatisticsTodayTopN").then(
        res => {
            console.log(res.data)
        },
        (err)=>{
            console.log(err || "axios请求失败")
        }
        )

    3、数据本地代理
        a) 在项目/src/apijson目录下添加 与接口同名的json文件 （json格式参见 schoolAppInfoStatisticsTodayTopN.json）
        b) 在/config/index.js的proxyTable中添加转发规则
            示例为：
            
            '/schoolAppInfoCount': {  // api表示当前项目请求的接口名，作为规则的key存在 
                target: 'http://127.0.0.1:8080',
                // 代理服务器路径 
                pathRewrite: {
                    '^/schoolAppInfoCount': '/apijson/schoolAppInfoCount.json'
                },
                // 重写路径 
                changeOrigin: true
            }
    4、添加新的api转发规则和API对应的json文件后需要重启本地server  （npm run dev 或npm run start）

项目数据绑定
    1、引入数据代理模块，示例：import {DataProxy} from './Logic/DataProxy';
    2、实例数据代理模块，示例：this.dataProxy = new DataProxy([1,2,3,4,5,6],true,true,true); 参数格式(接口id数组格式，是否缓存数据，是否优先读取缓存数组，是否定时刷新)
    3、调用绑定数据的方法，示例：this.dataProxy.bindDataToModel(1, HotSchool, {params}); 参数格式(接口id，model名，请求接口需要的参数 无参数时可以为空)


#webpack多入口打包
dev模式下 entry配置各个chunk入口，按打包的html对各个页面HtmlWebpackPlugin，注意页面对应自己的chunk
prod模式下 HtmlWebpackPlugin打包文件时 chunks对应的是entry的模块名


打包说明：
 1、拉取代码；
 2、运行 npm install 安装node包
 3、运行 npm run build;
 4、生成的打包文件在 /dist 目录下 