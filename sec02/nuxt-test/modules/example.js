export default function (){
    console.log('moduleのテスト')
    // Hookでどのタイミングで実施するか指定もできる
    // このthisはModuleContainerと呼ばれるオブジェクト
    this.nuxt.hook('ready', async nuxt => {
        // console.log(this)
        console.log('Nuxt is ready')
    })
}
