module.exports={
	entry:'./src/js/main.js',
	output:{
		path:__dirname+"/dist",
		filename:"bundle.js"
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				loader:"style-loader!css-loader"
			}
		]
	},
	devServer:{
		port:8081,//端口改为8081	
		open:true,// 自动打开浏览器，适合懒人
		// compress:true //压缩
	}
}
