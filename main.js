通勤型_普通_下り = ["581", "573", "671", "767", "777", "1267", "1261(1)", "1261(2)", "2069"]
通勤型_準急_下り = ["685C", "791C", "1283C", "1285C", "2087C"]
通勤型_急行_下り = ["555B", "3545B"]
通勤型_快急_下り = ["3643K"]
通勤型_回送_下り = ["回451", "回771"]
特急形_特急_下り = ["619A", "711A", "1107A", "1209A"]
特急形_回送_下り = ["回503A", "回607A", "回1105A"]
通勤型_普通_上り = ["572", "766", "770", "786", "1166", "1260", "2066"]
通勤型_準急_上り = ["592C", "782C", "1282C", "1284C", "2084C"]
通勤型_急行_上り = ["550B", "678B", "3744B"]
通勤型_快急_上り = ["654K", "796K"]
通勤型_回送_上り = ["回586", "回862", "回980"]
特急形_特急_上り = ["602A", "606A", "1204A", "1202A"]
特急形_回送_上り = ["回1306A"]
天候リスト = ["晴", "晴", "晴", "晴", "晴", "晴", "曇", "雨", "雪", "晴/曇", "晴/雨", "晴/雪", "曇/雨", "曇/雪"]
車両_通勤型 = ["5320形", "5300形", "4300形", "4000形", "4000形(更新車)"]
車両_特急型 = ["50000形"]

function generate() {
	運転する列車 = document.getElementById("運転する列車")
	天候 = document.getElementById("天候")
	使用車両 = document.getElementById("使用車両")
	車両タイプ = document.getElementById("車両タイプ").value
	方面 = document.getElementById("方面").value
	普通 = document.getElementById("普通").checked
	準急 = document.getElementById("準急").checked
	急行 = document.getElementById("急行").checked
	快急 = document.getElementById("快急").checked
	特急 = document.getElementById("特急").checked
	回送 = document.getElementById("回送").checked
	生成する列車リスト = []
	生成する車両リスト = []
	if (車両タイプ == "すべて")
	{
		if (Math.floor(Math.random() * 4)==0)
		{
			車両タイプ = "特急型"
			生成する車両リスト = 車両_特急型
		}
		else
		{
			車両タイプ = "通勤型"
			生成する車両リスト = 車両_通勤型
		}
	}
	else
	{
		if (車両タイプ == "通勤型")
			生成する車両リスト = 車両_通勤型
		if (車両タイプ == "特急型")
			生成する車両リスト = 車両_特急型
	}
	if (方面 == "すべて" || 方面 == "上り")
	{
		if (車両タイプ == "通勤型")
		{
			if (普通)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_普通_上り)
			if (準急)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_準急_上り)
			if (急行)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_急行_上り)
			if (快急)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_快急_上り)
			if (回送)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_回送_上り)
		}
		if (車両タイプ == "特急型")
		{
			if (特急)
				生成する列車リスト = 生成する列車リスト.concat(特急形_特急_上り)
			if (回送)
				生成する列車リスト = 生成する列車リスト.concat(特急形_回送_上り)
		}
	}
	if (方面 == "すべて" || 方面 == "下り")
	{
		if (車両タイプ == "通勤型")
		{
			if (普通)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_普通_下り)
			if (準急)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_準急_下り)
			if (急行)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_急行_下り)
			if (快急)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_快急_下り)
			if (回送)
				生成する列車リスト = 生成する列車リスト.concat(通勤型_回送_下り)
		}
		if (車両タイプ == "特急型")
		{
			if (特急)
				生成する列車リスト = 生成する列車リスト.concat(特急形_特急_下り)
			if (回送)
				生成する列車リスト = 生成する列車リスト.concat(特急形_回送_下り)
		}
	}
	運転する列車.innerHTML = "列車番号：" + 生成する列車リスト[Math.floor(Math.random() * 生成する列車リスト.length)]
	天候.innerHTML = "天候：" + 天候リスト[Math.floor(Math.random() * 天候リスト.length)]
	使用車両.innerHTML = "車両：" + 生成する車両リスト[Math.floor(Math.random() * 生成する車両リスト.length)]
}

function select_all()
{
	document.getElementById("普通").checked = true
	document.getElementById("準急").checked = true
	document.getElementById("急行").checked = true
	document.getElementById("快急").checked = true
	document.getElementById("特急").checked = true
	document.getElementById("回送").checked = true
}

function unselect_all()
{
	document.getElementById("普通").checked = false
	document.getElementById("準急").checked = false
	document.getElementById("急行").checked = false
	document.getElementById("快急").checked = false
	document.getElementById("特急").checked = false
	document.getElementById("回送").checked = false
}