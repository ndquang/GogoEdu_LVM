var name="d_";
var i_cur=0;
Init()
{
	MoveObjectTo("","",-1,-1,20,5,2);
	for(var i=0; i< 4; i++)
	{
	SetShowObject("","d_"+i,0);
	SetMoveView("","c_"+i,1);
	}
	var i_= Random(4);
	while(i_==i_cur)
		i_= Random(4);
	i_cur=i_;
	name="d_"+i_cur;
	PlayWave("","","ID_SOUND"+i_cur);
	SetShowObject("",name,1);
	MoveObjectTo("",name,300,GetTop("",name),20,5,1);
}Nghe()
{
	var aaa= GetName("");
	PlayWave("","","ID_SOUND"+rightStr(aaa,1));
}

CheckIn(){
	var b= false;
	if(RectInRect("",name,""))
		{
			if(GetText("","")==GetText("",name))
				{
				  var le = GetLeft("",name);
				  var to = GetTop("",name);
				  MoveObjectTo("","",le,to);
				  SetShowObject("",name,0);
				  MoveObjectTo("",name,-1,-1);
				  b = true;
			      PlaySound("ID_SOUND_CLICK");
				}
		}
	if(!b)
		{
		MoveObjectTo("","",-1,-1,20,5,2);
		PlaySound("ID_SOUND_FALSE");
		}
	else 
	{
		Delay("MoveObjectTo('','',-1,-1,20,5,2)",5000);
		Delay("Init()",5000);
		PlaySound("ID_SOUND_TRUE");
	}
	InvalidateObj("","");
}

var af[4]={0,0,0,0};
Init2()
{
	for(var i=0; i< 4; i++)
	{
	af[i]=0;
	SetMoveView("","d_"+i,1);
	MoveObjectTo("","d_"+i,-1,-1,20,5,1);
	}
}

CheckPage2(){
	var b= false;
	var i=0;
      while(i<4 && !b){
	if(RectInRect("","t_"+i,""))
		{
			if(GetText("","")== GetText("","t_"+i))
				{
				  var le = GetLeft("","t_"+i);
				  var to = GetTop("","t_"+i);
				  MoveObjectTo("","",le,to);
				  b= true;
				  PlaySound("ID_SOUND_CLICK");
				  af[i] = GetText("","");
				}
		}
		i++;
	}
	if(!b)
		{
			MoveObjectTo("","",-1,-1,10,5,2);
			PlaySound("ID_SOUND_FALSE");
		}

	else {
		var xxx= true;
		for(var x=0; x < 4; x++)
		 {
		   if(af[x]==0)
			xxx=false;
		}
		if(xxx == true){
		Delay("Init2()",5000);
		PlaySound("ID_SOUND_TRUE");
		}
	}
	InvalidateObj("","");
}