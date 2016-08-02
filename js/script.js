// JavaScript Document
var list = document.querySelectorAll(".middle-2 li");
for(var i=0;i<list.length;i++)
{
	list[i].onmouseover=function()
	{
		for(var j=0;j<list.length;j++)
		{
			if(list[j].className=="m2-1")
			{
			 	list[j].className="";
				break;
			}
			
		}	
		
		this.className="m2-1";
	}
	
}