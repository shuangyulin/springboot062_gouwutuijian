const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot707pd/",
            name: "springboot707pd",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot707pd/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "购物推荐网站"
        } 
    }
}
export default base
