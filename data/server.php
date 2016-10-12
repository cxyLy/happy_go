<?php
   $type = $_POST["type"];
   if(isset($type)){//$type 存在
   	  if($type == "login"){
   	  	$name = $_POST["username"];
		$psd = $_POST["pwd"];
		//$time = $_POST["time"];//当前时间的时间戳
		$flag = null;//返回登录成功标志，true，成功，false，失败

		/*
		 * 判断传递进来的用户名和密码，是否在user.json中，如果存在，返回true；
		 *
		 */
		 //1.读取user.json中的数据
		 $json = file_get_contents("user.json");
		 //2.将$json解析成数组
		 $arr_json = json_decode($json,true);//对json字符串转化为数组类型，第二个参数为true，说明返回的是数组类型，否则为object类型。
		//3.遍历数组，与传递过来的用户名和密码匹配
		for($i = 0;$i<count($arr_json);$i++){
			if($arr_json[$i]["name"] == $name && $arr_json[$i]["psd"] == $psd){
				//4.如果用户名和密码验证均通过，则将该数组中的state改为1，证明已登录
				$arr_json[$i]["state"] = "1";
				$flag = true;
			}
		}
		//5.将$arr_json编码写回到user.json中
		$json_encode = json_encode($arr_json);
		file_put_contents("user.json", $json_encode);
		//返回json类型的flag标志
		echo json_encode($flag);
   	  }

		 /*
		  * 注册
		  */
		 if($type == "register"){

				 $name = $_POST['username'];
				 $psd = $_POST['psd'];
				 $time = $_POST["time"];
				 $state = $_POST["state"];

				 $data = array("name" => $name,"psd" => $psd,"timestamp" => $time,"state"=>$state);

				 $userjson = file_get_contents("user.json");  //string类型的

				 $userjson = json_decode($userjson,true);//将userjson的string类型转化为数组类型，true值返回的是数组而非Object。
			     array_push($userjson,$data);

				 $json = json_encode($userjson);//返回json类型的字符串
			     file_put_contents("user.json", $json);
				 echo json_encode(true);

        }

		 /*
		  * 退出
		  */
		 if($type == "quit"){
		 	$name = $_POST["name"];
			 $json = file_get_contents("user.json");
			 $arr_json = json_decode($json,true);
			 for($i = 0;$i<count($arr_json);$i++){
			 	if($arr_json[$i]["name"] == $name){
			 		$arr_json[$i]["state"] = "0";
			 	}
			 }

			 file_put_contents("user.json", json_encode($arr_json));
//			 echo json_encode(true);
		 }
   }
?>